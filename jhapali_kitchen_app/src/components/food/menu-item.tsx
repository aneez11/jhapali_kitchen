import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type MenuItemProps = {
  title: string;
  description: string;
  price?: string;
  isIncluded?: boolean;
  tags?: string[];
  onAdd?: () => void;
  horizontal?: boolean;
};

export function MenuItem({
  title,
  description,
  price,
  isIncluded,
  tags = [],
  onAdd,
  horizontal = true,
}: MenuItemProps) {
  const theme = useTheme();

  if (!horizontal) {
    return (
      <View
        style={[
          styles.verticalContainer,
          {
            backgroundColor: theme.surfaceContainerLowest,
            borderColor: theme.outlineVariant + '4D',
          },
        ]}
      >
        <View style={styles.verticalContent}>
          <ThemedText type="headlineMd" style={{ fontSize: 18 }}>{title}</ThemedText>
          {price && (
            <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '700', marginTop: 4 }}>
              {price}
            </ThemedText>
          )}
        </View>
        <Pressable
          onPress={onAdd}
          style={({ pressed }) => [
            styles.verticalAddButton,
            { backgroundColor: theme.surfaceContainerHigh, opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <SymbolView name="plus" size={20} tintColor={theme.primary} />
        </Pressable>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surfaceContainerLowest,
          borderColor: theme.outlineVariant + '4D',
        },
      ]}
    >
      <View style={styles.content}>
        <ThemedText type="headlineMd" style={{ fontSize: 18 }}>{title}</ThemedText>
        <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
          {description}
        </ThemedText>
        <View style={styles.footer}>
          {isIncluded && (
            <View style={[styles.includedBadge, { backgroundColor: theme.primaryContainer + '33' }]}>
              <ThemedText type="labelCaps" style={{ color: theme.onPrimaryContainer, fontSize: 10 }}>
                Included in Plan
              </ThemedText>
            </View>
          )}
          {price && !isIncluded && (
            <ThemedText type="headlineMd" style={{ color: theme.primary, fontSize: 16 }}>
              {price}
            </ThemedText>
          )}
          <View style={styles.tagRow}>
            {tags.map((tag, index) => (
              <View key={index} style={[styles.tag, { backgroundColor: theme.surfaceContainerHigh }]}>
                <ThemedText type="labelCaps" style={{ fontSize: 10 }}>{tag}</ThemedText>
              </View>
            ))}
          </View>
        </View>
      </View>
      <Pressable
        onPress={onAdd}
        style={({ pressed }) => [
          styles.addButton,
          { backgroundColor: theme.primary, opacity: pressed ? 0.9 : 1 },
        ]}
      >
        <SymbolView name="plus" size={24} tintColor={theme.onPrimary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  includedBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 4,
  },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalContainer: {
    flex: 1,
    height: 160,
    padding: 16,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  verticalContent: {
    flex: 1,
  },
  verticalAddButton: {
    height: 40,
    borderRadius: BorderRadius.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
