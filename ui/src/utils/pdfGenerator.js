import html2pdf from "html2pdf.js";

export const generatePDF = async (element) => {
  if (!element) {
    throw new Error("No element provided for PDF generation");
  }

  // Clone the element to avoid modifying the original
  const clonedElement = element.cloneNode(true);

  // Remove all editable classes and attributes from the cloned element
  const editableElements = clonedElement.querySelectorAll(".editable");
  editableElements.forEach((el) => {
    el.classList.remove("editable");
    el.removeAttribute("contenteditable");
    el.removeAttribute("data-field");
  });

  // Remove edit mode styling
  clonedElement.classList.remove("edit-mode-active");

  // Configure html2pdf options for A4 pages
  const opt = {
    margin: [0, 0, 0, 0], // No margins since we handle them in CSS
    filename: "Resume_Anubhav_Choubey.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 1.5,
      useCORS: true,
      letterRendering: true,
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
    },
    jsPDF: {
      unit: "px",
      format: [794, 1123],
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(clonedElement).save();
    return true;
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw error;
  }
};
