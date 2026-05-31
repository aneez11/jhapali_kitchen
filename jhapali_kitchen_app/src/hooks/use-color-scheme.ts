import { useColorScheme as useRNColorScheme } from 'react-native';
import { useThemePreference } from './use-theme-preference';

export function useColorScheme() {
  const scheme = useRNColorScheme();
  const preference = useThemePreference();

  if (preference !== 'system') return preference;
  return scheme ?? 'light';
}
