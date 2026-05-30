import React from "react";
import { ScrollView, View, Pressable } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

import _styles from "./calendar-strip.module.scss";
const styles = _styles as any;

export interface CalendarDay {
  dayName: string;
  dayNumber: number;
  isActive?: boolean;
  isDisabled?: boolean;
  hasMeal?: boolean;
  isCustom?: boolean;
}

interface CalendarStripProps {
  days: CalendarDay[];
  onDayPress?: (day: CalendarDay) => void;
}

export function CalendarStrip({ days, onDayPress }: CalendarStripProps) {
  const theme = useTheme();
  const scrollViewRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    // Center the active element on mount
    const activeIndex = days.findIndex((day) => day.isActive);
    if (activeIndex !== -1 && scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: activeIndex * 68 - 100,
          animated: true,
        });
      }, 100);
    }
  }, [days]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.calendarContainer}
      decelerationRate="fast"
    >
      {days.map((day, index) => (
        <Pressable
          key={index}
          style={[
            styles.dayCard,
            day.isActive && [
              styles.dayCardActive,
              { backgroundColor: theme.primary },
            ],
            day.isDisabled && styles.dayCardDisabled,
            !day.isActive &&
              !day.isDisabled && {
                borderColor: theme.outlineVariant,
                backgroundColor: theme.surfaceContainerLowest,
              },
          ]}
          onPress={() => onDayPress?.(day)}
          disabled={day.isDisabled}
        >
          <ThemedText
            type="labelCaps"
            style={[
              styles.dayName,
              day.isActive && { color: theme.primaryFixed },
              !day.isActive && { color: theme.onSurfaceVariant },
            ]}
          >
            {day.dayName}
          </ThemedText>
          <ThemedText
            type="headlineMd"
            style={[
              styles.dayNumber,
              day.isActive && { color: theme.onPrimary },
            ]}
          >
            {day.dayNumber}
          </ThemedText>
          {day.hasMeal && !day.isActive && (
            <View
              style={[styles.mealDot, { backgroundColor: theme.secondary }]}
            />
          )}
          {day.isCustom && !day.isActive && (
            <View
              style={[styles.customDot, { backgroundColor: theme.error }]}
            />
          )}
          {day.isActive && <View style={styles.activeGlow} />}
        </Pressable>
      ))}
    </ScrollView>
  );
}
