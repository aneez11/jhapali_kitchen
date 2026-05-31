import React, { useState } from 'react';
import { ScrollView, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MenuItem } from '@/components/food/menu-item';
import { useTheme } from '@/hooks/use-theme';

const CATEGORIES = ['All Items', 'Daily Specials', 'Local Favorites', 'Snacks'];

export default function FoodMenu() {
  const theme = useTheme();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All Items');

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ paddingLeft: 16, paddingRight: 16 }}>
        <SafeAreaView
          edges={['top']}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 64,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <SymbolView name="fork.knife" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <Pressable
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SymbolView name="person.circle" size={28} tintColor={theme.onSurfaceVariant} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 32, gap: 4 }}>
          <ThemedText type="headlineLg">Food Menu</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
            Select your favorites or use your daily pass items.
          </ThemedText>
        </View>

        <View style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 32, gap: 16 }}>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 16,
                paddingRight: 16,
                height: 48,
                borderRadius: 12,
                gap: 12,
              },
              { backgroundColor: theme.surfaceContainerLow },
            ]}
          >
            <SymbolView name="magnifyingglass" size={20} tintColor={theme.onSurfaceVariant} />
            <TextInput
              placeholder="Search menu..."
              placeholderTextColor={theme.onSurfaceVariant}
              style={[{ flex: 1, fontSize: 16 }, { color: theme.onSurface }]}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {CATEGORIES.map((category) => (
              <Pressable
                key={category}
                onPress={() => setActiveCategory(category)}
                style={[
                  {
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderRadius: 9999,
                  },
                  {
                    backgroundColor:
                      activeCategory === category ? theme.primary : theme.surfaceContainerHigh,
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

        <View style={{ marginBottom: 32, paddingLeft: 16, paddingRight: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
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

        <View style={{ marginBottom: 32, paddingLeft: 16, paddingRight: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
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

        <View style={{ marginBottom: 32, paddingLeft: 16, paddingRight: 16 }}>
           <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>Snacks</ThemedText>
           <View style={{ flexDirection: 'row', gap: 16 }}>
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
      <View style={{ position: 'absolute', bottom: 100, right: 16 }}>
         <Pressable
           style={[
             {
               flexDirection: 'row',
               alignItems: 'center',
               paddingLeft: 24,
               paddingRight: 24,
               paddingTop: 16,
               paddingBottom: 16,
               borderRadius: 9999,
               gap: 12,
               shadowColor: '#000',
               shadowOffset: { width: 0, height: 4 },
               shadowOpacity: 0.2,
               shadowRadius: 8,
               elevation: 6,
             },
             { backgroundColor: theme.primary },
           ]}
         >
            <SymbolView name="basket" size={24} tintColor={theme.onPrimary} />
            <ThemedText type="labelCaps" style={{ color: theme.onPrimary }}>View Order (2)</ThemedText>
         </Pressable>
      </View>
    </ThemedView>
  );
}
