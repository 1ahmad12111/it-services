
import React from "react";

const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-consulting-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Founded in 2010, Mosivant began with a clear mission: to help businesses leverage technology for growth and innovation. Our founder, Alexander Mitchell, recognized that many companies were struggling to keep pace with rapidly evolving digital landscapes.
            </p>
            <p>
              What started as a small team of dedicated consultants has grown into a comprehensive IT solutions provider trusted by businesses across multiple industries. Throughout our journey, we've maintained our commitment to delivering tailored, high-quality solutions that address our clients' unique challenges.
            </p>
            <p>
              Today, Mosivant is recognized as a leader in digital transformation, helping organizations navigate complex technological environments and implement solutions that drive real business value. Our team of experts brings diverse skills and experiences, united by a shared passion for technology and client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
