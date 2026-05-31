import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CalendarGrid, CalendarDay } from '@/components/meal/calendar-grid';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const MOCK_MONTH_DAYS: CalendarDay[] = [
  { dayNumber: 1, status: 'active' },
  { dayNumber: 2, status: 'active' },
  { dayNumber: 3, status: 'active' },
  { dayNumber: 4, status: 'skipped' },
  { dayNumber: 5, status: 'disabled' },
  { dayNumber: 6, status: 'disabled' },
  { dayNumber: 7, status: 'active' },
  { dayNumber: 8, status: 'swapped' },
  { dayNumber: 9, status: 'active' },
  { dayNumber: 10, status: 'active' },
  { dayNumber: 11, status: 'skipped' },
  { dayNumber: 12, status: 'disabled' },
  { dayNumber: 13, status: 'disabled' },
  { dayNumber: 14, status: 'active' },
  { dayNumber: 15, status: 'active' },
  { dayNumber: 16, status: 'swapped' },
  { dayNumber: 17, status: 'active' },
  { dayNumber: 18, status: 'active' },
];

export default function MealCalendar() {
  const theme = useTheme();
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(3);

  return (
    <ThemedView className="flex-1 bg-surface">
      <ThemedView className="w-full z-50 bg-surface/90 border-b border-outline-variant" style={{ height: 110, backdropFilter: "blur(12px)" }}>
        <SafeAreaView edges={['top']} className="flex-row justify-between items-center px-container-margin flex-1">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-secondary-container/30 items-center justify-center">
              <MaterialCommunityIcons name="calendar-month-outline" size={22} color={theme.secondary} />
            </View>
            <View>
              <ThemedText className="text-headline-md text-secondary">
                Meal Schedule
              </ThemedText>
              <View className="self-start mt-0.5 px-2 py-0.5 rounded-full bg-secondary/10">
                <ThemedText type="bodyXs" className="tracking-wider text-secondary uppercase">
                  October 2024
                </ThemedText>
              </View>
            </View>
          </View>
          <Pressable className="w-10 h-10 rounded-full items-center justify-center">
            <MaterialCommunityIcons name="bell-outline" size={24} color={theme.onSurfaceVariant} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 16, paddingBottom: 96, paddingLeft: 16, paddingRight: 16 }}>
        {/* Header Section */}
        <View className="flex-row justify-between items-end mb-6">
          <View>
            <ThemedText type="labelCaps" className="text-on-surface-variant">SUBSCRIPTION</ThemedText>
            <ThemedText className="text-headline-lg">Meal Calendar</ThemedText>
          </View>
          <Button
            title="Bulk Skip"
            size="sm"
            type="secondary"
            icon={<MaterialCommunityIcons name="calendar-plus" size={16} color={theme.onSecondaryContainer} />}
            style={{ backgroundColor: theme.primaryContainer + '33', borderRadius: 12 }}
          />
        </View>

        {/* Month Navigation */}
        <View className="flex-row items-center justify-between px-2 py-2 rounded-xl bg-surface-container-low mb-4">
          <Pressable className="w-10 h-10 rounded-lg items-center justify-center">
            <MaterialCommunityIcons name="chevron-left" size={20} color={theme.primary} />
          </Pressable>
          <ThemedText className="text-headline-md">October 2024</ThemedText>
          <Pressable className="w-10 h-10 rounded-lg items-center justify-center">
            <MaterialCommunityIcons name="chevron-right" size={20} color={theme.primary} />
          </Pressable>
        </View>

        {/* Legend */}
        <View className="flex-row gap-4 mb-4">
          <View className="flex-row items-center gap-1.5">
            <View className="w-2.5 h-2.5 rounded-full bg-primary-container" />
            <ThemedText type="bodySm" className="text-on-surface-variant">Active</ThemedText>
          </View>
          <View className="flex-row items-center gap-1.5">
            <View className="w-2.5 h-2.5 rounded-full bg-error" />
            <ThemedText type="bodySm" className="text-on-surface-variant">Skipped</ThemedText>
          </View>
          <View className="flex-row items-center gap-1.5">
            <View className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
            <ThemedText type="bodySm" className="text-on-surface-variant">Swapped</ThemedText>
          </View>
        </View>

        {/* Calendar Grid */}
        <CalendarGrid
          days={MOCK_MONTH_DAYS}
          selectedDay={selectedDay}
          onSelectDay={(day) => setSelectedDay(day.dayNumber)}
        />

        {/* Selected Day Details */}
        <View className="mt-8">
          <View className="flex-row items-center gap-2 mb-4">
            <MaterialCommunityIcons name="silverware-fork-knife" size={20} color={theme.primary} />
            <ThemedText className="text-headline-md">Today's Menu</ThemedText>
          </View>
          
          <View className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden">
            <View className="h-40">
              <ExpoImage
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD0PhyUGk_d17glSrjDzajOJ7SfM-g_rTJMYQZyyHREFtYzg8X_eizZIoWM842Ba1sgNyX5M4sFW_jYmlsbBGvFrUyYJl922VASP_RO__2B0ZOUxSJIciEYMbee1ltGMRY0feZ55mesS9EN5moAvyUYSzdlCiWU6ttPb-fb9xw3Gf_qxtrDRqQ7mNCgVtiy91k4F6J81DKNxH0ZU8Df4LJHVMDupU6QykN_bC0SToW4EtFk7pZdUit17ayaCa8BNl4NSYE7NBQOEM' }}
                className="w-full h-full"
              />
              <View className="absolute top-3 right-3 flex-row gap-2">
                <View className="px-3 py-1 rounded-full bg-surface-container-lowest/90">
                  <ThemedText type="labelCaps" className="text-primary">640 kcal</ThemedText>
                </View>
                <View className="px-3 py-1 rounded-full bg-primary-container">
                  <ThemedText type="labelCaps" className="text-on-primary-container">Premium</ThemedText>
                </View>
              </View>
            </View>
            <View className="p-4 gap-4">
              <ThemedText className="text-headline-md">Glazed Atlantic Salmon Bowl</ThemedText>
              <ThemedText type="bodySm" className="text-on-surface-variant">
                Quinoa base with organic greens, honey-miso glaze, and sesame seeds.
              </ThemedText>
              <View className="flex-row flex-wrap gap-2">
                {['Gluten-Free', 'High Protein', 'Dairy Free'].map((t, i) => (
                  <View key={i} className="px-2.5 py-1 rounded-lg bg-surface-container">
                    <ThemedText type="labelCaps" className="text-on-surface-variant">{t}</ThemedText>
                  </View>
                ))}
              </View>
              <View className="pt-4 border-t border-outline-variant/20 flex-row items-center justify-between">
                <View>
                  <ThemedText type="labelCaps" className="text-on-surface-variant/60">Status</ThemedText>
                  <ThemedText type="bodyLg" className="text-primary font-bold">Confirmed</ThemedText>
                </View>
                <View className="flex-row gap-3">
                   <Pressable className="w-10 h-10 rounded-xl border border-outline items-center justify-center">
                      <MaterialCommunityIcons name="swap-horizontal" size={20} color={theme.onSurfaceVariant} />
                   </Pressable>
                   <Button title="Skip Meal" size="sm" style={{ paddingHorizontal: 16 }} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
