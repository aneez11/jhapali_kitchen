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

const PAYMENT_HISTORY = [
  { date: 'Oct 1', amount: '$45.00', status: 'Paid' },
  { date: 'Sep 1', amount: '$45.00', status: 'Paid' },
  { date: 'Aug 1', amount: '$45.00', status: 'Paid' },
];

export default function SubscriptionPayments() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView
        style={[
          {
            paddingLeft: 16,
            paddingRight: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme.outlineVariant,
            backgroundColor: theme.surface + 'E6',
            zIndex: 50,
          },
          { borderBottomColor: theme.outlineVariant },
        ]}
      >
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
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: theme.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SymbolView name="leaf.fill" size={20} tintColor={theme.onPrimary} />
            </View>
            <ThemedText type="headlineMd" style={{ fontSize: 18 }}>
              Canteen Pro
            </ThemedText>
          </View>
          <View
            style={[
              {
                width: 36,
                height: 36,
                borderRadius: 18,
                overflow: 'hidden',
                borderWidth: 2,
                borderColor: theme.primary + '33',
              },
              { borderColor: theme.primary + '33' },
            ]}
          >
            <ExpoImage
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg',
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Banner */}
        <View
          style={[
            {
              padding: 16,
              borderRadius: 16,
              borderWidth: 1,
              marginLeft: 16,
              marginRight: 16,
            },
            {
              backgroundColor: theme.surfaceContainerLow,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                flex: 1,
              }}
            >
              <View
                style={[
                  {
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  { backgroundColor: theme.primaryContainer + '33' },
                ]}
              >
                <SymbolView name="leaf.fill" size={22} tintColor={theme.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <ThemedText type="headlineMd" style={{ fontSize: 16 }}>
                    Monthly Canteen Pass
                  </ThemedText>
                  <View
                    style={[
                      {
                        alignSelf: 'flex-start',
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 2,
                        paddingBottom: 2,
                        borderRadius: 9999,
                        marginTop: 4,
                      },
                      { backgroundColor: theme.primary + '1A' },
                    ]}
                  >
                    <ThemedText
                      type="labelCaps"
                      style={{ color: theme.primary, fontSize: 10, fontWeight: '700' }}
                    >
                      ACTIVE
                    </ThemedText>
                  </View>
                </View>
                <ThemedText
                  type="bodySm"
                  style={{ color: theme.onSurfaceVariant, marginTop: 4 }}
                >
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
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>
              Payment Method
            </ThemedText>
          </View>
          <View
            style={[
              {
                marginLeft: 16,
                marginRight: 16,
                padding: 16,
                borderRadius: 16,
                borderWidth: 1,
              },
              {
                backgroundColor: theme.surfaceContainerLowest,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>
                Visa ending in 4242
              </ThemedText>
              <Button title="Update" type="ghost" size="sm" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                marginBottom: 4,
              }}
            >
              <View
                style={[
                  {
                    width: 40,
                    height: 28,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  { backgroundColor: theme.primary },
                ]}
              >
                <SymbolView name="creditcard.fill" size={18} tintColor={theme.onPrimary} />
              </View>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                Expires 12/26
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Payment History */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>
              Payment History
            </ThemedText>
          </View>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            {PAYMENT_HISTORY.map((item, index) => (
              <View
                key={index}
                style={[
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 12,
                    borderBottomWidth: 1,
                  },
                  { borderBottomColor: theme.outlineVariant + '66' },
                ]}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <View
                    style={[
                      { width: 8, height: 8, borderRadius: 4 },
                      { backgroundColor: theme.primary },
                    ]}
                  />
                  <ThemedText type="bodyLg">{item.date}</ThemedText>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>
                    {item.amount}
                  </ThemedText>
                  <ThemedText
                    type="bodySm"
                    style={{ color: theme.primary, marginTop: 2 }}
                  >
                    {item.status}
                  </ThemedText>
                </View>
              </View>
            ))}
            <View style={{ marginTop: 12, alignItems: 'center' }}>
              <Pressable onPress={() => {}}>
                <ThemedText
                  type="bodySm"
                  style={{ color: theme.primary, fontWeight: '600' }}
                >
                  View All Transactions
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Annual Upsell */}
        <View
          style={[
            {
              marginLeft: 16,
              marginRight: 16,
              padding: 16,
              borderRadius: 16,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
            },
            {
              backgroundColor: theme.primaryContainer + '1A',
              borderColor: theme.primary + '33',
            },
          ]}
        >
          <View
            style={[
              {
                width: 48,
                height: 48,
                borderRadius: 24,
                alignItems: 'center',
                justifyContent: 'center',
              },
              { backgroundColor: theme.primary + '1A' },
            ]}
          >
            <SymbolView name="gift.fill" size={24} tintColor={theme.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText
              type="headlineMd"
              style={{ fontSize: 16, color: theme.primary }}
            >
              Save 20% with Annual
            </ThemedText>
            <ThemedText
              type="bodySm"
              style={{ color: theme.onSurfaceVariant, marginTop: 2 }}
            >
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
