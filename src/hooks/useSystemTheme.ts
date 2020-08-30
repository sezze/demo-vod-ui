import Theme from 'types/Theme';
import { useEffect, useState } from 'react';

const useSystemTheme = (lightTheme: Theme, darkTheme: Theme) => {
  const [systemTheme, setSystemTheme] = useState(lightTheme);

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: light)');
    const listener = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? lightTheme : darkTheme);
    };

    match.addEventListener('change', listener);

    return () => match.removeEventListener('change', listener);
  }, [lightTheme, darkTheme]);

  return systemTheme;
};

export default useSystemTheme;
