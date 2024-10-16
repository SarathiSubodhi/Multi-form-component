"use client";

import React from "react";

const Step5 = ({ formData }) => {
  const handlePrint = () => {
    window.print(); // Print confirmation functionality
  };

  const handleReturnHome = () => {
    // Navigate back to the home page (adjust this based on your routing setup)
    window.location.href = "https://www.toyota.lk/"; // Change the path as needed
  };

  return (
    <div className="h-[75vh] overflow-y-auto">
      <div className="p-8 bg-white rounded-lg max-w-7xl w-full">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Thank You For Submitting Your Application
        </h2>

        <p className="text-lg text-gray-700 mb-4 text-center">
          Thank you for submitting your application. A confirmation email has
          been sent to the email address you provided. Please retain this for
          your records.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-center">
          If you have any inquiries or require assistance regarding your
          application, you may contact us during business hours at
          <a href="tel:1-800-123-4567" className="text-blue-600 font-semibold">
            1-800-123-4567
          </a>{" "}
          or via email at{" "}
          <a
            href="mailto:support@email.com"
            className="text-blue-600 font-semibold"
          >
            support@email.com
          </a>{" "}
          We appreciate your interest in the Meals on Wheels program, dedicated
          to supporting individuals in need of supplemental meal services.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-center underline font-semibold">
          Privacy Notice: Your personal information will be kept confidential
          and used only for processing your application. It will not be shared
          with third parties without your consent.
        </p>

        {/* Button Container */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleReturnHome}
            className="w-48 h-10 bg-[#562B56] text-white rounded transition duration-300 hover:bg-opacity-80"
          >
            Return to Home
          </button>
          <button
            onClick={handlePrint}
            className="w-48 h-10 bg-[#FF7C21] text-white rounded transition duration-300 hover:bg-opacity-80"
          >
            Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
