import { useState, useCallback, useEffect } from "react";
import resumeDataJson from "../data/resumeData.json";

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState(resumeDataJson);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setResumeData({ ...resumeDataJson, ...parsedData });
      } catch (error) {
        console.error("Error parsing saved resume data:", error);
      }
    }
  }, []);

  const updateField = useCallback((section, field, value, index = null) => {
    setResumeData((prev) => {
      const newData = { ...prev };

      if (index !== null) {
        // Handle array updates (experience, projects, accomplishments)
        if (field === "description") {
          newData[section][index].descriptions[field] = value;
        } else {
          newData[section][index][field] = value;
        }
      } else if (
        section === "personalInfo" ||
        section === "skills" ||
        section === "education"
      ) {
        // Handle object updates
        newData[section][field] = value;
      } else {
        // Handle direct field updates (backward compatibility)
        newData[section] = value;
      }

      // Auto-save to localStorage when data changes
      localStorage.setItem("resumeData", JSON.stringify(newData));
      return newData;
    });
  }, []);

  return {
    resumeData,
    updateField,
  };
};
