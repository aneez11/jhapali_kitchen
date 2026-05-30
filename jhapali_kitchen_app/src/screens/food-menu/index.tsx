import React, { useState } from 'react';
import { ScrollView, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MenuItem } from '@/components/food/menu-item';
import { useTheme } from '@/hooks/use-theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

const CATEGORIES = ['All Items', 'Daily Specials', 'Local Favorites', 'Snacks'];

export default function FoodMenu() {
  const theme = useTheme();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All Items');

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.brandRow}>
            <SymbolView name="fork.knife" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <Pressable style={styles.iconButton}>
            <SymbolView name="person.circle" size={28} tintColor={theme.onSurfaceVariant} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.titleSection}>
          <ThemedText type="headlineLg">Food Menu</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
            Select your favorites or use your daily pass items.
          </ThemedText>
        </View>

        <View style={styles.searchSection}>
          <View style={[styles.searchBar, { backgroundColor: theme.surfaceContainerLow }]}>
            <SymbolView name="magnifyingglass" size={20} tintColor={theme.onSurfaceVariant} />
            <TextInput
              placeholder="Search menu..."
              placeholderTextColor={theme.onSurfaceVariant}
              style={[styles.searchInput, { color: theme.onSurface }]}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
            {CATEGORIES.map((category) => (
              <Pressable
                key={category}
                onPress={() => setActiveCategory(category)}
                style={[
                  styles.chip,
                  {
                    backgroundColor: activeCategory === category ? theme.primary : theme.surfaceContainerHigh,
                  },
                ]}
              >
                <ThemedText
                  type="labelCaps"
                  style={{ color: activeCategory === category ? theme.onPrimary : theme.onSurfaceVariant }}
                >
                  {category}
                </ThemedText>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={styles.menuSection}>
          <View style={styles.sectionHeader}>
            <ThemedText type="headlineMd">Daily Specials</ThemedText>
            <ThemedText type="labelCaps" style={{ color: theme.primary }}>Fresh Today</ThemedText>
          </View>
          <MenuItem
            title="Chicken Curry & Rice"
            description="Home-style curry with jasmine rice and pickles."
            isIncluded
          />
          <MenuItem
            title="Quinoa Salad Bowl"
            description="Organic quinoa, roasted chickpeas, and tahini."
            price="NPR 450"
            tags={['Vegan']}
          />
        </View>

        <View style={styles.menuSection}>
          <View style={styles.sectionHeader}>
            <ThemedText type="headlineMd">Local Favorites</ThemedText>
            <SymbolView name="heart.fill" size={20} tintColor={theme.secondary} />
          </View>
          <MenuItem
            title="Steamed Momos (10pcs)"
            description="Traditional buff or veg dumplings with spicy chutney."
            price="NPR 350"
          />
          <MenuItem
            title="Veg Thukpa"
            description="Warm Himalayan noodle soup with fresh greens."
            isIncluded
          />
        </View>

        <View style={styles.menuSection}>
           <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>Snacks</ThemedText>
           <View style={styles.gridRow}>
              <MenuItem
                title="Samosa (2pcs)"
                description=""
                price="NPR 80"
                horizontal={false}
              />
              <MenuItem
                title="French Fries"
                description=""
                price="NPR 150"
                horizontal={false}
              />
           </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Cart FAB */}
      <View style={styles.fabContainer}>
         <Pressable style={[styles.fab, { backgroundColor: theme.primary }]}>
            <SymbolView name="basket" size={24} tintColor={theme.onPrimary} />
            <ThemedText type="labelCaps" style={{ color: theme.onPrimary }}>View Order (2)</ThemedText>
         </Pressable>
      </View>
    </ThemedView>
  );
}
