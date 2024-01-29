import React, { useRef } from "react";
import Header from "./Header";
import RecieptBody from "./RecieptBody";
import { Button } from "@mui/material";
import generatePDF from "react-to-pdf";

const PrintOut = ({ formData }) => {
  const { from } = formData;

  const targetRef = useRef(null);

  const fileName = from + ".pdf";
  const options = {
    filename: fileName,
    page: {
      margin: 20,
      format: "A5",
      orientation: "landscape",
    },
  };

  // const { toPDF, targetRef } = usePDF({ filename: fileName });
  const downloadPdf = () => generatePDF(targetRef, options);

  return (
    <div className="">
      <div ref={targetRef} className="receipt-printout">
        <Header formData={formData} />
        <RecieptBody formData={formData} />
      </div>

      <Button onClick={() => downloadPdf()} color="success" variant="contained">
        Download PDF
      </Button>
    </div>
  );
};

export default PrintOut;
