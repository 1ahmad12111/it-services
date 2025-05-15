import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toast } = useToast()

  // Remove the mapping over toasts since it doesn't exist
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}
