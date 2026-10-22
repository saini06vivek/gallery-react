
import { useState, useEffect } from "react";

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const url = "https://picsum.photos/v2/list?limit=30";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch photos. Please try again.");
        }

        const data = await response.json();

        setPhotos(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;
