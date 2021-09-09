import React from "react";
import owner from "../../assets/images/contact/owner.jpg";
import ContactAddress from "./ContactAddress";
export default function Contact() {
  return (
    <div className="container">
      <div className="page-image">
        <img src={owner} alt="vegan" />
      </div>
      <div className="page-details">
        <h2>Opening times</h2>

        <h2>Booking table</h2>
        <h2>Address</h2>
        <ContactAddress/>
      </div>
    </div>
  );
}
