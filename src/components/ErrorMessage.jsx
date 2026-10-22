
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-3 px-4 text-center">
      <AlertCircle size={40} className="text-red-500" />

      <h2 className="text-lg font-semibold text-gray-900">
        Oops! Something went wrong.
      </h2>

      <p className="max-w-md text-sm text-gray-600">
        {message || "Unable to load photos. Please try again later."}
      </p>
    </div>
  );
};

export default ErrorMessage;
