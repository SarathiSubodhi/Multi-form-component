"use client";

import React from "react";

const Step2 = ({ formData, handleChange }) => (
  <div className="h-[75vh] overflow-y-auto">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
      2. Requested Services
    </h2>

    <div className="mb-4 w-1/2">
      {/* Meal Plan Options */}
      <div id="meal-plan" className="mb-8">
        <label className="block mb-2 text-gray-700 font-bold">
          Choose the Meal Plan you would like to receive:{" "}
          <span className="text-red-600">*</span>
        </label>
        <div className="flex flex-col">
          <label className="flex items-center mb-2 text-black">
            <input
              type="radio"
              name="mealPlan"
              value="full21"
              checked={formData.mealPlan === "full21"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Full 21 meals
          </label>
          <label className="flex items-center mb-2 text-black">
            <input
              type="radio"
              name="mealPlan"
              value="lunchDinner"
              checked={formData.mealPlan === "lunchDinner"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Lunch and Dinner
          </label>
          <label className="flex items-center mb-2 text-black">
            <input
              type="radio"
              name="mealPlan"
              value="onlyDinner"
              checked={formData.mealPlan === "onlyDinner"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Only Dinner
          </label>
        </div>
      </div>

      {/* Days Requested */}
      <div id="days-requested" className="mb-8">
        <label className="block mb-2 text-gray-700 font-bold">
          Days Requested: <span className="text-red-600">*</span>
        </label>
        <div className="flex flex-col">
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="sunday"
              onChange={handleChange}
              className="mr-2"
            />
            Sunday
          </label>
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="monday"
              onChange={handleChange}
              className="mr-2"
            />
            Monday
          </label>
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="tuesday"
              onChange={handleChange}
              className="mr-2"
            />
            Tuesday
          </label>
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="wednesday"
              onChange={handleChange}
              className="mr-2"
            />
            Wednesday
          </label>
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="thursday"
              onChange={handleChange}
              className="mr-2"
            />
            Thursday
          </label>
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="friday"
              onChange={handleChange}
              className="mr-2"
            />
            Friday
          </label>
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              name="daysRequested"
              value="saturday"
              onChange={handleChange}
              className="mr-2"
            />
            Saturday
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Step2;
