"use client";

import React from "react";

const Step1 = ({ formData, handleChange, handleFileChange }) => (
  <div className="h-[75vh] overflow-y-auto">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
      1. Your Information
    </h2>

    <div className="mb-4 w-1/2">
      {/* Applicant's Name */}
      <div id="applicant-name" className="mb-8">
        <label className="block mb-2 text-gray-700 font-bold">
          Applicant&apos;s Name <span className="text-red-600">*</span>
        </label>
        <div className="flex mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-black p-2 mr-2 rounded-xl w-1/2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-black p-2 rounded-xl w-1/2"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="onBehalf"
              checked={formData.onBehalf}
              onChange={handleChange}
              className="mr-2"
            />
            Are you submitting this application on behalf of someone else?
          </label>
        </div>
      </div>

      {/* Proxy Information */}
      {formData.onBehalf && (
        <div id="proxy-info" className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            If you are submitting this form for another person, please provide
            your information below:
          </h3>
          <div className="flex mb-4">
            <input
              type="text"
              name="proxyFirstName" // New state for proxy first name
              placeholder="First Name"
              onChange={handleChange}
              className="border border-black p-2 mr-2 rounded-xl w-1/2"
              required
            />
            <input
              type="text"
              name="proxyLastName" // New state for proxy last name
              placeholder="Last Name"
              onChange={handleChange}
              className="border border-black p-2 rounded-xl w-1/2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-bold">
              Relationship to applicant: <span className="text-red-600">*</span>
            </label>
            <select
              name="relationship" // New state for relationship
              onChange={handleChange}
              className="border rounded-xl border-black p-2 w-full"
              required
            >
              <option value="">Select</option>
              <option value="parent">Parent</option>
              <option value="guardian">Guardian</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      )}

      {/* Age */}
      <div id="age" className="mb-8">
        <label className="block mb-2 text-gray-700 font-bold">
          Age <span className="text-red-600">*</span>
        </label>
        <div className="flex mt-2">
          <input
            type="text"
            name="mm"
            placeholder="MM"
            value={formData.age.mm}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "age",
                  value: { ...formData.age, mm: e.target.value },
                },
              })
            }
            className="border rounded-xl border-black p-2 mr-2 w-16"
            required
          />
          <input
            type="text"
            name="dd"
            placeholder="DD"
            value={formData.age.dd}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "age",
                  value: { ...formData.age, dd: e.target.value },
                },
              })
            }
            className="border rounded-xl border-black p-2 mr-2 w-16"
            required
          />
          <input
            type="text"
            name="yyyy"
            placeholder="YYYY"
            value={formData.age.yyyy}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "age",
                  value: { ...formData.age, yyyy: e.target.value },
                },
              })
            }
            className="border rounded-xl border-black p-2 w-24"
            required
          />
        </div>
      </div>

      {/* Disability */}
      <div id="disability">
        <label className="block mb-2 text-gray-700 font-bold">
          Do you have a disability? <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center mt-2">
          <label className="mr-4">
            <input
              type="radio"
              name="disability"
              value="yes"
              onChange={handleChange}
              className="mr-1"
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="disability"
              value="no"
              onChange={handleChange}
              className="mr-1"
              required
            />
            No
          </label>
        </div>

        {formData.disability === "yes" && (
          <div className="mb-4">
            <label className="text-gray-700 italic">
              If yes, please upload documentation of your disability:
            </label>
            <div className="flex justify-between items-center mt-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="border p-2 rounded flex-grow mr-2"
                required
              />
              <button className="bg-[#FF7C21] text-white px-4 py-2 rounded">
                Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Step1;
