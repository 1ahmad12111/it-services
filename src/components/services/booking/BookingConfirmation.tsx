
import React from "react";
import { CheckCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingConfirmationProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  service: string;
  resetForm: () => void;
}

const BookingConfirmation = ({
  selectedDate,
  selectedTime,
  service,
  resetForm
}: BookingConfirmationProps) => {
  return (
    <div className="p-8 text-center max-w-md mx-auto">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Consultation Scheduled!</h3>
      <p className="mb-6 text-gray-600">
        Thank you for scheduling a consultation with our team. We've sent a confirmation email with all the details.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-center mb-4">
          <CalendarCheck className="h-6 w-6 text-consulting-600 mr-2" />
          <span className="font-medium">Appointment Details</span>
        </div>
        <p className="text-gray-700">
          {selectedDate?.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-gray-700">{selectedTime}</p>
        <p className="text-gray-700 mt-2">{service}</p>
      </div>
      <Button onClick={resetForm} className="bg-consulting-600 hover:bg-consulting-700">
        Schedule Another Consultation
      </Button>
    </div>
  );
};

export default BookingConfirmation;
