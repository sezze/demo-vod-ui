import Theme from 'types/Theme';

const lightTheme: Theme = {
  isDark: false,
  bg: {
    main: '#ffffff',
    alt: '#e3e3e3',
  },
  text: {
    main: '#000000',
    alt: '#474747',
  },
  accent: {
    main: '#40c2ff',
    alt: '#0083c9',
  },
  item: {
    normal: 'red',
    hover: 'orange',
    active: 'yellow',
    text: 'black',
    alt: {
      normal: '#e0e0e0',
      hover: '#dbdbdb',
      active: '#c7c7c7',
      text: '#474747',
    },
  },
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadow(dist) {
    return `0 ${dist}px ${dist * 2}px ${lightTheme.shadowColor}`;
  },
};

export default lightTheme;
