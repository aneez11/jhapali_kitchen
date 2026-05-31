import { createContext, useContext } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

export const ThemePreferenceContext = createContext<{
  preference: ThemePreference;
  setPreference: (pref: ThemePreference) => void;
}>({
  preference: 'system',
  setPreference: () => {},
});

export function useThemePreference() {
  return useContext(ThemePreferenceContext).preference;
}

export function useSetThemePreference() {
  return useContext(ThemePreferenceContext).setPreference;
}
