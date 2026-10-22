
import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-3">
      <LoaderCircle
        size={40}
        className="animate-spin text-blue-600"
      />

      <p className="text-sm font-medium text-gray-600">
        Loading photos...
      </p>
    </div>
  );
};

export default Loader;
