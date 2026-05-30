import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type TransactionItemProps = {
  title: string;
  date: string;
  slot: string;
  amount: string;
  status: string;
  icon: string;
  isExtra?: boolean;
};

export function TransactionItem({
  title,
  date,
  slot,
  amount,
  status,
  icon,
  isExtra,
}: TransactionItemProps) {
  const theme = useTheme();

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
      <View style={styles.left}>
        <View style={[styles.iconContainer, { backgroundColor: isExtra ? theme.secondaryContainer + '1A' : theme.surfaceContainerHigh }]}>
          <SymbolView name={icon} size={24} tintColor={isExtra ? theme.secondary : theme.primary} />
        </View>
        <View>
          <ThemedText type="bodyLg" style={{ fontWeight: '700' }}>{title}</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>{date} • {slot}</ThemedText>
        </View>
      </View>
      <View style={styles.right}>
        <ThemedText type="bodyLg" style={{ fontWeight: '700' }}>{amount}</ThemedText>
        <View style={[styles.statusBadge, { backgroundColor: isExtra ? theme.secondaryContainer + '33' : theme.primaryContainer + '33' }]}>
          <ThemedText type="labelCaps" style={{ color: isExtra ? theme.onSecondaryContainer : theme.onPrimaryContainer, fontSize: 10 }}>
            {status}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginBottom: 12,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
    gap: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
});
