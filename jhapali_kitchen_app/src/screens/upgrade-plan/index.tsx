import React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PlanCard } from '@/components/ui/plan-card';
import { useTheme } from '@/hooks/use-theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

const PLANS = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      { label: 'Daily lunch meal', included: true },
      { label: 'Standard delivery slot', included: true },
      { label: 'Nutritional consulting', included: false },
      { label: 'Priority support', included: false },
    ],
    isCurrent: true,
    isDisabled: true,
    actionLabel: 'Current Active Plan',
  },
  {
    name: 'Standard',
    price: '$14.99',
    isPopular: true,
    features: [
      { label: 'Premium meal selection', included: true },
      { label: 'Priority delivery window', included: true },
      { label: 'Weekly macro-tracking', included: true },
      { label: 'Custom meal prep', included: false },
    ],
    actionLabel: 'Upgrade to Standard',
  },
  {
    name: 'Premium',
    price: '$19.99',
    features: [
      { label: 'Personalized meal tailoring', included: true },
      { label: 'On-demand delivery', included: true },
      { label: '24/7 Nutritionist access', included: true },
      { label: 'VIP tasting events', included: true },
    ],
    actionLabel: 'Go Premium',
  },
];

export default function UpgradePlan() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.header, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.iconButton} onPress={() => router.back()}>
              <SymbolView name="chevron.left" size={24} tintColor={theme.onSurface} />
            </Pressable>
            <ThemedText type="headlineMd">Upgrade Plan</ThemedText>
          </View>
          <View style={[styles.iconButton, { borderWidth: 2, borderColor: theme.primary + '33', borderRadius: 20, overflow: 'hidden' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg' }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={[styles.sectionPadding, styles.heroSection]}>
          <View style={[styles.heroIcon, { backgroundColor: theme.primaryContainer + '33' }]}>
            <SymbolView name="star.fill" size={32} tintColor={theme.primary} />
          </View>
          <ThemedText type="headlineMd" style={{ textAlign: 'center' }}>
            Fuel Your Ambition
          </ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, textAlign: 'center', marginTop: 4 }}>
            Choose the plan that fits your lifestyle
          </ThemedText>
          <View style={[styles.currentPlanBadge, { backgroundColor: theme.primaryContainer + '33' }]}>
            <SymbolView name="checkmark.circle.fill" size={16} tintColor={theme.primary} />
            <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '600' }}>
              Current Plan: Basic Starter
            </ThemedText>
          </View>
        </View>

        {/* Plan Cards */}
        <View style={styles.sectionPadding}>
          <View style={styles.plansContainer}>
            {PLANS.map((plan, index) => (
              <PlanCard
                key={index}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
                isCurrent={plan.isCurrent}
                isDisabled={plan.isDisabled}
                actionLabel={plan.actionLabel}
                onAction={() => {}}
              />
            ))}
          </View>
        </View>

        {/* Enterprise */}
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <View style={[styles.enterpriseCard, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant }]}>
              <View style={[styles.enterpriseIcon, { backgroundColor: theme.tertiaryContainer + '33' }]}>
                <SymbolView name="building.2.fill" size={24} tintColor={theme.tertiary} />
              </View>
              <View style={styles.enterpriseContent}>
                <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>
                  Fuel your entire team
                </ThemedText>
                <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
                  Custom Enterprise plan with bulk discounts
                </ThemedText>
              </View>
            </View>
            <View style={styles.contactLink}>
              <Pressable onPress={() => {}}>
                <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '600', textAlign: 'center' }}>
                  Contact Sales →
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
