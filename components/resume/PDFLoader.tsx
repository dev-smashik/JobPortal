'use client'
import { FileText } from "lucide-react";

export default function PDFLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative">
        <FileText className="h-16 w-16 text-slate-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-slate-800 animate-spin"></div>
        </div>
      </div>
      <h3 className="mt-6 text-lg font-medium text-slate-800">Analyzing your resume</h3>
      <p className="text-sm text-slate-500 mt-2">This may take a moment</p>
    </div>
  );
}
