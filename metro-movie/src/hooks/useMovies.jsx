import { useCallback, useState } from "react";
import {
  get_genres,
  get_now_playing,
  get_upcoming,
} from "../API/movie-database";

export function useMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getGenre = useCallback(async () => {
    try {
      const { data } = await get_genres();
      setGenre(data.genres);
      return genre;
    } catch (error) {}
  });

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await get_now_playing();
      setMovies(data.results);
      return movies;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getUpcoming = useCallback(async () => {
    try {
      const { data } = await get_upcoming();
      setUpcoming(data.results);
      return upcoming;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { isLoading, movies, getMovies, genre, getGenre, upcoming, getUpcoming };
}
