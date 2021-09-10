import React from "react";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";

export default function PageFooter() {
  return (
    <footer>
      <div className="icons-footer">
        <a href="">
          {" "}
          <img src={facebookIcon} alt="" />
        </a>
        <a href="">
          <img src={instagramIcon} alt="" />
        </a>
      </div>
      <div className="copyright">© 2021 Emmanuel</div>
    </footer>
  );
}
