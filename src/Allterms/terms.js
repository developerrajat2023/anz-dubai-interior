import "./terms.css";
import React from "react";

export function Terms() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f9f9f9",
    padding: "16px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#444",
  };

  const subheadingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "20px 0 10px",
    color: "#555",
    margin: "20px",
  };

  const textStyle = {
    fontSize: "16px",
    margin: "10px 0",
  };

  const listStyle = {
    margin: "10px 0 10px 20px",
    listStyleType: "disc",
  };

  return (
    <div className='termsConditions'>
      <h1 style={headingStyle}>Terms and Conditions</h1>
      <p style={textStyle}>
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p style={textStyle}>
        Welcome to ANZ Interior Design Company ("Company"). These terms and
        conditions ("Terms") govern your use of our services and website. By
        engaging our services or accessing our website, you agree to these
        Terms. Please read them carefully.
      </p>

      <h2 style={subheadingStyle}>1. Services Provided</h2>
      <p style={textStyle}>
        ANZ Interior Design specializes in residential, commercial, and retail
        interior design services, including consultations, design planning,
        project management, and execution.
      </p>
      <ul style={listStyle}>
        <li>
          Services are customized based on client requirements and detailed in
          the service agreement signed before the project begins.
        </li>
        <li>
          The scope of services may vary based on project specifications and
          client approvals.
        </li>
      </ul>

      <h2 style={subheadingStyle}>2. Client Responsibilities</h2>
      <ul style={listStyle}>
        <li>
          Provide accurate and complete information about the project
          requirements.
        </li>
        <li>
          Ensure timely approvals for design plans, materials, and other
          project-related decisions.
        </li>
        <li>
          Ensure site accessibility and readiness for the project to begin.
        </li>
      </ul>

      <h2 style={subheadingStyle}>3. Fees and Payments</h2>
      <ul style={listStyle}>
        <li>All project fees are outlined in the signed service agreement.</li>
        <li>
          Payment terms: [Specify terms, e.g., 50% upfront, 25% mid-project, 25%
          upon completion].
        </li>
        <li>Late payments may incur additional fees as per UAE regulations.</li>
        <li>
          Any changes to the project scope may result in additional costs, which
          will be communicated beforehand.
        </li>
      </ul>

      <h2 style={subheadingStyle}>4. Project Timeline</h2>
      <p style={textStyle}>
        ANZ Interior Design will provide an estimated timeline for project
        completion. Delays caused by client actions, site issues, or unforeseen
        circumstances may extend the timeline. ANZ is not liable for delays
        beyond its control, such as delays from third-party suppliers or
        government restrictions.
      </p>

      <h2 style={subheadingStyle}>5. Warranty and Liability</h2>
      <ul style={listStyle}>
        <li>
          ANZ Interior Design provides a [specify period, e.g., 1-year] warranty
          on workmanship.
        </li>
        <li>
          Materials and furnishings are subject to manufacturer warranties.
        </li>
        <li>
          ANZ is not responsible for damages caused by misuse, negligence, or
          third-party alterations.
        </li>
      </ul>

      <h2 style={subheadingStyle}>6. Intellectual Property</h2>
      <p style={textStyle}>
        All designs, drawings, and concepts provided by ANZ Interior Design are
        the intellectual property of the Company. Clients may not reproduce or
        share designs without written consent from ANZ Interior Design.
      </p>

      <h2 style={subheadingStyle}>7. Cancellation and Termination</h2>
      <ul style={listStyle}>
        <li>
          Either party may terminate the service agreement by providing written
          notice.
        </li>
        <li>
          If the client cancels the project after work has begun, fees for
          completed work and incurred costs will be due.
        </li>
        <li>
          ANZ may terminate the agreement for non-payment or breach of these
          Terms.
        </li>
      </ul>

      <h2 style={subheadingStyle}>8. Confidentiality</h2>
      <p style={textStyle}>
        All client information and project details are treated with
        confidentiality. ANZ Interior Design reserves the right to showcase
        completed projects in its portfolio, unless otherwise agreed in writing.
      </p>

      <h2 style={subheadingStyle}>9. Governing Law</h2>
      <p style={textStyle}>
        These Terms are governed by the laws of the United Arab Emirates. Any
        disputes will be resolved in accordance with Dubai jurisdiction.
      </p>

      <h2 style={subheadingStyle}>10. Changes to Terms</h2>
      <p style={textStyle}>
        ANZ Interior Design reserves the right to update these Terms at any
        time. Clients will be notified of significant changes before they take
        effect.
      </p>

      <h2 style={subheadingStyle}>11. Contact Information</h2>
      <p style={textStyle}>
        For questions or concerns regarding these Terms, please contact us:
      </p>
      <ul style={listStyle}>
        <li>
          <strong>Email:</strong> anzsquare786@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +97 04-236-6477
        </li>
        <li>
          <strong>Address:</strong> PO Box 14885 DUbai UAE
        </li>
      </ul>
    </div>
  );
}
