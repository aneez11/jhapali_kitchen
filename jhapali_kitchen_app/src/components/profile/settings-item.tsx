import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

export type SettingsItemProps = {
  title: string;
  subtitle: string;
  icon: string;
  onPress?: () => void;
  showDivider?: boolean;
};

export function SettingsItem({
  title,
  subtitle,
  icon,
  onPress,
  showDivider = true,
}: SettingsItemProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? theme.surfaceContainerLow : 'transparent' },
      ]}
    >
      <View style={styles.content}>
        <SymbolView name={icon} size={22} tintColor={theme.onSurfaceVariant} />
        <View style={styles.textContainer}>
          <ThemedText type="bodyLg">{title}</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>{subtitle}</ThemedText>
        </View>
        <SymbolView name="chevron.right" size={16} tintColor={theme.outline} />
      </View>
      {showDivider && (
        <View style={[styles.divider, { backgroundColor: theme.outlineVariant + '33' }]} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  textContainer: {
    flex: 1,
  },
  divider: {
    height: 1,
    marginLeft: 40,
  },
});
