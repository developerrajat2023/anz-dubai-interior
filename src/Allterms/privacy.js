import React from "react";
import "./privacy.css";

export function Privacy() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f9f9f9",
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
    <div className='privacy'>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p style={textStyle}>
        At ANZ Interior Design Company ("Company"), we value your privacy and
        are committed to protecting your personal data. This Privacy Policy
        explains how we collect, use, and safeguard your information in
        compliance with UAE regulations.
      </p>

      <h2 style={subheadingStyle}>1. Information We Collect</h2>
      <p style={textStyle}>
        We may collect the following types of personal information:
      </p>
      <ul style={listStyle}>
        <li>
          Contact details such as name, email address, phone number, and
          address.
        </li>
        <li>
          Project-related information to tailor our services to your needs.
        </li>
        <li>Payment and billing information for service transactions.</li>
        <li>
          Website usage data, including cookies and analytics, to improve our
          services.
        </li>
      </ul>

      <h2 style={subheadingStyle}>2. How We Use Your Information</h2>
      <p style={textStyle}>
        The information we collect is used for the following purposes:
      </p>
      <ul style={listStyle}>
        <li>To provide and manage our interior design services.</li>
        <li>
          To communicate with you regarding project updates and inquiries.
        </li>
        <li>To process payments and manage billing.</li>
        <li>To improve our website and user experience.</li>
      </ul>

      <h2 style={subheadingStyle}>3. Data Sharing and Disclosure</h2>
      <p style={textStyle}>
        We do not sell, rent, or share your personal information with third
        parties except:
      </p>
      <ul style={listStyle}>
        <li>With trusted partners or contractors involved in your project.</li>
        <li>As required by UAE law or in response to legal proceedings.</li>
        <li>
          To protect the rights, property, or safety of our company or clients.
        </li>
      </ul>

      <h2 style={subheadingStyle}>4. Data Security</h2>
      <p style={textStyle}>
        We take appropriate technical and organizational measures to protect
        your personal data from unauthorized access, alteration, disclosure, or
        destruction.
      </p>

      <h2 style={subheadingStyle}>5. Your Rights</h2>
      <p style={textStyle}>You have the right to:</p>
      <ul style={listStyle}>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate or incomplete data.</li>
        <li>
          Request deletion of your personal data, subject to legal requirements.
        </li>
        <li>Withdraw consent for data processing at any time.</li>
      </ul>

      <h2 style={subheadingStyle}>6. Cookies</h2>
      <p style={textStyle}>
        Our website may use cookies to enhance user experience. You can modify
        your browser settings to decline cookies, but this may limit your access
        to certain features.
      </p>

      <h2 style={subheadingStyle}>7. Changes to This Policy</h2>
      <p style={textStyle}>
        We reserve the right to update this Privacy Policy as needed. Clients
        will be notified of significant changes before they take effect.
      </p>

      <h2 style={subheadingStyle}>8. Contact Us</h2>
      <p style={textStyle}>
        If you have any questions or concerns about this Privacy Policy, please
        contact us:
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
