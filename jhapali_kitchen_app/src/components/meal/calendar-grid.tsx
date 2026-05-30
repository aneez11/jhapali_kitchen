import React from 'react';
import { View, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type CalendarDay = {
  dayNumber: number;
  status?: 'active' | 'skipped' | 'swapped' | 'none' | 'disabled';
  isToday?: boolean;
};

export type CalendarGridProps = {
  days: CalendarDay[];
  onSelectDay?: (day: CalendarDay) => void;
  selectedDay?: number;
};

export function CalendarGrid({ days, onSelectDay, selectedDay }: CalendarGridProps) {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  
  const dayButtonWidth = (width - 32 - 32 - (8 * 6)) / 7;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'active': return theme.primaryContainer;
      case 'skipped': return theme.error;
      case 'swapped': return theme.secondaryContainer;
      default: return 'transparent';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant + '33' }]}>
      <View style={styles.daysHeader}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <ThemedText key={i} type="labelCaps" style={[styles.dayLabel, { color: theme.onSurfaceVariant + '99' }]}>{d}</ThemedText>
        ))}
      </View>
      <View style={styles.grid}>
        {days.map((day, index) => (
          <Pressable
            key={index}
            onPress={() => onSelectDay?.(day)}
            style={[
              styles.dayButton,
              {
                width: dayButtonWidth,
                borderColor: day.dayNumber === selectedDay ? theme.primary : theme.outlineVariant + '33',
                backgroundColor: day.dayNumber === selectedDay ? theme.primary + '0D' : 'transparent',
                borderWidth: day.dayNumber === selectedDay ? 2 : 1,
              },
              day.status === 'disabled' && { opacity: 0.4, backgroundColor: theme.surfaceContainerLow },
            ]}
          >
            <ThemedText
              type="bodySm"
              style={[
                styles.dayText,
                {
                  color: day.dayNumber === selectedDay ? theme.primary : (day.status === 'disabled' ? theme.onSurfaceVariant + '66' : theme.onSurface),
                  fontWeight: day.dayNumber === selectedDay ? '700' : '600',
                },
              ]}
            >
              {day.dayNumber}
            </ThemedText>
            {day.status && day.status !== 'none' && day.status !== 'disabled' && (
              <View style={[styles.statusDot, { backgroundColor: getStatusColor(day.status) }]} />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  daysHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  dayButton: {
    aspectRatio: 1,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dayText: {
    fontSize: 14,
  },
  statusDot: {
    position: 'absolute',
    bottom: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
