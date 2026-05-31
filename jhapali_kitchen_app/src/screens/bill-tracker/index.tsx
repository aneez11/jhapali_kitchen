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

export default function BillTracker() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ paddingLeft: 16, paddingRight: 16 }}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <SymbolView name="fork.knife" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <View style={[{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 2 }, { borderColor: theme.primaryContainer }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCclxHP8l_IGlhV9LNQjJEdf-XEopUL-VwEX63Ynbw3VdHNf5qhOU7xHw3YOw2VRtAmac7vA7CobqAc0GNky_ZnsTUJDibLu_JxlZaCjlqT_IXgxYIt6Pvmg8Wtw6wg05Ed7NNHvZtTYcxGvtJAp1fbp-53uRt3ElS_N8N8Unej4JSnUImoYZZaheAT0fU28q1Rdk-IIGm92jEtAdHWkreVpOTc6XCaFuBEzLDGpqiviMVcPa975AxLDhQzQMYvy0l6ylsmJO5XCgc' }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16 }} showsVerticalScrollIndicator={false}>
        {/* Total Amount Due Card */}
        <View style={[{ padding: 24, borderRadius: 24, position: 'relative', overflow: 'hidden', marginBottom: 32 }, { backgroundColor: theme.primary }]}>
          <View style={{ zIndex: 1 }}>
            <ThemedText type="labelCaps" style={{ color: theme.onPrimary, opacity: 0.9 }}>TOTAL AMOUNT DUE</ThemedText>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 8 }}>
              <ThemedText type="headlineLg" style={{ color: theme.onPrimary }}>NPR 8,450</ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onPrimary, opacity: 0.8 }}>October 2023</ThemedText>
            </View>
            <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 9999, marginTop: 16, alignSelf: 'flex-start' }, { backgroundColor: theme.onPrimary + '1A' }]}>
              <SymbolView name="clock" size={16} tintColor={theme.onPrimary} />
              <ThemedText type="bodySm" style={{ color: theme.onPrimary }}>Due in 5 days</ThemedText>
            </View>
          </View>
          {/* Decorative Circle */}
          <View style={[{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: 60 }, { backgroundColor: theme.primaryContainer, opacity: 0.2 }]} />
        </View>

        {/* Payment Summary */}
        <View style={{ marginBottom: 32 }}>
          <Card variant="outline" style={{ padding: 20, borderRadius: 24 }}>
            <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>Payment Summary</ThemedText>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <ThemedText type="bodyLg" style={{ color: theme.onSurfaceVariant }}>Meals Consumed</ThemedText>
              <ThemedText type="bodyLg" style={{ fontWeight: '700' }}>22</ThemedText>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <ThemedText type="bodyLg" style={{ color: theme.onSurfaceVariant }}>Standard Cost</ThemedText>
              <ThemedText type="bodyLg">NPR 7,700</ThemedText>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <ThemedText type="bodyLg" style={{ color: theme.onSurfaceVariant }}>Extra Portions</ThemedText>
              <ThemedText type="bodyLg">NPR 750</ThemedText>
            </View>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTopWidth: 1 }, { borderTopColor: theme.outlineVariant + '33' }]}>
              <ThemedText type="headlineMd" style={{ color: theme.primary }}>Grand Total</ThemedText>
              <ThemedText type="headlineMd" style={{ color: theme.primary }}>NPR 8,450</ThemedText>
            </View>
          </Card>
        </View>

        {/* Daily Transactions */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
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
      <View style={{ position: 'absolute', bottom: 100, left: 16, right: 16 }}>
         <Button
            title="Pay Now"
            icon={<SymbolView name="creditcard.fill" size={20} tintColor={theme.onPrimary} />}
            style={{ height: 56, shadowColor: theme.primary, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 }}
         />
      </View>
    </ThemedView>
  );
}
