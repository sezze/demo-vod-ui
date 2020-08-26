import React, { useCallback, useRef } from "react";
import MovieListItem from "components/MovieListItem/MovieListItem";
import { MovieResult } from "moviedb-promise/dist/request-types";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import {
  Container,
  ChildContainer,
  ChildWrapper,
  ScrollSnapButton,
  ScrollContainer,
} from "./styles";

interface MovieListProps {
  movies?: MovieResult[];
  label?: string;
}

const preloadFallback: undefined[] = [...Array(10)];

function scroll(container: HTMLDivElement | null, multiplier: number) {
  if (container)
    container.scrollBy({
      behavior: "smooth",
      left: window.innerWidth * multiplier,
    });
}

const MovieList: React.FC<MovieListProps> = ({ movies, label }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleScrollLeft = useCallback(() => {
    scroll(scrollContainer.current, -0.5);
  }, []);

  const handleScrollRight = useCallback(() => {
    scroll(scrollContainer.current, 0.5);
  }, []);

  let movieList: (MovieResult | undefined)[] = movies || preloadFallback;

  return (
    <Container>
      <h2>{label}</h2>
      <ScrollContainer ref={scrollContainer}>
        <ChildContainer>
          {movieList.map((movie, i) => (
            <ChildWrapper key={movie?.id || i}>
              <MovieListItem movie={movie} />
            </ChildWrapper>
          ))}
        </ChildContainer>
      </ScrollContainer>
      <ScrollSnapButton onClick={handleScrollLeft} style={{ left: 0 }}>
        <FaCaretLeft />
      </ScrollSnapButton>
      <ScrollSnapButton onClick={handleScrollRight} style={{ right: 0 }}>
        <FaCaretRight />
      </ScrollSnapButton>
    </Container>
  );
};

export default MovieList;
