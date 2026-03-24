
import React from "react";

const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-coral rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Founded in 2022 by Faisal, Mosivant was born from a lifelong passion for technology and a genuine desire to help businesses succeed. Having written his first lines of code at age 15, Faisal spent years honing his craft before earning a Bachelor of Technology from Amity University in India and later a Master's degree from Ashland University in the USA.
            </p>
            <p>
              That combination of deep technical expertise and real-world experience across industries gave Faisal a clear perspective: many small and medium businesses struggle to find reliable, high-quality tech partners who truly understand their needs. Mosivant was created to fill that gap — offering hands-on consulting, modern web development, and IT solutions tailored to each client's goals.
            </p>
            <p>
              Today, Mosivant works with freelance clients across multiple industries, delivering projects built on certified expertise in React, TypeScript, and JavaScript. Based in Columbus, OH, we remain committed to the same mission we started with — turning technology into a real competitive advantage for every business we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
