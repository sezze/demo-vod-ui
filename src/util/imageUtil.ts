import { ConfigurationResponse } from 'moviedb-promise/dist/request-types';
import ImageConfiguration from 'types/ParsedConfiguration';

export function parseImageConfig({
  images,
}: ConfigurationResponse): ImageConfiguration {
  return {
    baseUrl: images.base_url || 'http://image.tmdb.org/t/p/',
    secureBaseUrl: images.secure_base_url || 'https://image.tmdb.org/t/p/',
    backdropSizes: parseSizes(images.backdrop_sizes),
    logoSizes: parseSizes(images.logo_sizes),
    posterSizes: parseSizes(images.poster_sizes),
    profileSizes: parseSizes(images.profile_sizes),
    stillSizes: parseSizes(images.still_sizes),
  };
}

function parseSizes(list: string[] | undefined): number[] {
  if (list === undefined) return [];

  return list
    .filter((size) => size.startsWith('w'))
    .map((size) => parseInt(size.substring(1), 10));
}

export function getSources(
  path: string,
  baseUrl: string,
  sizes: number[],
  width: number
): { src: string; srcSet: string } {
  const minIndex = sizes.findIndex((size) => size >= width);
  const usableSizes = sizes.slice(minIndex);
  const urls = usableSizes.map((size) => `${baseUrl}w${size}${path}`);
  const srcSet = urls
    .map((url, i) => `${url} ${(usableSizes[i] / usableSizes[0]).toFixed(1)}x`)
    .join(', ');

  return {
    src: urls[0],
    srcSet,
  };
}
