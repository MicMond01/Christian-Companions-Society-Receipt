import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import React from "react";

const CustomDatePicker = ({ handleDateChange }) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Issued Date" onChange={handleDateChange} />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
