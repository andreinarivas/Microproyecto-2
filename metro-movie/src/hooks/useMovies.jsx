import { useCallback, useState } from "react";
import {
  get_genres,
  get_movie,
  get_now_playing,
  get_upcoming,
  get_actors,
} from "../API/movie-database";

export function useMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [actors, setActors] = useState([]);

  const getGenre = useCallback(async () => {
    try {
      const { data } = await get_genres();
      setGenre(data.genres);
      return genre;
    } catch (error) {}
  }, []);

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

  const getMovie = useCallback(async (movieid) => {
    try {
      setIsLoading(true);
      const { data } = await get_movie(movieid);
      setMovie(data);
      setIsLoading(false);

      return movie;
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getActors = useCallback(async (movieid) => {
    try {
      setIsLoading(true);
      const { data } = await get_actors(movieid);
      setActors(data.cast);
      setIsLoading(false);

      return actors;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    isLoading,
    movies,
    getMovies,
    genre,
    getGenre,
    upcoming,
    getUpcoming,
    movie,
    getMovie,
    actors,
    getActors,
  };
}
