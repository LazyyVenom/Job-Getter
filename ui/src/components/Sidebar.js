import React from "react";
import { Edit3, Download, Sparkles } from "lucide-react";

const Sidebar = ({
  editMode,
  jobDescription,
  onJobDescriptionChange,
  onToggleEditMode,
  onGeneratePDF,
  onUpdateWithAI,
}) => {
  return (
    <div className="w-80 bg-slate-800 text-white p-5 box-border overflow-y-auto fixed h-screen left-0 top-0 z-50">
      <h1 className="mt-0 mb-2.5 text-2xl text-center">Resume Editor</h1>
      <p className="mb-5 text-sm leading-relaxed text-center">
        Click on any text in the resume to edit it. The format will remain
        unchanged.
      </p>

      {/* Job Description Section */}
      <div className="mb-6 p-4 bg-slate-700 rounded-lg">
        <h3 className="mt-0 mb-2.5 text-base text-gray-200">Job Description</h3>
        <textarea
          className="w-full min-h-32 p-2.5 border-none rounded-md text-sm resize-y box-border bg-gray-200 text-slate-800"
          value={jobDescription}
          onChange={(e) => onJobDescriptionChange(e.target.value)}
          placeholder="Paste the job description here to tailor your resume..."
        />
      </div>

      {/* Core Features */}
      <div className="space-y-3">
        <button
          className={`border-none py-3 px-4 rounded-md cursor-pointer text-sm transition-colors duration-300 w-full text-center flex items-center justify-center gap-2 ${
            editMode
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          onClick={onToggleEditMode}
        >
          <Edit3 size={16} />
          {editMode ? "Disable Edit Mode" : "Enable Edit Mode"}
        </button>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white border-none py-3 px-4 rounded-md cursor-pointer text-sm transition-colors duration-300 w-full text-center flex items-center justify-center gap-2"
          onClick={onGeneratePDF}
        >
          <Download size={16} />
          Download PDF
        </button>

        <button
          className="bg-purple-600 hover:bg-purple-700 text-white border-none py-3 px-4 rounded-md cursor-pointer text-sm transition-colors duration-300 w-full text-center flex items-center justify-center gap-2"
          onClick={onUpdateWithAI}
        >
          <Sparkles size={16} />
          Update with AI for JD
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
