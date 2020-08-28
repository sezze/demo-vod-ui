import Theme from 'types/Theme';

const darkTheme: Theme = {
  isDark: true,
  bg: {
    main: '#242424',
    alt: '#303030',
  },
  text: {
    main: '#f0f0f0',
    alt: '#dbdbdb',
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
      normal: '#3b3b3b',
      hover: '#424242',
      active: '#4f4f4f',
      text: '#dbdbdb',
    },
  },
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadow(dist) {
    return `0 ${dist}px ${dist * 2}px ${darkTheme.shadowColor}`;
  },
};

export default darkTheme;
