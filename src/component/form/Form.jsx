import logo from "./../../assets/Receipt.png";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomTextInput from "./CustomTextInput";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";

const validationSchema = yup.object({
  amount: yup.string("Enter an amount").required("Amount is required"),
  purpose: yup.string("Enter a purpose").required("Purpose is required"),
  receipt_number: yup
    .string("Enter receipt number")
    .required("Receipt Number is required"),
  from: yup.string("Enter a Name").required("Name is required"),
});

const Form = ({ setHasValue, formData, setFormData }) => {
  const [selectedValue, setSelectedValue] = useState("Transfer");
  const [selectedDateValue, setSelectedDateValue] = useState(null);

  const formik = useFormik({
    initialValues: {
      amount: "foobar@example.com",
      purpose: "Building the house of the Lord",
      from: "Adegbola Joseph",
      receipt_number: "0001",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const updatedFormData = { ...values, selectedValue, selectedDateValue };
      setFormData(updatedFormData);
      setHasValue(true);
    },
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDateValue(date);
  };

  return (
    <div className="">
      <div className="header de-flex">
        <div className="">
          <img src={logo} alt="logo" className="logo" />
          <div className="">
            <h3 className="society-name">Christian Companions Society</h3>
            <p className="society-sub-name">
              St John’s Anglican Church Aroloya Lagos
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="form-body">
        <CustomTextInput
          inputLabel={"Receipt Number"}
          inputValue={formik.values.receipt_number}
          handleChangeValue={formik.handleChange}
          name="receipt_number"
          formError={
            formik.touched.receipt_number &&
            Boolean(formik.errors.receipt_number)
          }
          formBlur={formik.handleBlur}
          formHelperText={
            formik.touched.receipt_number && formik.errors.receipt_number
          }
        />
        <CustomTextInput
          inputLabel={"Amount"}
          inputValue={formik.values.amount}
          handleChangeValue={formik.handleChange}
          name="amount"
          formError={formik.touched.amount && Boolean(formik.errors.amount)}
          formBlur={formik.handleBlur}
          formHelperText={formik.touched.amount && formik.errors.amount}
        />
        <CustomTextInput
          inputLabel={"Purpose"}
          inputValue={formik.values.purpose}
          handleChangeValue={formik.handleChange}
          name="purpose"
          formError={formik.touched.purpose && Boolean(formik.errors.purpose)}
          formBlur={formik.handleBlur}
          formHelperText={formik.touched.purpose && formik.errors.purpose}
        />
        <CustomTextInput
          inputLabel={"From"}
          inputValue={formik.values.from}
          handleChangeValue={formik.handleChange}
          name="from"
          formError={formik.touched.from && Boolean(formik.errors.from)}
          formBlur={formik.handleBlur}
          formHelperText={formik.touched.from && formik.errors.from}
        />

        <CustomDatePicker handleDateChange={handleDateChange} />

        <FormControl sx={{ mt: "1rem", mb: "1rem" }}>
          <FormLabel
            sx={{ color: "black", fontWeight: "700" }}
            id="demo-radio-buttons-group-label"
          >
            Payment method
          </FormLabel>
          <RadioGroup
            aria-label="payment method"
            name="payment-method"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Transfer"
              control={<Radio />}
              label="Transfer"
            />
            <FormControlLabel
              value="Cheque"
              control={<Radio />}
              label="Cheque"
            />
            <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
          </RadioGroup>
        </FormControl>

        <Button
          color="success"
          variant="contained"
          fullWidth
          type="submit"
          disabled={
            !formik.isValid || formik.isSubmitting || !selectedDateValue
          }
        >
          Preview
        </Button>
      </form>
    </div>
  );
};

export default Form;
