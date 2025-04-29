
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, CalendarCheck, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM"
];

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

  // Filter out weekends and past dates
  const isDateDisabled = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable weekends (0 = Sunday, 6 = Saturday)
    return day === 0 || day === 6 || date < today;
  };

  const onSubmit = (data: FormValues) => {
    console.log("Booking submitted:", data);
    toast.success("Your consultation has been scheduled!", {
      description: `We'll see you on ${data.date.toLocaleDateString()} at ${data.time}. A confirmation email has been sent.`,
    });
    setIsSubmitted(true);
  };

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

  if (isSubmitted) {
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
          <p className="text-gray-700 mt-2">{form.getValues().service}</p>
        </div>
        <Button onClick={() => setIsSubmitted(false)} className="bg-consulting-600 hover:bg-consulting-700">
          Schedule Another Consultation
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Your Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Interested In *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="website-development">Website Development</SelectItem>
                        <SelectItem value="software-development">Software Development</SelectItem>
                        <SelectItem value="it-support">IT Support</SelectItem>
                        <SelectItem value="it-consulting">IT Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <textarea
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Brief description of your project or requirements"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="w-full bg-consulting-600 hover:bg-consulting-700"
                >
                  Continue to Schedule <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
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
          )}
        </form>
      </Form>
    </div>
  );
};

export default CalendarIntegration;
