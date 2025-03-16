import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>
            <strong>
              <a href="#" className="feedback-link">
                Got Feedback?
              </a>
            </strong>{" "}
            Tell us what you think.
          </p>
          <p>
            <strong>IdentityTheft.gov</strong> is the federal government’s
            one-stop resource for identity theft victims. The site provides
            streamlined checklists and sample letters to guide you through the
            recovery process.
          </p>
          <p>
            Visit{" "}
            <a href="#" className="link">
              ftc.gov/idtheft
            </a>{" "}
            for prevention tips and free resources to share in your community.
          </p>
          <p>
            <a href="#" className="link">
              Privacy Policy
            </a>
          </p>
          <p>OMB CONTROL#: 3084-0169</p>
          <p className="footer-note">
            Under the Paperwork Reduction Act, federal agencies are not allowed
            to collect information from the public without a valid OMB control
            number.
          </p>
        </div>
        <div className="footer-right">
          <a href="#" className="highlight-link">
            Create a Personal Recovery Plan
          </a>
          <br />
          <a href="#" className="highlight-link">
            Browse Recovery Steps
          </a>
          <hr />
          <ul>
            <li>
              <a href="#" className="link">
                Know Your Rights
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Sample Letters
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Warning Signs of Identity Theft
              </a>
            </li>
            <li>
              <a href="#" className="link">
                What To Do If Your Info Is Lost or Stolen
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Credit Bureau Contact Info
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Other Helpful Contact Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
