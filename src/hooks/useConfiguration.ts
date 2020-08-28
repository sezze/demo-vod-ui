import moviedb from 'api/moviedb';
import { useEffect, useState } from 'react';
import ParsedConfiguration from 'types/ParsedConfiguration';
import { parseImageConfig } from 'util/imageUtil';

export default function useConfiguration() {
  const [imageConfig, setImageConfig] = useState<
    ParsedConfiguration | undefined
  >();

  useEffect(() => {
    moviedb
      .configuration()
      .then(parseImageConfig)
      .then(setImageConfig)
      .catch(console.error);
  }, []);

  return imageConfig;
}
