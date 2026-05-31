import React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

const TRENDING_ITEMS = [
  {
    title: 'Dal Bhat Tarkari',
    subtitle: 'Nepali Classic',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdquMHeGWYUN78XUvekcoe20-nuUT2mw92lkWq2PZhBhHGaeZYmrwAPshSV3w2NZLWF5e1CDwmgwcHdnJyf_FpBj-irhZ-GRWImDrdwqOAyohQIGVRwcK394JSNZeNduv1oDKAP8RzVu1KuiNmLkUBTOYxDmSb1fjwhKFeiKG64sbMwIUl5sZTDeQnvDY26juQg8LmmjuPo0zy7DuOiC8TvBRnjl24r8ytK1cGXz6NIf8aDRCc0LNh0vqLrPCEHmSzenIIl7KDAuM',
  },
  {
    title: 'Chicken Curry & Rice',
    subtitle: 'Daily Special',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwC9Fs6OJ4cYlY66xWO4D8TzcwkUSv61uPob7pCfAyIEL0kgwUj9R6MwF3N5ASF_qU25PbeEHTQGhZDXXI-4LawP0vd-uQq1Q3fx1CjNgOcGxHH0LgeiiEQJPZfO80eipoDqc1BJP0aSFtWvdQJleWUVtjaFO6gXVijfYmdz1zAGOunxp3GjwBZ2pxXyj1O9pP3njnNmBmieKfiRFrBJ-y_LXaOh_973GT_U9_7SvidNka8YWyOgi6nWQBCnNF-scekgvzQNb1MX8',
  },
  {
    title: 'Steamed Momos',
    subtitle: '10pcs • Buff/Veg',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg',
  },
];

const RECOMMENDED_ITEMS = [
  {
    title: 'Veg Thukpa',
    description: 'Warm Himalayan noodle soup',
    icon: 'leaf.fill' as const,
    color: 'primary',
  },
  {
    title: 'Quinoa Salad Bowl',
    description: 'Organic, vegan-friendly',
    icon: 'heart.fill' as const,
    color: 'secondary',
  },
  {
    title: 'Paneer Curry & Roti',
    description: 'Creamy & satisfying',
    icon: 'star.fill' as const,
    color: 'tertiary',
  },
  {
    title: 'French Fries',
    description: 'Crispy snack side',
    icon: 'flame.fill' as const,
    color: 'secondary',
  },
];

export default function FoodDiscovery() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ paddingLeft: 16, paddingRight: 16, borderBottomWidth: 1, zIndex: 50, backgroundColor: theme.surface + 'E6', borderBottomColor: theme.outlineVariant }}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: theme.primary + '33' }}>
              <ExpoImage
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <ThemedText type="headlineMd" style={{ fontSize: 18 }}>Discover</ThemedText>
          </View>
          <Pressable style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => router.push('/food-menu')}>
            <SymbolView name="fork.knife" size={24} tintColor={theme.primary} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 24, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Hero / Tip of the Day */}
        <View style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 32 }}>
          <View style={{ padding: 16, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 16, borderWidth: 1, backgroundColor: theme.primaryContainer + '1A', borderColor: theme.primary + '20' }}>
            <View style={{ width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.primary + '1A' }}>
              <SymbolView name="lightbulb.fill" size={28} tintColor={theme.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="bodyLg" style={{ fontWeight: '600', color: theme.primary }}>
                Chef's Tip
              </ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
                Try today's Dal Bhat with extra ghee — a staff favorite!
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Trending Now */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16, paddingRight: 16, marginBottom: 16 }}>
            <ThemedText type="headlineMd">Trending Now</ThemedText>
            <Pressable onPress={() => router.push('/food-menu')}>
              <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '600' }}>
                See All
              </ThemedText>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
          >
            {TRENDING_ITEMS.map((item, index) => (
              <Pressable
                key={index}
                style={{ width: 200, borderRadius: 16, borderWidth: 1, overflow: 'hidden', marginRight: 12, backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }}
              >
                <ExpoImage source={{ uri: item.imageUrl }} style={{ width: 200, height: 120 }} contentFit="cover" />
                <View style={{ padding: 12, gap: 4 }}>
                  <View style={{ alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 9999, backgroundColor: theme.primary + '1A' }}>
                    <ThemedText type="labelCaps" style={{ color: theme.primary, fontSize: 10 }}>
                      POPULAR
                    </ThemedText>
                  </View>
                  <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{item.title}</ThemedText>
                  <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                    {item.subtitle}
                  </ThemedText>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Recommended for You */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16, paddingRight: 16, marginBottom: 16 }}>
            <ThemedText type="headlineMd">Recommended for You</ThemedText>
          </View>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              {RECOMMENDED_ITEMS.slice(0, 2).map((item, index) => {
                const colorKey = item.color as keyof typeof theme;
                const iconColor = theme[colorKey] || theme.primary;
                return (
                  <Pressable
                    key={index}
                    style={{ flex: 1, borderRadius: 16, borderWidth: 1, padding: 16, gap: 12, backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }}
                  >
                    <View style={{ width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: iconColor + '1A' }}>
                      <SymbolView name={item.icon} size={22} tintColor={iconColor} />
                    </View>
                    <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{item.title}</ThemedText>
                    <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                      {item.description}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
            <View style={{ flexDirection: 'row', gap: 12, marginTop: 12 }}>
              {RECOMMENDED_ITEMS.slice(2, 4).map((item, index) => {
                const colorKey = item.color as keyof typeof theme;
                const iconColor = theme[colorKey] || theme.primary;
                return (
                  <Pressable
                    key={index}
                    style={{ flex: 1, borderRadius: 16, borderWidth: 1, padding: 16, gap: 12, backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }}
                  >
                    <View style={{ width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: iconColor + '1A' }}>
                      <SymbolView name={item.icon} size={22} tintColor={iconColor} />
                    </View>
                    <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{item.title}</ThemedText>
                    <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                      {item.description}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>

        {/* Nutrition Tip */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ marginLeft: 16, marginRight: 16, padding: 16, borderRadius: 16, borderWidth: 1, borderStyle: 'dashed', flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant }}>
            <View style={{ width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.tertiaryContainer + '33' }}>
              <SymbolView name="chart.pie.fill" size={24} tintColor={theme.tertiary} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>
                Balanced Meal Tip
              </ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
                Include protein + fiber for lasting energy through the afternoon.
              </ThemedText>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
