import React from "react";

const steps = [
  { id: 1, title: "Register", description: "Sign up to create an account." },
  { id: 2, title: "Select Doctor", description: "Browse and select a doctor." },
  { id: 3, title: "Consult", description: "Get real-time consultation." },
];

const HowItWorks = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <span className="text-3xl font-bold text-blue-500">{step.id}</span>
            <h4 className="text-xl font-bold mt-2">{step.title}</h4>
            <p className="text-gray-600 mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
