
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Define the form schema type to match parent component
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().optional(),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
});

type FormValues = z.infer<typeof formSchema>;

interface DateTimeSelectorProps {
  form: UseFormReturn<FormValues>;
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  handleDateChange: (date: Date | undefined) => void;
  handleTimeSelect: (time: string) => void;
  prevStep: () => void;
  timeSlots: string[];
}

const DateTimeSelector = ({
  form,
  selectedDate,
  selectedTime,
  handleDateChange,
  handleTimeSelect,
  prevStep,
  timeSlots,
}: DateTimeSelectorProps) => {
  // Filter out weekends and past dates
  const isDateDisabled = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable weekends (0 = Sunday, 6 = Saturday)
    return day === 0 || day === 6 || date < today;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Schedule Your Consultation</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Label>Select a Date</Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            disabled={isDateDisabled}
            className="border rounded-md"
          />
          {form.formState.errors.date && (
            <p className="text-sm font-medium text-destructive">{form.formState.errors.date.message}</p>
          )}
        </div>
        
        <div className="space-y-4">
          <Label>Select a Time Slot</Label>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? "default" : "outline"}
                className={`text-sm ${
                  selectedTime === time
                    ? "bg-consulting-600 hover:bg-consulting-700"
                    : "hover:bg-consulting-50"
                }`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </Button>
            ))}
          </div>
          {form.formState.errors.time && (
            <p className="text-sm font-medium text-destructive">{form.formState.errors.time.message}</p>
          )}

          <div className="pt-4">
            <div className="bg-consulting-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Appointment Summary</h4>
              {selectedDate && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">Date:</span>{" "}
                  {selectedDate.toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              {selectedTime && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">Time:</span> {selectedTime}
                </p>
              )}
              {form.getValues().service && (
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Service:</span>{" "}
                  {form.getValues().service.replace("-", " ")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={prevStep}
          className="sm:flex-1"
        >
          Back
        </Button>
        <Button 
          type="submit" 
          className="bg-consulting-600 hover:bg-consulting-700 sm:flex-1"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default DateTimeSelector;
