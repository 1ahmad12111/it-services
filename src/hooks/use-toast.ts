
import { Toast, toast as sonnerToast } from "sonner";

type ToastProps = React.ComponentProps<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof Toast>;

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

type ToastOptions = {
  action?: ToastActionElement;
  description?: React.ReactNode;
  duration?: number;
  icon?: React.ReactNode;
};

export const toast = (
  message: string,
  options: ToastOptions = {}
) => {
  const { action, description, duration = 5000, icon } = options;

  return sonnerToast(message, {
    duration,
    icon,
    description,
    action,
    className: "bg-white border-gray-200",
    style: { color: "black" },
  });
};
