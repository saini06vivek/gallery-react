
import { useState, useCallback, useMemo, useReducer, useEffect } from "react";

import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer } from "../reducers/favouritesReducer";
import { getFavourites, saveFavourites } from "../utils/localStorage";

import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const PhotoGallery = () => {
  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    getFavourites
  );

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photoId,
    });
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  }, [photos, searchTerm]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Photos
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {filteredPhotos.length} photos found
          </p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
        />
      </div>

      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg font-medium text-gray-700">
            No photos found
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Try searching with a different author name.
          </p>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
