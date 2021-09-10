import React from "react";
import owner from "../../assets/images/contact/owner.jpg";
import ContactAddress from "./ContactAddress";
import Booking from "./Booking";
import OpeningTimes from "./OpeningTimes";
export default function Contact() {
  return (
    <div className="container">
      <div className="page-image">
        <img src={owner} alt="vegan" />
      </div>
      <div className="page-details">
        <h2>Opening times</h2>
        <OpeningTimes/>
        <h2>Booking table</h2>
        <Booking/>
        <h2>Address</h2>
        <ContactAddress/>
      </div>
    </div>
  );
}
