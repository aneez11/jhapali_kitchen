import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CalendarGrid, CalendarDay } from '@/components/meal/calendar-grid';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius } from '@/constants/theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

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
    <ThemedView style={styles.container}>
      {/* Top App Bar */}
      <ThemedView style={styles.header}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.brandRow}>
            <SymbolView name="restaurant" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <View style={[styles.miniAvatar, { borderColor: theme.outlineVariant + '4D' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtPyKWrqP5BiTsRGcRdcIbmeKJ9irEQXdG8VogtkmUiugbaIclr77RbBrkl-krVH8qDzaIZF99dEumpMIrIXDFttROdQHFMNygMw4ZqCQMNr9OguSjLasLblH7RqtWw3iEXPz4AQOYO2DU0qrwGJ5kBTEvd2lPRaZACdrjcalXFaTt3oFZ9V5E7cD6z1kxh9_F0CgFz_g4JJl7k1_-d95Ae8e06zQFM85p29QrG2HIuxYZH4oYzMqHPi_HHYg5FlE5QwJNY_Kmbg0' }}
              style={styles.avatarImage}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.titleRow}>
          <View>
            <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, letterSpacing: 1 }}>SUBSCRIPTION</ThemedText>
            <ThemedText type="headlineLg">Meal Calendar</ThemedText>
          </View>
          <Button
            title="Bulk Skip"
            size="sm"
            type="secondary"
            icon={<SymbolView name="calendar.badge.plus" size={16} tintColor={theme.onSecondaryContainer} />}
            style={{ backgroundColor: theme.primaryContainer + '33', borderRadius: BorderRadius.md }}
          />
        </View>

        {/* Month Navigation */}
        <View style={[styles.monthNav, { backgroundColor: theme.surfaceContainerLow }]}>
          <Pressable style={styles.navBtn}>
            <SymbolView name="chevron.left" size={20} tintColor={theme.primary} />
          </Pressable>
          <ThemedText type="headlineMd">October 2024</ThemedText>
          <Pressable style={styles.navBtn}>
            <SymbolView name="chevron.right" size={20} tintColor={theme.primary} />
          </Pressable>
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: theme.primaryContainer }]} />
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>Active</ThemedText>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: theme.error }]} />
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>Skipped</ThemedText>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: theme.secondaryContainer }]} />
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>Swapped</ThemedText>
          </View>
        </View>

        {/* Calendar Grid */}
        <CalendarGrid
          days={MOCK_MONTH_DAYS}
          selectedDay={selectedDay}
          onSelectDay={(day) => setSelectedDay(day.dayNumber)}
        />

        {/* Selected Day Details */}
        <View style={styles.detailsSection}>
          <View style={styles.detailsHeader}>
            <SymbolView name="fork.knife" size={20} tintColor={theme.primary} />
            <ThemedText type="headlineMd">Today's Menu</ThemedText>
          </View>
          
          <Card variant="outline" style={styles.detailCard}>
            <View style={styles.detailImageContainer}>
              <ExpoImage
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD0PhyUGk_d17glSrjDzajOJ7SfM-g_rTJMYQZyyHREFtYzg8X_eizZIoWM842Ba1sgNyX5M4sFW_jYmlsbBGvFrUyYJl922VASP_RO__2B0ZOUxSJIciEYMbee1ltGMRY0feZ55mesS9EN5moAvyUYSzdlCiWU6ttPb-fb9xw3Gf_qxtrDRqQ7mNCgVtiy91k4F6J81DKNxH0ZU8Df4LJHVMDupU6QykN_bC0SToW4EtFk7pZdUit17ayaCa8BNl4NSYE7NBQOEM' }}
                style={styles.detailImage}
              />
              <View style={styles.detailOverlay}>
                <View style={[styles.overlayTag, { backgroundColor: 'rgba(255,255,255,0.9)' }]}>
                  <ThemedText type="labelCaps" style={{ color: theme.primary }}>640 kcal</ThemedText>
                </View>
                <View style={[styles.overlayTag, { backgroundColor: theme.primaryContainer }]}>
                  <ThemedText type="labelCaps" style={{ color: theme.onPrimaryContainer }}>Premium</ThemedText>
                </View>
              </View>
            </View>
            <View style={styles.detailContent}>
              <ThemedText type="headlineMd">Glazed Atlantic Salmon Bowl</ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 4 }}>
                Quinoa base with organic greens, honey-miso glaze, and sesame seeds.
              </ThemedText>
              <View style={styles.detailTags}>
                {['Gluten-Free', 'High Protein', 'Dairy Free'].map((t, i) => (
                  <View key={i} style={[styles.detailTag, { backgroundColor: theme.surfaceContainer }]}>
                    <ThemedText type="labelCaps" style={{ fontSize: 10 }}>{t}</ThemedText>
                  </View>
                ))}
              </View>
              <View style={[styles.detailFooter, { borderTopColor: theme.outlineVariant + '33' }]}>
                <View>
                  <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant + '99' }}>Status</ThemedText>
                  <ThemedText type="bodyLg" style={{ color: theme.primary, fontWeight: '700' }}>Confirmed</ThemedText>
                </View>
                <View style={styles.detailActions}>
                   <Pressable style={[styles.actionIconButton, { borderColor: theme.outline }]}>
                      <SymbolView name="arrow.left.and.right" size={20} tintColor={theme.onSurfaceVariant} />
                   </Pressable>
                   <Button title="Skip Meal" size="sm" style={{ paddingHorizontal: 16 }} />
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </ThemedView>
  );
}
