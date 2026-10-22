
const STORAGE_KEY = "photo-gallery-favourites";

export const getFavourites = () => {
  try {
    const savedFavourites = localStorage.getItem(STORAGE_KEY);

    return savedFavourites ? JSON.parse(savedFavourites) : [];
  } catch (error) {
    console.error("Failed to load favourites:", error);
    return [];
  }
};

export const saveFavourites = (favourites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  } catch (error) {
    console.error("Failed to save favourites:", error);
  }
};
