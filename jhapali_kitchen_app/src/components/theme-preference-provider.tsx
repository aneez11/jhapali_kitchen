import React, { useState, type ReactNode } from 'react';
import { ThemePreferenceContext, type ThemePreference } from '@/hooks/use-theme-preference';

interface Props {
  children: ReactNode;
}

export function ThemePreferenceProvider({ children }: Props) {
  const [preference, setPreference] = useState<ThemePreference>('light');

  return (
    <ThemePreferenceContext.Provider value={{ preference, setPreference }}>
      {children}
    </ThemePreferenceContext.Provider>
  );
}
