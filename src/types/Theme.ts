export default interface Theme {
  isDark: boolean;
  bg: {
    main: string;
    alt: string;
  };
  text: {
    main: string;
    alt: string;
  };
  accent: {
    main: string;
    alt: string;
  };
  item: {
    normal: string;
    hover: string;
    active: string;
    text: string;
    alt: {
      normal: string;
      hover: string;
      active: string;
      text: string;
    };
  };
  shadowColor: string;
  shadow(distance: number): string;
}
