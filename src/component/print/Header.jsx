import React, { useEffect, useState } from "react";
import logo from "./../../assets/Receipt.png";

const Header = ({ formData }) => {
  const { selectedDateValue } = formData;
  const [uodatedDate, setUpdatedDate] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = selectedDateValue.date();
  const month = selectedDateValue.month();
  const year = selectedDateValue.year();

  const monthName = months[month];

  useEffect(() => {
    function getOrdinalNumber() {
      const remainder10 = day % 10;
      const remainder100 = day % 100;

      if (remainder10 === 1 && remainder100 !== 11) {
        const st = day + "st";
        setUpdatedDate(st);
      } else if (remainder10 === 2 && remainder100 !== 12) {
        const nd = day + "nd";
        setUpdatedDate(nd);
      } else if (remainder10 === 3 && remainder100 !== 13) {
        const rd = day + "rd";
        setUpdatedDate(rd);
      } else {
        const th = day + "th";
        setUpdatedDate(th);
      }
    }
    getOrdinalNumber();
  }, [day]);

  function generateRandom7DigitNumber() {
    const min = 1000000; // Smallest 7-digit number
    const max = 9999999; // Largest 7-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Example usage:
  const random7DigitNumber = generateRandom7DigitNumber();

  return (
    <div className="header de-flex">
      <div className="dis-flex">
        <img src={logo} alt="logo" className="logo" />
        <div className="">
          <h3 className="society-name">Christian Companions Society</h3>
          <p className="society-sub-name">
            St John’s Anglican Church Aroloya Lagos
          </p>
        </div>
      </div>
      <div className="">
        <div className="new-flex receipt-no">
          <b>Receipt No. : </b> <p className="date"> {random7DigitNumber}</p>
        </div>
        <div className="new-flex">
          <b>Date: </b>{" "}
          <p className="date"> {`${uodatedDate} ${monthName}, ${year}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
