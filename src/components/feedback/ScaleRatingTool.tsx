
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const ScaleRatingTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState([5]);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showTool, setShowTool] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", { rating: rating[0], feedback });
    
    // Here you would typically send this data to your backend
    toast({
      title: "Thank you for your feedback!",
      description: "Your input helps us improve our services.",
    });
    
    setSubmitted(true);
    
    // Hide feedback tool after some time
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setShowTool(false), 500);
    }, 3000);
  };

  if (!showTool) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 w-80 md:w-96">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-consulting-600 hover:bg-consulting-700 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Give Feedback
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Rate your experience</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X size={18} />
            </Button>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  How would you rate our service? (1-10)
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">1</span>
                  <Slider 
                    value={rating}
                    onValueChange={setRating}
                    min={1}
                    max={10}
                    step={1}
                    className="flex-grow"
                  />
                  <span className="text-gray-500">10</span>
                </div>
                <div className="text-center mt-2 font-medium">
                  {rating[0]}
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Any additional feedback?
                </label>
                <Textarea 
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us how we can improve..."
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-consulting-600 hover:bg-consulting-700 text-white"
              >
                Submit Feedback
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <p className="text-gray-700">
                Thank you for your feedback! We appreciate your input.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScaleRatingTool;
