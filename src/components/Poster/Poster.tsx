import React from 'react';
import useSources from 'hooks/useSources';
import SizeType from 'types/SizeType';
import { Img, Wrapper } from './styles';

interface PosterProps {
  path?: string;
  title?: string;
  width: number;
  height: number;
}

const Poster: React.FC<PosterProps> = ({ path, title, width, height }) => {
  const { src, srcSet } = useSources(width, SizeType.Poster, path);

  return (
    <Wrapper width={width} height={height}>
      {src ? (
        <Img
          data-testid="poster-image"
          width={width}
          height={height}
          alt={title}
          src={src}
          srcSet={srcSet}
        />
      ) : null}
    </Wrapper>
  );
};

export default Poster;
