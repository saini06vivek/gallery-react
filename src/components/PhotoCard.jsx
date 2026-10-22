
import { Heart } from "lucide-react";

const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={photo.download_url}
          alt={`Photography by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="truncate text-sm font-medium text-gray-800">
          {photo.author}
        </p>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite ? "Remove from favourites" : "Add to favourites"
          }
          aria-pressed={isFavourite}
          className="flex shrink-0 items-center justify-center rounded-full p-2 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <Heart
            size={21}
            className={
              isFavourite
                ? "fill-red-500 text-red-500"
                : "text-gray-500 hover:text-red-500"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
