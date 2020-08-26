import React from "react";
import { Container, Cover, CoverContent, Background } from "./styles";
import Poster from "components/Poster/Poster";
import { MovieResult } from "moviedb-promise/dist/request-types";
import StarRating from "components/StarRating/StarRating";
import { Link } from "react-router-dom";
import slugify from "slugify";

interface MovieListItemProps {
  movie?: MovieResult;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <Link to={movie ? `/movie/${movie.id}/${slugify(movie.title || "")}` : "#"}>
      <Container>
        <Background>
          <Poster
            width={220}
            height={330}
            path={movie?.poster_path}
            title={movie?.title}
          />
        </Background>
        {movie ? (
          <Cover>
            <CoverContent>
              <div>{movie.title}</div>
              {movie.vote_average ? (
                <StarRating rating={movie.vote_average} />
              ) : null}
            </CoverContent>
          </Cover>
        ) : null}
      </Container>
    </Link>
  );
};

export default MovieListItem;
