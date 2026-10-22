
import { Search, X } from "lucide-react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search photos by author..."
        aria-label="Search photos by author"
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-10 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
