import Theme from './Theme';

export default interface ThemeObject {
  dark: Theme;
  light: Theme;
  current: Theme;
  setTheme(theme: Theme): void;
}
