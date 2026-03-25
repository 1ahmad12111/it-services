
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              I started Mosivant in 2022 after seeing the same pattern again and again: growing businesses stuck between expensive agencies and unreliable freelancers. They needed a team that could ship fast, communicate clearly, and finish the job.
            </p>
            <p>
              My background combines a Bachelor of Technology from Amity University and a Master's degree from Ashland University. More importantly, it includes real client work, tight deadlines, and learning how to turn messy requirements into shipped products.
            </p>
            <p>
              Today we are a focused team based in Columbus, OH. We have delivered 50+ projects with a 100% completion rate, and we keep our promise simple: clear scope, weekly progress, and no disappearing act when things get hard.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-coral hover:bg-coral/90 text-black" asChild>
              <Link to="/services">See How We Can Help</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
