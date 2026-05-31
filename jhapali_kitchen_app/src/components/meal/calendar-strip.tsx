import React from "react";
import { ScrollView, View, Pressable } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

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
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, gap: 12, paddingBottom: 8 }}
      decelerationRate="fast"
    >
      {days.map((day, index) => (
        <Pressable
          key={index}
          style={[
            {
              width: 56,
              height: 80,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              position: "relative",
              overflow: "hidden",
            },
            day.isActive && [
              {
                shadowColor: "#ff0000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 12,
                elevation: 8,
              },
              { backgroundColor: theme.primary, borderRadius: 16 },
            ],
            day.isDisabled && { opacity: 0.6 },
            !day.isActive &&
              !day.isDisabled && {
                borderColor: theme.outlineVariant,
                backgroundColor: theme.surfaceContainerLowest,
                borderRadius: 16,
              },
          ]}
          onPress={() => onDayPress?.(day)}
          disabled={day.isDisabled}
        >
          <ThemedText
            type="labelCaps"
            style={[
              { fontSize: 12, lineHeight: 16, fontWeight: "600", letterSpacing: 0.5, marginBottom: 4, textTransform: "uppercase" },
              day.isActive && { color: theme.primaryFixed },
              !day.isActive && { color: theme.onSurfaceVariant },
            ]}
          >
            {day.dayName}
          </ThemedText>
          <ThemedText
            type="headlineMd"
            style={[
              { fontSize: 20, lineHeight: 28, fontWeight: "600" },
              day.isActive && { color: theme.onPrimary },
            ]}
          >
            {day.dayNumber}
          </ThemedText>
          {day.hasMeal && !day.isActive && (
            <View
              style={{ width: 6, height: 6, borderRadius: 3, marginTop: 4, backgroundColor: theme.secondary }}
            />
          )}
          {day.isCustom && !day.isActive && (
            <View
              style={{ width: 6, height: 6, borderRadius: 3, marginTop: 4, backgroundColor: theme.error }}
            />
          )}
          {day.isActive && (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                width: 24,
                height: 3,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 1.5,
              }}
            />
          )}
        </Pressable>
      ))}
    </ScrollView>
  );
}
