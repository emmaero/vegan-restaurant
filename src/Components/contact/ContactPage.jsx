import React from "react";
import owner from "../../assets/images/contact/owner.jpg";
import ContactAddress from "./ContactAddress";
import Booking from "./Booking";
import map from "../../assets/images/map.png";
import OpeningTimes from "./OpeningTimes";
export default function ContactPage() {
  return (
    <div className="container">
      <div className="page-image">
        <img src={owner} alt="vegan" />
      </div>
      <div className="page-details">
        <h2>Opening times</h2>
        <OpeningTimes />
        <h2>Booking table</h2>
        <Booking />
        <h2>Address</h2>
        <ContactAddress />
        <div className="map-section">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
}
