import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logoBase64 from "../img/pdf.png";

// Replace with your actual base64 string

const GeneratePDF = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add logo to the PDF
    doc.addImage(logoBase64, "PNG", 10, 10, 30, 30); // Use base64 string

    doc.autoTable({
      head: [
        [
          "#",
          "Creation Date",
          "drawingNo",
          "remarks",
          "Received Copies",
          "Revision",
          "Status",
        ],
      ],
      body: data.map((item, index) => [
        index + 1,
        new Date(item.creationDate).toLocaleDateString(),
        item.drawingNo || "N/A",
        item.receivedHardCopy || "N/A",
        item.receivedCopies || "N/A",
        item.revision || "N/A",
        item.status || "N/A",
      ]),
      margin: { top: 50 }, // Adjust margin to accommodate the logo
      styles: {
        cellPadding: 2,
        fontSize: 10,
      },
      headStyles: {
        fillColor: [0, 0, 0], // Black header
        textColor: [255, 255, 255], // White text
      },
      didDrawPage: (data) => {
        doc.setFontSize(10);
        doc.text("Report Generated on: " + new Date().toLocaleString(), 10, 40);
      },
    });

    doc.save("report.pdf");
  };

  return (
    <button className="btn btn-primary" onClick={generatePDF}>
      Download PDF
    </button>
  );
};

export default GeneratePDF;
