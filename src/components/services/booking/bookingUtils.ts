
import { z } from "zod";

// Form schema for validation
export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().optional(),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
});

export type FormValues = z.infer<typeof formSchema>;

// Available time slots
export const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM"
];
