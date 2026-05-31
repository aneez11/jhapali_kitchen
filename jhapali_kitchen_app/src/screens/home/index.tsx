import React, { useRef, useEffect } from "react";
import { ScrollView, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";

interface CalendarDay {
  dayName: string;
  dayNumber: number;
  isActive?: boolean;
  isDisabled?: boolean;
  hasMeal?: boolean;
  isCustom?: boolean;
}

const MOCK_DAYS: CalendarDay[] = [
  { dayName: "MON", dayNumber: 23, hasMeal: true },
  { dayName: "TUE", dayNumber: 24 },
  { dayName: "WED", dayNumber: 25, isActive: true },
  { dayName: "THU", dayNumber: 26, isCustom: true },
  { dayName: "FRI", dayNumber: 27 },
  { dayName: "SAT", dayNumber: 28, isDisabled: true },
  { dayName: "SUN", dayNumber: 29, isDisabled: true },
];

export default function MealDashboard() {
  const theme = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const activeIndex = MOCK_DAYS.findIndex((d) => d.isActive);
    if (activeIndex !== -1 && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          x: activeIndex * 68 - 100,
          animated: true,
        });
      }, 100);
    }
  }, []);

  return (
    <ThemedView className="flex-1 bg-surface">
      <ThemedView
        className="w-full z-50 bg-surface/90 border-b border-outline-variant"
        style={{ height: 110, backdropFilter: "blur(12px)" }}
      >
        <SafeAreaView
          edges={["top"]}
          className="flex-row justify-between items-center px-container-margin flex-1"
        >
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary/20">
              <ExpoImage
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg",
                }}
                className="w-full h-full"
              />
            </View>
            <View>
              <ThemedText className="text-headline-md text-primary">
                Hi, Alex!
              </ThemedText>
              <View className="self-start mt-0.5 px-2 py-0.5 rounded-full bg-primary/10">
                <ThemedText type="bodyXs" className="tracking-wider text-primary uppercase">
                  Canteen Plan Active
                </ThemedText>
              </View>
            </View>
          </View>
          <Pressable className="w-10 h-10 rounded-full items-center justify-center">
            <MaterialCommunityIcons
              name="bell"
              size={24}
              color={theme.onSurfaceVariant}
            />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
        className="pt-5 px-container-margin"
        contentContainerStyle={{ paddingBottom: 96 }}
      >
        {/* Horizontal Calendar Strip */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <ThemedText className="text-headline-md">Your Schedule</ThemedText>
            <ThemedText className="text-body-sm text-on-surface-variant">
              October 2023
            </ThemedText>
          </View>
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 12,
              paddingBottom: 8,
              paddingHorizontal: 4,
            }}
          >
            {MOCK_DAYS.map((day, index) => (
              <Pressable
                key={index}
                disabled={day.isDisabled}
                className={`flex-shrink-0 flex-col items-center justify-center w-14 h-20 rounded-2xl ${
                  day.isActive
                    ? "bg-primary"
                    : "border border-outline-variant bg-surface-container-lowest"
                } ${day.isDisabled ? "opacity-60" : ""}`}
                style={
                  day.isActive
                    ? {
                        boxShadow: [
                          {
                            offsetX: 0,
                            offsetY: 10,
                            blurRadius: 15,
                            color: "rgba(16,185,129,0.2)",
                          },
                        ],
                        elevation: 6,
                      }
                    : undefined
                }
              >
                <ThemedText
                  className={`text-label-caps mb-1 ${
                    day.isActive
                      ? "text-primary-fixed"
                      : "text-on-surface-variant"
                  }`}
                >
                  {day.dayName}
                </ThemedText>
                <ThemedText
                  className={`text-headline-md ${
                    day.isActive ? "text-on-primary" : "text-on-surface"
                  }`}
                >
                  {day.dayNumber}
                </ThemedText>
                {day.hasMeal && !day.isActive && (
                  <View className="w-1.5 h-1.5 rounded-full bg-secondary mt-1" />
                )}
                {day.isCustom && !day.isActive && (
                  <View className="w-1.5 h-1.5 rounded-full bg-error mt-1" />
                )}
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Meal Slots */}
        <View className="gap-8">
          <ThemedText className="text-headline-md">Today's Meals</ThemedText>

          {/* Lunch Card */}
          <View className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
            <View className="p-4 gap-4">
              <View className="flex-row justify-between items-start">
                <View className="gap-2">
                  <View className="flex-row gap-2">
                    <View className="px-3 py-1 bg-primary/10 rounded-full">
                      <ThemedText className="text-label-caps text-primary uppercase">
                        Lunch • 12:30 PM
                      </ThemedText>
                    </View>
                    <View className="px-2 py-1 bg-surface-container-high rounded-full">
                      <ThemedText className="text-label-caps text-on-surface-variant">
                        Standard
                      </ThemedText>
                    </View>
                  </View>
                  <ThemedText className="text-headline-md text-on-surface">
                    Dal Bhat Tarkari (Standard Set)
                  </ThemedText>
                  <View className="flex-row gap-2">
                    <View className="px-2 py-0.5 bg-surface-container-high rounded-full">
                      <ThemedText className="text-label-caps text-on-surface-variant">
                        Rice, Lentils, Veg
                      </ThemedText>
                    </View>
                    <View className="px-2 py-0.5 bg-surface-container-high rounded-full">
                      <ThemedText className="text-label-caps text-on-surface-variant">
                        850 kcal
                      </ThemedText>
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex-row gap-3">
                <Pressable className="flex-1 flex-row items-center justify-center gap-2 h-12 rounded-xl border-2 border-primary/20">
                  <MaterialCommunityIcons
                    name="shuffle"
                    size={18}
                    color={theme.primary}
                  />
                  <ThemedText className="font-bold text-primary">
                    Swap for Momos
                  </ThemedText>
                </Pressable>
                <Pressable className="flex-1 flex-row items-center justify-center gap-2 h-12 rounded-xl border-2 border-outline/20">
                  <MaterialCommunityIcons
                    name="calendar-clock"
                    size={18}
                    color={theme.outline}
                  />
                  <ThemedText className="font-bold text-outline">
                    Skip Day
                  </ThemedText>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Dinner Card (overridden) */}
          <View className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
            <View className="p-4 gap-4">
              <View className="flex-row justify-between items-start">
                <View className="gap-2">
                  <View className="flex-row flex-wrap gap-2">
                    <View className="px-3 py-1 bg-primary/10 rounded-full">
                      <ThemedText className="text-label-caps text-primary uppercase">
                        Dinner • 7:00 PM
                      </ThemedText>
                    </View>
                    <View className="flex-row items-center gap-1 px-3 py-1 bg-secondary-container/20 rounded-full">
                      <MaterialCommunityIcons
                        name="note-edit"
                        size={14}
                        color={theme.onSecondaryContainer}
                      />
                      <ThemedText className="text-label-caps text-on-secondary-container">
                        Custom Overridden
                      </ThemedText>
                    </View>
                  </View>
                  <ThemedText className="text-headline-md text-on-surface">
                    Custom: Paneer Curry & Roti
                  </ThemedText>
                  <ThemedText className="text-body-sm text-on-surface-variant">
                    Modified for extra paneer and spicy pickles.
                  </ThemedText>
                </View>
                <Pressable className="w-12 h-12 rounded-xl bg-surface-container-high items-center justify-center">
                  <MaterialCommunityIcons
                    name="pencil"
                    size={20}
                    color={theme.primary}
                  />
                </Pressable>
              </View>
              <View className="flex-row gap-2">
                <View className="px-2 py-0.5 bg-surface-container-high rounded-full">
                  <ThemedText className="text-label-caps text-on-surface-variant">
                    Buff Thukpa available
                  </ThemedText>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bento Grid - Hydration & Streak */}
        <View className="flex-row gap-4 mt-8">
          <View className="flex-1 bg-tertiary-container/20 rounded-2xl p-4 flex-col justify-between border border-tertiary/10">
            <MaterialCommunityIcons
              name="water"
              size={28}
              color={theme.tertiary}
            />
            <View className="mt-4">
              <ThemedText className="font-bold text-on-tertiary-container">
                Hydration Goal
              </ThemedText>
              <ThemedText className="text-body-sm text-on-tertiary-container/80">
                1.5L / 2.5L tracked
              </ThemedText>
            </View>
          </View>
          <View className="flex-1 bg-secondary-container/10 rounded-2xl p-4 flex-col justify-between border border-secondary/10">
            <MaterialCommunityIcons
              name="trophy-award"
              size={28}
              color={theme.secondary}
            />
            <View className="mt-4">
              <ThemedText className="font-bold text-on-secondary-container">
                Weekly Streak
              </ThemedText>
              <ThemedText className="text-body-sm text-on-secondary-container/80">
                4 days consistent!
              </ThemedText>
            </View>
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </ThemedView>
  );
}
