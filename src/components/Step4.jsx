// Step4.js
import React from "react";

const Step4 = ({ formData, handleSubmit }) => {
  return (
    <div className="h-[75vh] overflow-y-auto">
      <div className="p-8 bg-white rounded-lg max-w-7xl w-full">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Review / Sign / Submit
        </h2>

        {/* Review Information Grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* Applicant's Name */}
          <div className="col-span-1">
            <h3 className="text-gray-700 font-bold">Applicant’s Name:</h3>
            <p className="text-gray-600">
              {formData.firstName} {formData.lastName}
            </p>
          </div>

          {/* Age */}
          <div className="col-span-1">
            <h3 className="text-gray-700 font-bold">Age:</h3>
            <p className="text-gray-600">{`${formData.age.dd}/${formData.age.mm}/${formData.age.yyyy}`}</p>
          </div>

          {/* Disability */}
          <div className="col-span-1">
            <h3 className="text-gray-700 font-bold">
              Do you have a disability?
            </h3>
            <p className="text-gray-600">
              {formData.disability ? "Yes" : "No"}
            </p>
          </div>

          {/* Disability Documentation Upload */}
          <div className="col-span-1">
            <h3 className="text-gray-700 font-bold">
              Disability Documentation Upload:
            </h3>
            <p className="text-gray-600">
              {formData.disabilityFile?.name || "No file uploaded"}
            </p>
          </div>

          {/* Meal Plan Choice */}
          <div className="col-span-1">
            <h3 className="text-gray-700 font-bold">Meal Plan Choice:</h3>
            <p className="text-gray-600">Full 21 Meals</p>
          </div>

          {/* Days Requested */}
          <div className="col-span-3">
            <h3 className="text-gray-700 font-bold">Days Requested:</h3>
            <p className="text-gray-600">
              Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
            </p>
          </div>

          {/* Delivery Address */}
          <div className="col-span-4 mt-4">
            <h3 className="text-gray-700 font-bold">Delivery Address:</h3>
            <p className="text-gray-600">1234 River Lane, City, ST, 10240</p>
          </div>

          {/* Delivery Instructions */}
          <div className="col-span-4">
            <h3 className="text-gray-700 font-bold">Delivery Instructions:</h3>
            <p className="text-gray-600">
              Drop on front porch next to bench, ring doorbell.
            </p>
          </div>

          {/* Phone Number */}
          <div className="col-span-1 mt-4">
            <h3 className="text-gray-700 font-bold">Phone Number:</h3>
            <p className="text-gray-600">505-555-5678</p>
          </div>

          {/* Email */}
          <div className="col-span-1 mt-4">
            <h3 className="text-gray-700 font-bold">Email:</h3>
            <p className="text-gray-600">john.doe556@jmail.com</p>
          </div>

          {/* Signature */}
          <div className="col-span-4 mt-4">
            <h3 className="text-gray-700 font-bold">
              Type Name Here to Virtually Sign Document *
            </h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-10 border border-gray-300 rounded px-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-10 border border-gray-300 rounded px-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
