import React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TransactionItem } from '@/components/billing/transaction-item';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

export default function BillTracker() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.brandRow}>
            <SymbolView name="restaurant" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <View style={[styles.miniAvatar, { borderColor: theme.primaryContainer }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCclxHP8l_IGlhV9LNQjJEdf-XEopUL-VwEX63Ynbw3VdHNf5qhOU7xHw3YOw2VRtAmac7vA7CobqAc0GNky_ZnsTUJDibLu_JxlZaCjlqT_IXgxYIt6Pvmg8Wtw6wg05Ed7NNHvZtTYcxGvtJAp1fbp-53uRt3ElS_N8N8Unej4JSnUImoYZZaheAT0fU28q1Rdk-IIGm92jEtAdHWkreVpOTc6XCaFuBEzLDGpqiviMVcPa975AxLDhQzQMYvy0l6ylsmJO5XCgc' }}
              style={styles.avatarImage}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Total Amount Due Card */}
        <View style={[styles.dueCard, { backgroundColor: theme.primary }]}>
          <View style={styles.dueCardContent}>
            <ThemedText type="labelCaps" style={{ color: theme.onPrimary, opacity: 0.9 }}>TOTAL AMOUNT DUE</ThemedText>
            <View style={styles.amountRow}>
              <ThemedText type="headlineLg" style={{ color: theme.onPrimary }}>NPR 8,450</ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onPrimary, opacity: 0.8 }}>October 2023</ThemedText>
            </View>
            <View style={[styles.dueBadge, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
              <SymbolView name="clock" size={16} tintColor={theme.onPrimary} />
              <ThemedText type="bodySm" style={{ color: theme.onPrimary }}>Due in 5 days</ThemedText>
            </View>
          </View>
          {/* Decorative Circle */}
          <View style={[styles.decorCircle, { backgroundColor: theme.primaryContainer, opacity: 0.2 }]} />
        </View>

        {/* Payment Summary */}
        <View style={styles.section}>
          <Card variant="outline" style={styles.summaryCard}>
            <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>Payment Summary</ThemedText>
            <View style={styles.summaryRow}>
              <ThemedText type="bodyLg" style={{ color: theme.onSurfaceVariant }}>Meals Consumed</ThemedText>
              <ThemedText type="bodyLg" style={{ fontWeight: '700' }}>22</ThemedText>
            </View>
            <View style={styles.summaryRow}>
              <ThemedText type="bodyLg" style={{ color: theme.onSurfaceVariant }}>Standard Cost</ThemedText>
              <ThemedText type="bodyLg">NPR 7,700</ThemedText>
            </View>
            <View style={styles.summaryRow}>
              <ThemedText type="bodyLg" style={{ color: theme.onSurfaceVariant }}>Extra Portions</ThemedText>
              <ThemedText type="bodyLg">NPR 750</ThemedText>
            </View>
            <View style={[styles.totalRow, { borderTopColor: theme.outlineVariant + '33' }]}>
              <ThemedText type="headlineMd" style={{ color: theme.primary }}>Grand Total</ThemedText>
              <ThemedText type="headlineMd" style={{ color: theme.primary }}>NPR 8,450</ThemedText>
            </View>
          </Card>
        </View>

        {/* Daily Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="headlineMd">Daily Transactions</ThemedText>
            <Pressable>
                <ThemedText type="labelCaps" style={{ color: theme.primary }}>VIEW ALL</ThemedText>
            </Pressable>
          </View>
          
          <TransactionItem
            title="Dal Bhat Tarkari"
            date="Oct 23, 2023"
            slot="Lunch"
            amount="NPR 350"
            status="Processed"
            icon="fork.knife"
          />
          <TransactionItem
            title="Chicken Curry Set"
            date="Oct 22, 2023"
            slot="Lunch"
            amount="NPR 450"
            status="Processed"
            icon="fork.knife"
          />
          <TransactionItem
            title="Momo + Extra Soup"
            date="Oct 21, 2023"
            slot="Snack"
            amount="NPR 400"
            status="Extras Incl."
            icon="plus.circle"
            isExtra
          />
          <TransactionItem
            title="Veg Thali"
            date="Oct 20, 2023"
            slot="Lunch"
            amount="NPR 350"
            status="Processed"
            icon="fork.knife"
          />
        </View>

        <View style={{ height: 160 }} />
      </ScrollView>

      {/* Pay Now FAB */}
      <View style={styles.footerAction}>
         <Button
            title="Pay Now"
            icon={<SymbolView name="creditcard.fill" size={20} tintColor={theme.onPrimary} />}
            style={{ height: 56, shadowColor: theme.primary, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 }}
         />
      </View>
    </ThemedView>
  );
}
