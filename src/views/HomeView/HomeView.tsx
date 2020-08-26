import React, { useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";
import moviedb from "api/moviedb";
import { MovieResult } from "moviedb-promise/dist/request-types";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieResult[]>();

  useEffect(() => {
    moviedb
      .trending({ media_type: "movie", time_window: "week" })
      .then((v) => v.results as MovieResult[])
      .then(setMovies);
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
