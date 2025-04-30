
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
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

interface BookingFormProps {
  form: UseFormReturn<FormValues>;
  nextStep: () => void;
}

const BookingForm = ({ form, nextStep }: BookingFormProps) => {
  return (
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
  );
};

export default BookingForm;
