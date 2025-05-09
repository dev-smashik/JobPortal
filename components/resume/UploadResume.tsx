'use client'
import { useState, useRef } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Upload, 
  File, 
  Loader2 
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PDFLoader from "./PDFLoader";
import { ResumeAnalysis } from "./ResumeAnalysis";

export default function UploadResume() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      setAnalysis(null);
      setError(null);

      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File is too large. Maximum size is 5MB.");
      }

      const formData = new FormData();
      formData.append("file", file);
      
      const response = await fetch("/api/process-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Failed to process resume: ${errorData.error || response.statusText}`);
      }

      const analysisData = await response.json();
      setAnalysis(analysisData);
    } catch (error) {
      console.error("Error processing resume:", error);
      setError((error as Error).message || "Failed to process resume. Please try again.");
    } finally {
      setIsLoading(false);
      // Reset the file input to allow uploading the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">AI Resume Analyzer</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Upload your resume</CardTitle>
          <CardDescription>
            Our AI will analyze your resume and provide personalized feedback to help you improve it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div 
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={triggerFileInput}
            >
              {!isLoading ? (
                <>
                  <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-primary">Click to upload</span> or drag and drop
                  </div>
                  <div className="text-xs text-muted-foreground">
                    PDF files only (Max 5MB)
                  </div>
                </>
              ) : (
                <Loader2 className="h-10 w-10 mx-auto animate-spin text-primary" />
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf"
                className="hidden"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {isLoading && (
              <div className="py-6">
                <PDFLoader />
              </div>
            )}

            {analysis && <ResumeAnalysis analysis={analysis} />}

            <TooltipProvider>
              <div className="flex gap-2 justify-end">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="secondary" 
                      onClick={() => setAnalysis(null)}
                      disabled={!analysis || isLoading}
                    >
                      Clear Results
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Clear the current analysis results</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      onClick={triggerFileInput}
                      disabled={isLoading}
                    >
                      {analysis ? "Upload New Resume" : "Upload Resume"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upload a PDF resume for AI analysis</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}