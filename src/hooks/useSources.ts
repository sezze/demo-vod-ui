import { useState, useContext, useEffect } from "react";
import { getSources } from "util/imageUtil";
import ImageConfigurationContext from "contexts/ParsedConfigurationContext";
import SizeType from "types/SizeType";

const useSources = (width: number, sizeType: SizeType, path?: string) => {
  const [src, setSrc] = useState<string>();
  const [srcSet, setSrcSet] = useState<string>();
  const [sizes, setSizes] = useState<number[]>();

  const imageConfig = useContext(ImageConfigurationContext);

  useEffect(() => {
    if (!imageConfig || !path) return;
    switch (sizeType) {
      case SizeType.Poster:
        setSizes(imageConfig.posterSizes);
        break;
      case SizeType.Backdrop:
        setSizes(imageConfig.backdropSizes);
        break;
      case SizeType.Profile:
        setSizes(imageConfig.profileSizes);
        break;
      case SizeType.Still:
        setSizes(imageConfig.stillSizes);
        break;
      case SizeType.Logo:
        setSizes(imageConfig.logoSizes);
        break;
    }
  }, [sizeType, imageConfig, path]);

  useEffect(() => {
    if (!path || !imageConfig || !sizes) return;
    const { src, srcSet } = getSources(
      path,
      imageConfig.secureBaseUrl,
      sizes,
      width
    );

    setSrc(src);
    setSrcSet(srcSet);
  }, [path, width, imageConfig, sizes]);

  return { src, srcSet };
};

export default useSources;
