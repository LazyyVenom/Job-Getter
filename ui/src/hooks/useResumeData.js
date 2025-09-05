import { useState, useCallback, useEffect } from "react";

const defaultResumeData = {
  name: "Anubhav Choubey",
  contact: "+91 9131XXXXXX | choubey.anubhav253@gmail.com | anubhavchoubey.com",
  links: "GitHub | LinkedIn | Kaggle | Jabalpur, Madhya Pradesh",
  "job1-title": "Technical Intern @ Rozana.in (Onsite)",
  "job1-date": "Jul 2025 – Present",
  "job1-desc1":
    "Built a pipeline for automated image generation and editing using SOTA open-source models (Flux Krea Dev, Qwen Image Edit, Vision LLMs).",
  "job1-desc2":
    "Automated generation of display names, descriptions, and visual tags using Gemini API, and optimized Typesense queries for improved search relevance.",
  "job1-desc3":
    "Developed a pipeline to fetch, process, and deploy geofencing data for store coverage areas, enabling seamless production integration.",
  "job2-title": "Deep Learning Intern @ Devnex Technologies",
  "job2-date": "Sep 2024 – Jul 2025",
  "job2-desc1":
    "Deployed open-source models (Flux, Flux Kontext, InternVL, Gemma, etc.) on HuggingFace Endpoints and Modal.com with quantized versions for efficient remote execution.",
  "job2-desc2":
    "Optimized model performance by reducing memory usage and runtime through parallel processing, multithreading, and pipelining.",
  "job2-desc3":
    "Collaborated in professional environments using ticket-based systems, Git workflows, and maintained thorough code documentation.",
  "job3-title": "Intern @ Lexi.ai",
  "job3-date": "May 2024 – Jun 2025",
  "job3-desc1":
    "Developed a Django backend with a web-hosted SQL database, including MySQL schema design and robust validation for accurate data transmission.",
  "job3-desc2":
    "Contributed to website basic frontend development using HTML, CSS, JS (React).",
  "job4-title": "Freelancer",
  "job4-date": "Sep 2023 – Sep 2024",
  "job4-desc1":
    "Completed 15+ projects spanning Python, FastAPI, Django, Machine Learning, automation, and various Python frameworks.",
  "project1-title": "School Sphere – School Management System",
  "project1-tech": "(Python, FastAPI, Celery, Redis, JWT)",
  "project1-desc1":
    "Engineered a secure backend with JWT-based authentication and multi-role access control, ensuring safe request handling and granular read/write permissions.",
  "project1-desc2":
    "Optimized performance using Redis-based class-level caching, Celery for task scheduling, and multithreading to reduce redundant processing and improve scalability.",
  "project1-desc3":
    "Followed industry best practices (logging, lazy loading, exception handling) while building with Python, FastAPI, Redis, Celery, and JWT for a production-ready system.",
  "skills-languages":
    "<b>Languages & Frameworks:</b> Python, Django, FastAPI, SQL",
  "skills-ai":
    "<b>AI/ML & Deep Learning:</b> Prompting, ComfyUI, Pipelining, HuggingFace, CV, NLP, OpenCV, Inferencing",
  "education-btech":
    '<b>B.Tech (Artificial Intelligence and Data Science):</b> JEC (Est. 1947) – 8.4* <span class="float-right italic">Jul 2022 – Apr 2026</span>',
  accomplish1: "Led 'Team Conquerors!' to SIH'24 Finals.",
  accomplish2:
    "LeetCode: Solved 200+ problems in Data Structures and Algorithms.",
};

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [originalData] = useState(defaultResumeData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setResumeData({ ...defaultResumeData, ...parsedData });
      } catch (error) {
        console.error("Error parsing saved resume data:", error);
      }
    }
  }, []);

  const updateField = useCallback((field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const saveData = useCallback(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const loadData = useCallback(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setResumeData({ ...defaultResumeData, ...parsedData });
        return true;
      } catch (error) {
        console.error("Error parsing saved resume data:", error);
        return false;
      }
    }
    return false;
  }, []);

  const resetData = useCallback(() => {
    setResumeData(originalData);
    localStorage.removeItem("resumeData");
  }, [originalData]);

  return {
    resumeData,
    updateField,
    saveData,
    loadData,
    resetData,
  };
};
