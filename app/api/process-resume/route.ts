export const runtime = 'nodejs'; 
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pdfParse from "pdf-parse";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


export async function POST(request: NextRequest) {
    console.log("API route called"); 
    console.log("Request method:", request.method);
    
    try {
     
      const formData = await request.formData();
      const file = formData.get("file") as File;
      
      console.log("File received:", file?.name);
      
      if (!file) {
        return NextResponse.json(
          { error: "No file provided" },
          { status: 400 }
        );
      }
      
     
      if (!file.type.includes("pdf")) {
        return NextResponse.json(
          { error: "Only PDF files are supported" },
          { status: 400 }
        );
      }
      
     
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      console.log("Processing PDF...");
      
    
      const data = await pdfParse(buffer);
      const fullText = data.text;
      
      console.log("PDF text extracted, length:", fullText.length);
      
     
      const prompt = `
      You are a professional resume reviewer. Analyze the following resume text and provide:
  
      1. A percentage score (0-100) indicating how perfect the resume is
      2. A brief overview of the resume quality
      3. 3-5 strengths of the resume
      4. 3-5 areas for improvement
      5. Any formatting issues detected
      6. Content suggestions to improve impact
      7. Suggest Job options based on the resume content
      8. if resume score is less than 50% then reject the resume and suggest to improve it.
  
      Format your response as a JSON object with the following structure:
      {
        "score": number,
        "overview": "string",
        "strengths": ["string", "string", ...],
        "improvements": ["string", "string", ...],
        "formatIssues": ["string", "string", ...],
        "contentSuggestions": ["string", "string", ...],
        "jobSuggestions": ["string", "string", ...],
        "reject": boolean
      }
  
      Here is the resume to analyze:
      ${fullText}
      `;
  
      console.log("Calling Gemini API...");
      const result = await model.generateContent(prompt);
      const response = result.response;
      const responseText = response.text();
      
      console.log("Gemini response received");
      
    
      let jsonMatch = responseText.match(/\{[\s\S]*\}/);
      let analysisData = jsonMatch 
        ? JSON.parse(jsonMatch[0])
        : {
            score: 50,
            overview: "Could not properly analyze the resume format.",
            strengths: ["Unable to determine strengths"],
            improvements: ["Please check if the resume format is standard"],
            formatIssues: ["Resume format may be non-standard or complex"],
            contentSuggestions: ["Consider using a simpler format"],
            jobsSuggestions: ["Software Engineer", "Data Analyst"],
            reject: true,
          };
      
      return NextResponse.json(analysisData);
      
    } catch (error) {
      console.error("Error processing resume:", error);
      return NextResponse.json(
        { error: "Failed to process resume", details: (error as Error).message },
        { status: 500 }
      );
    }
  }