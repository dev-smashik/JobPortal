import UploadResume from "@/components/resume/UploadResume"

export const metadata = {
  title: "AI Resume Analyzer",
  description: "Upload your resume for analysis and feedback.",
}

export default function page() {
  return (
    <>
     <UploadResume />
    </>
  )
}
