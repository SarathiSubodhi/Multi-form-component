"use client";

import React from "react";

const Step3 = ({ formData, handleChange }) => {
  return (
    <div className="h-[75vh] overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        3. Delivery and Contact Information
      </h2>

      <div className="mb-4 w-1/2">
        {/* Delivery Address */}
        <div id="delivery-address" className="mb-8">
          <label className="block mb-2 text-gray-700 font-bold">
            Delivery Address <span className="text-red-600">*</span>
          </label>
          <div className="flex mb-2">
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/2"
              required
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc"
              value={formData.apartment}
              onChange={handleChange}
              className="border border-black p-2 rounded-xl w-1/2"
            />
          </div>
          <div className="flex mb-2">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/2"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/2"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal / Zip Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="border border-black p-2 rounded-xl w-1/2"
              required
            />
          </div>
          <div className="block mb-2">
            <select
              name="country"
              onChange={handleChange}
              className="border rounded-xl border-black p-2 w-full"
              required
            >
              <option value="">Select Country</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div id="delivery-instructions" className="mb-2">
          <label className="block text-gray-700 font-bold">
            Delivery Instructions (optional)
          </label>
          <textarea
            name="deliveryInstructions"
            value={formData.deliveryInstructions}
            onChange={handleChange}
            className="border border-black p-2 rounded-xl w-full h-24 text-black"
          />
        </div>

        {/* Contact Information */}
        <div id="contact-information" className="mb-8">
          <label className="block mb-2 text-gray-700 font-bold text-xl mt-6">
            Contact Information <span className="text-red-600">*</span>
          </label>

          <label className="block mb-2 text-gray-700 font-bold">
            Phone Number <span className="text-red-600">*</span>
          </label>

          <div className="flex mb-2">
            <input
              type="text"
              name="phoneNumberAreaCode"
              placeholder="xxx"
              value={formData.phoneNumberAreaCode}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/3 text-black"
              maxLength="3"
              required
            />
            <input
              type="text"
              name="phoneNumberCentralOfficeCode"
              placeholder="xxx"
              value={formData.phoneNumberCentralOfficeCode}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/3 text-black"
              maxLength="3"
              required
            />
            <input
              type="text"
              name="phoneNumberLineNumber"
              placeholder="xxxx"
              value={formData.phoneNumberLineNumber}
              onChange={handleChange}
              className="border border-black p-2 rounded-xl w-1/3 text-black"
              maxLength="4"
              required
            />
          </div>

          <label className="block mb-2 text-gray-700 font-bold">
            Secondary Phone Number <span className="text-red-600">*</span>
          </label>

          <div className="flex mb-2">
            <input
              type="text"
              name="secondaryPhoneNumberAreaCode"
              placeholder="xxx"
              value={formData.secondaryPhoneNumberAreaCode}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/3 text-black"
              maxLength="3"
            />
            <input
              type="text"
              name="secondaryPhoneNumberCentralOfficeCode"
              placeholder="xxx"
              value={formData.secondaryPhoneNumberCentralOfficeCode}
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/3"
              maxLength="3"
            />
            <input
              type="text"
              name="secondaryPhoneNumberLineNumber"
              placeholder="xxxx"
              value={formData.secondaryPhoneNumberLineNumber}
              onChange={handleChange}
              className="border border-black p-2 rounded-xl w-1/3"
              maxLength="4"
            />
          </div>

          <div className="block mt-6">
            <label className="block mb-2 text-gray-700 font-bold">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email (applicant.email@email.com)"
              value={formData.email}
              onChange={handleChange}
              className="border border-black p-2 rounded-xl w-full text-black"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
