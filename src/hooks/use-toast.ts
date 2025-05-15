
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

type ToastOptions = {
  action?: React.ReactNode;
  description?: React.ReactNode;
  duration?: number;
  icon?: React.ReactNode;
};

export const useToast = () => {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: (message: string) => 
      sonnerToast.error(message, {
        className: "bg-white border-coral",
        style: { color: "black" },
      }),
    success: (message: string) => 
      sonnerToast.success(message, {
        className: "bg-white border-lemon",
        style: { color: "black" },
      }),
  };
};

export const toast = (
  message: string | ToastProps,
  options: ToastOptions = {}
) => {
  if (typeof message === 'string') {
    const { action, description, duration = 5000, icon } = options;

    return sonnerToast(message, {
      duration,
      icon,
      description,
      action,
      className: "bg-white border-gray-200",
      style: { color: "black" },
    });
  } else {
    // Handle object form
    const { title, description, variant } = message;
    return sonnerToast(title || "", {
      description,
      className: variant === 'destructive' ? "bg-white border-coral" : "bg-white border-gray-200",
      style: { color: "black" },
    });
  }
};
