import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type NotificationCardProps = {
  title: string;
  message: string;
  time: string;
  icon: string;
  type: 'primary' | 'secondary' | 'info';
  isRead?: boolean;
  actionTitle?: string;
  onAction?: () => void;
};

export function NotificationCard({
  title,
  message,
  time,
  icon,
  type,
  isRead = false,
  actionTitle,
  onAction,
}: NotificationCardProps) {
  const theme = useTheme();

  const getAccentColor = () => {
    switch (type) {
      case 'primary': return theme.primary;
      case 'secondary': return theme.secondary;
      case 'info': return theme.outline;
      default: return theme.primary;
    }
  };

  const getIconBg = () => {
    switch (type) {
      case 'primary': return theme.primaryContainer + '33';
      case 'secondary': return theme.secondaryContainer + '33';
      case 'info': return theme.surfaceContainerHigh;
      default: return theme.primaryContainer + '33';
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: isRead ? theme.surfaceContainerLow : theme.surfaceContainerLowest,
          borderColor: theme.outlineVariant + '4D',
          opacity: pressed ? 0.9 : (isRead ? 0.8 : 1),
        },
      ]}
    >
      {!isRead && <View style={[styles.indicator, { backgroundColor: getAccentColor() }]} />}
      <View style={[styles.iconContainer, { backgroundColor: getIconBg() }]}>
        <SymbolView name={icon as any} size={24} tintColor={getAccentColor()} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{title}</ThemedText>
          <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant }}>{time}</ThemedText>
        </View>
        <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, lineHeight: 18 }}>
          {message}
        </ThemedText>
        {actionTitle && (
            <Pressable 
                onPress={onAction}
                style={[styles.actionBtn, { backgroundColor: theme.primary }]}
            >
                <ThemedText type="labelCaps" style={{ color: theme.onPrimary }}>{actionTitle}</ThemedText>
            </Pressable>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginBottom: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  indicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  actionBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 12,
  },
});
