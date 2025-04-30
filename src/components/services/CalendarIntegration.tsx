
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { formSchema, FormValues, timeSlots } from "./booking/bookingUtils";
import BookingForm from "./booking/BookingForm";
import DateTimeSelector from "./booking/DateTimeSelector";
import BookingConfirmation from "./booking/BookingConfirmation";

const CalendarIntegration = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      form.setValue("date", date);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    form.setValue("time", time);
  };

  const nextStep = () => {
    if (step === 1) {
      // Validate required fields for step 1
      form.trigger(["name", "email", "service"]).then((isValid) => {
        if (isValid) setStep(2);
      });
    }
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
  };

  const resetForm = () => {
    form.reset();
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setIsSubmitted(false);
    setStep(1);
  };

  const onSubmit = (data: FormValues) => {
    console.log("Booking submitted:", data);
    toast.success("Your consultation has been scheduled!", {
      description: `We'll see you on ${data.date.toLocaleDateString()} at ${data.time}. A confirmation email has been sent.`,
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <BookingConfirmation
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        service={form.getValues().service}
        resetForm={resetForm}
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <BookingForm form={form} nextStep={nextStep} />
          )}

          {step === 2 && (
            <DateTimeSelector
              form={form}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              handleDateChange={handleDateChange}
              handleTimeSelect={handleTimeSelect}
              prevStep={prevStep}
              timeSlots={timeSlots}
            />
          )}
        </form>
      </Form>
    </div>
  );
};

export default CalendarIntegration;
