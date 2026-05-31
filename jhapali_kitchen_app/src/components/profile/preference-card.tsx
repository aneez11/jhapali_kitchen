import React from 'react';
import { View, StyleSheet, Pressable, Switch } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type PreferenceCardProps = {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function PreferenceCard({
  title,
  description,
  icon,
  iconColor,
  iconBg,
  value,
  onValueChange,
}: PreferenceCardProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.surfaceContainerLowest,
          borderColor: value ? theme.primary + '80' : theme.outlineVariant + '4D',
        },
      ]}
    >
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
          <SymbolView name={icon as any} size={20} tintColor={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{title}</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>{description}</ThemedText>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.outlineVariant, true: theme.primary }}
        thumbColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: Spacing.stackGap,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
});
