import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4"; // Import Step4
import Step5 from "./Step5"; // Import Step5
import { FaCheck } from "react-icons/fa"; // Import checkmark icon

const StepForm = () => {
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    onBehalf: false,
    proxyFirstName: "",
    proxyLastName: "",
    relationship: "",
    age: { mm: "", dd: "", yyyy: "" },
    disability: "",
    disabilityFile: null,

    // Step 2
    mealPlan: "",
    daysRequested: [],

    // Step 3
    street: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    deliveryInstructions: "",
    phoneNumberAreaCode: "",
    phoneNumberCentralOfficeCode: "",
    phoneNumberLineNumber: "",
    secondaryPhoneNumberAreaCode: "",
    secondaryPhoneNumberCentralOfficeCode: "",
    secondaryPhoneNumberLineNumber: "",
    email: "",

    // Step 4
    signature: {
      firstName: "",
      lastName: "",
    },
  });

  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleFileChange = (e) => {
    setFormData({ ...formData, disabilityFile: e.target.files[0] });
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
      if (!completedSteps.includes(step)) {
        setCompletedSteps([...completedSteps, step]); // Mark current step as completed
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Submitted successfully");
    setCompletedSteps([...completedSteps, 4]);
    setStep(5); // Move to Step 5 after submission
  };

  const goToStep = (stepNumber) => {
    if (completedSteps.includes(stepNumber - 1) || stepNumber === 1) {
      setStep(stepNumber); // Allow step navigation if previous step is completed
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
          />
        );
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Step4 formData={formData} handleSubmit={handleSubmit} />;
      case 5: // Add case for Step 5
        return <Step5 formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-7xl w-full">
        {/* Step Indicators */}
        <div className="flex justify-center items-center mb-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <React.Fragment key={item}>
              <div
                onClick={() => goToStep(item)}
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white cursor-pointer ${
                  completedSteps.includes(item)
                    ? "bg-[#FF7C21]"
                    : step === item
                    ? "bg-[#FF7C21]"
                    : "bg-[#562B56]"
                }`}
              >
                {completedSteps.includes(item) ? (
                  <FaCheck className="text-white" />
                ) : (
                  item
                )}
              </div>

              {/* Line between indicators */}
              {index < 4 && (
                <div className="w-12 h-2 bg-[#562B56]"></div> // Line between indicators
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Render the current step form */}
        {renderStep()}
        {/* Navigation Buttons */}
        {step < 5 && ( // Hide buttons when on Step 5
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`w-36 h-10 border-2 border-[#FF7C21] border-solid text-[#FF7C21] rounded transition duration-300 hover:bg-opacity-80 ${
                step === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Back
            </button>

            {step < 4 ? ( // Show Next button on steps 1-3 only
              <button
                onClick={handleNext}
                className="w-36 h-10 bg-[#FF7C21] text-white rounded transition duration-300 hover:bg-opacity-80"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-36 h-10 bg-[#FF7C21] text-white rounded transition duration-300 hover:bg-opacity-80"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepForm;
