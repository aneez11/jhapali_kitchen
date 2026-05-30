import { Platform, StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 
    | 'default' 
    | 'headlineLg' 
    | 'headlineMd' 
    | 'bodyLg' 
    | 'bodySm' 
    | 'labelCaps'
    | 'title' 
    | 'subtitle' 
    | 'link' 
    | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'], fontFamily: Fonts.sans },
        type === 'default' && styles.bodyLg,
        type === 'bodyLg' && styles.bodyLg,
        type === 'bodySm' && styles.bodySm,
        type === 'headlineLg' && styles.headlineLg,
        type === 'headlineMd' && styles.headlineMd,
        type === 'labelCaps' && styles.labelCaps,
        type === 'title' && styles.headlineLg,
        type === 'subtitle' && styles.headlineMd,
        type === 'link' && styles.link,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  headlineLg: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -0.64, // -0.02em
  },
  headlineMd: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  bodyLg: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodySm: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  labelCaps: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0.6, // 0.05em
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 14,
    color: '#006c49',
    textDecorationLine: 'underline',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: '700' }) ?? '500',
    fontSize: 12,
  },
});
