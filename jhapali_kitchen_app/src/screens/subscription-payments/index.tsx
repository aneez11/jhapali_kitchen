import React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

const PAYMENT_HISTORY = [
  { date: 'Oct 1', amount: '$45.00', status: 'Paid' },
  { date: 'Sep 1', amount: '$45.00', status: 'Paid' },
  { date: 'Aug 1', amount: '$45.00', status: 'Paid' },
];

export default function SubscriptionPayments() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.header, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.brandRow}>
            <View style={styles.brandIcon}>
              <SymbolView name="leaf.fill" size={20} tintColor="#ffffff" />
            </View>
            <ThemedText type="headlineMd" style={{ fontSize: 18 }}>Canteen Pro</ThemedText>
          </View>
          <View style={[styles.miniAvatar, { borderColor: theme.primary + '33' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg' }}
              style={styles.avatarImage}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Status Banner */}
        <View style={[styles.statusBanner, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant }]}>
          <View style={styles.statusRow}>
            <View style={styles.statusLeft}>
              <View style={[styles.statusIcon, { backgroundColor: theme.primaryContainer + '33' }]}>
                <SymbolView name="leaf.fill" size={22} tintColor={theme.primary} />
              </View>
              <View style={styles.statusInfo}>
                <View style={styles.planNameRow}>
                  <ThemedText type="headlineMd" style={{ fontSize: 16 }}>Monthly Canteen Pass</ThemedText>
                  <View style={[styles.statusBadge, { backgroundColor: theme.primary + '1A' }]}>
                    <ThemedText type="labelCaps" style={{ color: theme.primary, fontSize: 10, fontWeight: '700' }}>
                      ACTIVE
                    </ThemedText>
                  </View>
                </View>
                <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 4 }}>
                  Next Renewal: Nov 1st
                </ThemedText>
              </View>
            </View>
          </View>
          <Button
            title="Upgrade Plan"
            type="outline"
            size="sm"
            style={{ marginTop: 12, borderColor: theme.primary + '33' }}
            onPress={() => router.push('/upgrade-plan')}
          />
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>Payment Method</ThemedText>
          </View>
          <View style={[styles.paymentCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
            <View style={styles.paymentCardHeader}>
              <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>Visa ending in 4242</ThemedText>
              <Button title="Update" type="ghost" size="sm" />
            </View>
            <View style={styles.cardRow}>
              <View style={[styles.cardIcon, { backgroundColor: '#1a1f71' }]}>
                <SymbolView name="creditcard.fill" size={18} tintColor="#ffffff" />
              </View>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>Expires 12/26</ThemedText>
            </View>
          </View>
        </View>

        {/* Payment History */}
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>Payment History</ThemedText>
          </View>
          <View style={styles.sectionPadding}>
            {PAYMENT_HISTORY.map((item, index) => (
              <View key={index} style={[styles.historyItem, { borderBottomColor: theme.outlineVariant + '66' }]}>
                <View style={styles.historyItemLeft}>
                  <View style={[styles.historyDot, { backgroundColor: theme.primary }]} />
                  <ThemedText type="bodyLg">{item.date}</ThemedText>
                </View>
                <View style={styles.historyRight}>
                  <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{item.amount}</ThemedText>
                  <ThemedText type="bodySm" style={{ color: theme.primary, marginTop: 2 }}>{item.status}</ThemedText>
                </View>
              </View>
            ))}
            <View style={styles.viewAllLink}>
              <Pressable onPress={() => {}}>
                <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '600' }}>
                  View All Transactions
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Annual Upsell */}
        <View style={[styles.upsellCard, { backgroundColor: theme.primaryContainer + '1A', borderColor: theme.primary + '33' }]}>
          <View style={[styles.upsellIcon, { backgroundColor: theme.primary + '1A' }]}>
            <SymbolView name="gift.fill" size={24} tintColor={theme.primary} />
          </View>
          <View style={styles.upsellContent}>
            <ThemedText type="headlineMd" style={{ fontSize: 16, color: theme.primary }}>
              Save 20% with Annual
            </ThemedText>
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
              Switch to yearly billing and save big!
            </ThemedText>
          </View>
          <Button title="Switch" type="primary" size="sm" onPress={() => {}} />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
