import React, { useEffect, useState } from "react";
import Poster from "components/Poster/Poster";
import moviedb from "api/moviedb";
import { useParams } from "react-router-dom";
import { MovieResponse } from "moviedb-promise/dist/request-types";

const MovieView: React.FC = () => {
  const [movie, setMovie] = useState<MovieResponse>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    moviedb.movieInfo(params.id).then(setMovie).catch(console.error);
  }, [params]);

  return (
    <div>
      <Poster
        path={movie?.poster_path}
        width={256}
        height={384}
        title={movie?.title}
      />
    </div>
  );
};

export default MovieView;
