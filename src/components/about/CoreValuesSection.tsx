
import React from "react";

// Core values data
const coreValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies to solve complex business challenges.",
  },
  {
    title: "Integrity",
    description: "We build relationships based on trust, transparency, and ethical business practices.",
  },
  {
    title: "Client Focus",
    description: "We prioritize our clients' success and provide personalized, attentive service.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-consulting-50 p-6 rounded-lg border-l-4 border-consulting-500">
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
