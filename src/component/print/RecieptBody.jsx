import React from "react";

const RecieptBody = ({ formData }) => {
  const { amount, selectedValue, purpose, from } = formData;



  return (
    <div className="receipt-body">
      <div className="body-details">
        <div className="">
          <div className="body-details-wapper">
            <b className="">Amount: </b>
          </div>
          {/* <div className="body-details-wapper">
            <b className="">Words: </b>
          </div> */}
          <div className="body-details-wapper">
            <b className="">Purpose: </b>
          </div>
          <div className="body-details-wapper">
            <b className="">From: </b>
          </div>
        </div>

        <div className="inputText">
          <p> {amount}</p>
          {/* <p>{amount_words}</p> */}
          <p>{purpose}</p>
          <p>{from}</p>
        </div>
      </div>

      <div className="payment-method">
        <h4 className="">Payment method</h4>
        <p>{selectedValue}</p>
      </div>
    </div>
  );
};

export default RecieptBody;
