import React, { useState, useCallback, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ResumeContainer from "./components/ResumeContainer";
import StatusBar from "./components/StatusBar";
import { useResumeData } from "./hooks/useResumeData";
import { useEditMode } from "./hooks/useEditMode";
import { generatePDF } from "./utils/pdfGenerator";

function App() {
  const { resumeData, updateField, saveData, loadData, resetData } =
    useResumeData();
  const { editMode, toggleEditMode } = useEditMode();
  const [statusMessage, setStatusMessage] = useState(
    'Ready to edit. Click "Enable Edit Mode" to start editing content.'
  );
  const [jobDescription, setJobDescription] = useState("");
  const resumeRef = useRef(null);

  const handleSaveChanges = useCallback(() => {
    saveData();
    setStatusMessage("Changes saved successfully!");
    setTimeout(() => {
      setStatusMessage(
        editMode
          ? "Edit Mode: ON - Click on any text to edit it."
          : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
      );
    }, 2000);
  }, [saveData, editMode]);

  const handleLoadChanges = useCallback(() => {
    const loaded = loadData();
    if (loaded) {
      setStatusMessage("Saved changes loaded successfully!");
      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 2000);
    } else {
      setStatusMessage("No saved changes found.");
      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 2000);
    }
  }, [loadData, editMode]);

  const handleResetToDefault = useCallback(() => {
    if (
      window.confirm("Are you sure you want to reset all content to default?")
    ) {
      resetData();
      setStatusMessage("Content reset to default!");
      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 2000);
    }
  }, [resetData, editMode]);

  const handleGeneratePDF = useCallback(async () => {
    if (!resumeRef.current) return;

    setStatusMessage("Generating PDF... Please wait.");
    try {
      await generatePDF(resumeRef.current);
      setStatusMessage("PDF generated successfully!");
      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 3000);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setStatusMessage("Error generating PDF. Please try again.");
      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 3000);
    }
  }, [editMode]);

  const handleUpdateWithAI = useCallback(() => {
    if (!jobDescription.trim()) {
      setStatusMessage("Please enter a job description first.");
      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 3000);
      return;
    }

    setStatusMessage("Analyzing job description... (Feature coming soon!)");

    // TODO: Implement AI-powered analysis
    setTimeout(() => {
      setStatusMessage("Job analysis complete! Check console for details.");
      console.log("Job Description Analysis:", {
        description: jobDescription,
        suggestions: [
          "Add more quantifiable achievements",
          "Include relevant keywords from job description",
          "Optimize bullet points for ATS systems",
        ],
      });

      setTimeout(() => {
        setStatusMessage(
          editMode
            ? "Edit Mode: ON - Click on any text to edit it."
            : 'Ready to edit. Click "Enable Edit Mode" to start editing content.'
        );
      }, 3000);
    }, 2000);
  }, [jobDescription, editMode]);

  const handleToggleEditMode = useCallback(() => {
    toggleEditMode();
    const newEditMode = !editMode;
    setStatusMessage(
      newEditMode
        ? "Edit Mode: ON - Click on any text to edit it."
        : 'Edit Mode: OFF - Click "Enable Edit Mode" to edit content.'
    );
  }, [editMode, toggleEditMode]);

  const handleFieldFocus = useCallback((fieldName) => {
    setStatusMessage(`Editing: ${fieldName}`);
  }, []);

  const handleFieldBlur = useCallback(() => {
    setStatusMessage("Edit Mode: ON - Click on any text to edit it.");
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        editMode={editMode}
        jobDescription={jobDescription}
        onJobDescriptionChange={setJobDescription}
        onToggleEditMode={handleToggleEditMode}
        onSaveChanges={handleSaveChanges}
        onLoadChanges={handleLoadChanges}
        onResetToDefault={handleResetToDefault}
        onGeneratePDF={handleGeneratePDF}
        onUpdateWithAI={handleUpdateWithAI}
      />

      <div className="flex-1 ml-80 p-5 overflow-y-auto h-screen box-border bg-gray-100 flex justify-center">
        <ResumeContainer
          ref={resumeRef}
          resumeData={resumeData}
          editMode={editMode}
          onUpdateField={updateField}
          onFieldFocus={handleFieldFocus}
          onFieldBlur={handleFieldBlur}
        />
      </div>

      <StatusBar message={statusMessage} />
    </div>
  );
}

export default App;
