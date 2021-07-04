import { useState, useEffect, useCallback } from "react";
import { fetchImages } from "../../services/pixabay.service";
export const useImages = () => {
  const [images, setImages] = useState([]);

  const [search, setSearch] = useState("");

  const Images = useCallback(async () => {
    const res = await fetchImages(search);
    setImages(res.data.hits);
  }, [search]);

  useEffect(() => {
    Images();
  }, [Images]);

  return { images, setSearch };
};
