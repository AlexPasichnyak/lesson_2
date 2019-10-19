import { createContext } from 'react';

export const themes = {
  light: 'bg-white',
  dark: 'bg-dark'
};

export const ThemeContext = createContext({
  theme: themes.light, togglerTheme: () => {}
});
