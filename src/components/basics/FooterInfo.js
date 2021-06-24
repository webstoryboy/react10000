import React from "react";
import { Link } from "react-router-dom";

function FooterInfo() {
  return (
    <footer id="footerInfo">
      <div className="footer__info">
        <div>
          <p>Let’s create something new</p>
          <h3>
            LET`S Get IN
            <br />
            TOUCH
          </h3>
          <Link to="/contact" className="contact">
            Contact Me
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterInfo;
