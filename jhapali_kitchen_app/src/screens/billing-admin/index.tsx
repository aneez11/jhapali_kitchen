import React, { useState } from 'react';
import { ScrollView, View, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

const FINANCIAL_CARDS = [
  {
    label: 'Total Outstanding Dues',
    value: 'NPR 452,300',
    trend: '+12%',
    trendUp: true,
    icon: 'creditcard' as any,
    color: 'error',
    bgColor: 'errorContainer',
  },
  {
    label: 'Payments Pending',
    value: '124',
    trend: '82 Pending',
    trendUp: false,
    icon: 'clock' as any,
    color: 'secondary',
    bgColor: 'secondaryContainer',
  },
  {
    label: 'Collected This Month',
    value: 'NPR 1.2M',
    trend: 'Target: 90%',
    trendUp: true,
    icon: 'dollarsign.circle' as any,
    color: 'primary',
    bgColor: 'primaryContainer',
  },
  {
    label: 'Active Debtors',
    value: '45 Users',
    trend: '',
    trendUp: true,
    icon: 'person.3' as any,
    color: 'tertiary',
    bgColor: 'tertiaryContainer',
  },
];

const CUSTOMERS = [
  {
    initials: 'AS',
    name: 'Anish Sharma',
    empId: 'VC-1024',
    plan: 'Executive Plus',
    balance: '12,450.00',
    balanceError: true,
    lastPayment: '15 Apr 2024',
    status: 'Overdue',
    statusColor: 'error',
  },
  {
    initials: 'BP',
    name: 'Binita Poudel',
    empId: 'VC-0988',
    plan: 'Standard Daily',
    balance: '4,200.00',
    balanceError: false,
    lastPayment: '02 May 2024',
    status: 'Pending',
    statusColor: 'secondary',
  },
  {
    initials: 'RK',
    name: 'Ramesh Karki',
    empId: 'VC-1156',
    plan: 'Student Meal',
    balance: '0.00',
    balanceError: false,
    lastPayment: '28 May 2024',
    status: 'Paid',
    statusColor: 'primary',
  },
  {
    initials: 'SL',
    name: 'Sunita Lama',
    empId: 'VC-1005',
    plan: 'Executive Plus',
    balance: '25,800.00',
    balanceError: true,
    lastPayment: '12 Mar 2024',
    status: 'Overdue',
    statusColor: 'error',
  },
];

const CHART_DATA = [
  { label: 'Wk 1', value: 40, amount: '450k' },
  { label: 'Wk 2', value: 55, amount: '620k' },
  { label: 'Wk 3', value: 25, amount: '280k' },
  { label: 'Wk 4', value: 85, amount: '910k' },
];

const REMINDERS = [
  {
    title: 'Review Overdue High-Balances',
    subtitle: '12 customers exceed NPR 20k',
    icon: 'exclamationmark.triangle.fill' as const,
    color: 'error',
  },
  {
    title: 'Monthly Invoicing',
    subtitle: 'Prepare drafts for June 2024',
    icon: 'envelope.fill' as const,
    color: 'secondary',
  },
  {
    title: 'Auto-Deduction Sync',
    subtitle: 'Syncing with Payroll System...',
    icon: 'arrow.triangle.2.circlepath' as const,
    color: 'tertiary',
    spinning: true,
  },
];

export default function BillingAdmin() {
  const theme = useTheme();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const statusColor = (colorName: string) => {
    const key = colorName as keyof typeof theme;
    return theme[key] || theme.primary;
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={[{ paddingLeft: 16, paddingRight: 16, borderBottomWidth: 1, zIndex: 50, backgroundColor: theme.surface + 'E6' }, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Pressable style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => router.back()}>
              <SymbolView name="chevron.left" size={24} tintColor={theme.onSurface} />
            </Pressable>
            <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.primary, alignItems: 'center', justifyContent: 'center' }}>
              <SymbolView name="leaf.fill" size={18} tintColor={theme.onPrimary} />
            </View>
            <ThemedText type="headlineMd" style={{ fontSize: 16 }}>Admin</ThemedText>
          </View>
          <Pressable style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <SymbolView name="bell.fill" size={22} tintColor={theme.onSurfaceVariant} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 24, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
          <ThemedText type="headlineLg" style={{ marginBottom: 4 }}>Financial Oversight</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginBottom: 20 }}>
            Tracking dues and collection efficiency for May 2024
          </ThemedText>
        </View>

        {/* Financial Overview Cards */}
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {FINANCIAL_CARDS.map((card, index) => {
              const iconBgColor = theme[`${card.bgColor}` as keyof typeof theme] || theme.surfaceContainerHigh;
              const iconColor = theme[card.color as keyof typeof theme] || theme.primary;
              return (
                <View
                  key={index}
                  style={[{ width: '48%', padding: 16, borderRadius: 16, borderWidth: 1, gap: 12 }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[{ width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }, { backgroundColor: iconBgColor }]}>
                      <SymbolView name={card.icon} size={20} tintColor={iconColor} />
                    </View>
                    {card.trend ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <SymbolView
                          name={card.trendUp ? 'arrow.up' : 'arrow.down'}
                          size={12}
                          tintColor={card.color === 'error' ? theme.error : theme.primary}
                        />
                        <ThemedText
                          type="labelCaps"
                          style={{ color: card.color === 'error' ? theme.error : theme.primary, fontSize: 10 }}
                        >
                          {card.trend}
                        </ThemedText>
                      </View>
                    ) : (
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <View style={{ flexDirection: 'row', gap: 2, alignItems: 'flex-end' }}>
                          {[40, 60, 50, 80, 65].map((h, i) => (
                            <View
                              key={i}
                              style={{
                                width: 4,
                                height: h * 0.3,
                                backgroundColor: theme.primary + Math.min(20 + i * 15, 80).toString(16),
                                borderRadius: 2,
                              }}
                            />
                          ))}
                        </View>
                      </View>
                    )}
                  </View>
                  <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, fontSize: 10, marginTop: 'auto' }}>
                    {card.label.toUpperCase()}
                  </ThemedText>
                  <ThemedText style={[{ fontSize: 24, fontWeight: '700', lineHeight: 32 }, { color: theme.onSurface }]}>
                    {card.value}
                  </ThemedText>
                </View>
              );
            })}
          </View>
        </View>

        {/* Search & Filter */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={{ marginBottom: 16 }}>
              <View style={[{ padding: 16, borderRadius: 16, borderWidth: 1 }, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, height: 44 }}>
                  <SymbolView name="magnifyingglass" size={20} tintColor={theme.onSurfaceVariant} />
                  <TextInput
                    style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, color: theme.onSurface, height: 44 }}
                    placeholder="Search customer name or ID..."
                    placeholderTextColor={theme.outlineVariant}
                    value={search}
                    onChangeText={setSearch}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              {['All', 'Overdue', 'Pending', 'Paid'].map((f) => (
                <Pressable
                  key={f}
                  onPress={() => setFilter(f)}
                  style={[
                    { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 9999, borderWidth: 1 },
                    {
                      backgroundColor: filter === f ? theme.primary : theme.surfaceContainerLow,
                      borderColor: filter === f ? theme.primary : theme.outlineVariant,
                    },
                  ]}
                >
                  <ThemedText
                    type="labelCaps"
                    style={{ color: filter === f ? theme.onPrimary : theme.onSurfaceVariant, fontSize: 10 }}
                  >
                    {f}
                  </ThemedText>
                </Pressable>
              ))}
            </View>
          </View>
        </View>

        {/* Customer Dues List */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <ThemedText type="headlineMd">Customer Dues</ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                1-4 of 245
              </ThemedText>
            </View>

            {CUSTOMERS.map((customer, index) => (
              <View
                key={index}
                style={[{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16, marginBottom: 4, borderRadius: 12, borderWidth: 1 }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}
              >
                <View style={[{ width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginRight: 12 }, { backgroundColor: theme.primary + '1A' }]}>
                  <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '700' }}>
                    {customer.initials}
                  </ThemedText>
                </View>
                <View style={{ flex: 1 }}>
                  <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{customer.name}</ThemedText>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 2 }}>
                    <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                      {customer.empId}
                    </ThemedText>
                    <View style={[{ paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }, { backgroundColor: theme.surfaceContainerHigh }]}>
                      <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, fontSize: 9 }}>
                        {customer.plan}
                      </ThemedText>
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <ThemedText
                    type="bodyLg"
                    style={{
                      fontWeight: '700',
                      color: customer.balanceError ? theme.error : customer.balance === '0.00' ? theme.primary : theme.onSurface,
                    }}
                  >
                    {customer.balanceError ? '' : ''}NPR {customer.balance}
                  </ThemedText>
                  <View
                    style={[
                      { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 9999 },
                      { backgroundColor: statusColor(customer.statusColor) + '1A' },
                    ]}
                  >
                    <View
                      style={[{ width: 6, height: 6, borderRadius: 3 }, { backgroundColor: statusColor(customer.statusColor) }]}
                    />
                    <ThemedText
                      type="labelCaps"
                      style={{ color: statusColor(customer.statusColor), fontSize: 9 }}
                    >
                      {customer.status}
                    </ThemedText>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 4, marginTop: 8 }}>
                    <Pressable style={{ padding: 4 }}>
                      <SymbolView name="creditcard.fill" size={16} tintColor={theme.primary} />
                    </Pressable>
                    <Pressable style={{ padding: 4 }}>
                      <SymbolView name="bell.badge.fill" size={16} tintColor={theme.secondary} />
                    </Pressable>
                    <Pressable style={{ padding: 4 }}>
                      <SymbolView name="doc.text.fill" size={16} tintColor={theme.onSurfaceVariant} />
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                Showing 1-4 of 245
              </ThemedText>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                <Pressable style={[{ width: 32, height: 32, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }, { borderColor: theme.outlineVariant }]}>
                  <SymbolView name="chevron.left" size={14} tintColor={theme.onSurfaceVariant} />
                </Pressable>
                <Pressable style={[{ width: 32, height: 32, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }, { borderWidth: 0 }, { backgroundColor: theme.primary }]}>
                  <ThemedText type="bodySm" style={{ color: theme.onPrimary, fontWeight: '700' }}>1</ThemedText>
                </Pressable>
                <Pressable style={[{ width: 32, height: 32, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }, { borderColor: theme.outlineVariant }]}>
                  <ThemedText type="bodySm" style={{ color: theme.onSurface, fontWeight: '700' }}>2</ThemedText>
                </Pressable>
                <Pressable style={[{ width: 32, height: 32, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }, { borderColor: theme.outlineVariant }]}>
                  <SymbolView name="chevron.right" size={14} tintColor={theme.onSurfaceVariant} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Collection Trend Chart */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={[{ padding: 16, borderRadius: 16, borderWidth: 1 }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <ThemedText type="headlineMd">Collection Trend</ThemedText>
                <SymbolView name="ellipsis" size={20} tintColor={theme.onSurfaceVariant} />
              </View>
              <View style={[{ height: 140, flexDirection: 'row', alignItems: 'flex-end', gap: 8, paddingHorizontal: 8, borderBottomWidth: 1 }, { borderBottomColor: theme.outlineVariant }]}>
                {CHART_DATA.map((bar, index) => (
                  <View key={index} style={{ flex: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
                    <View
                      style={{
                        height: `${bar.value}%`,
                        backgroundColor: theme.primary + '66',
                        borderRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      }}
                    />
                  </View>
                ))}
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, paddingHorizontal: 8 }}>
                {CHART_DATA.map((bar, index) => (
                  <ThemedText key={index} style={{ fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 }} themeColor="textSecondary">
                    {bar.label}
                  </ThemedText>
                ))}
              </View>
              <View style={[{ marginTop: 16, padding: 16, borderRadius: 12, borderWidth: 1 }, { backgroundColor: theme.primary + '08', borderColor: theme.primary + '10' }]}>
                <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '600' }}>
                  Insights
                </ThemedText>
                <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 4, fontSize: 12, lineHeight: 18 }}>
                  Collections are up by <ThemedText type="bodySm" style={{ fontWeight: '700', color: theme.onSurface }}>18%</ThemedText> compared to last month.
                </ThemedText>
              </View>
            </View>
          </View>
        </View>

        {/* Priority Reminders */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={[{ padding: 16, borderRadius: 16, borderWidth: 1 }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
              <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>Priority Reminders</ThemedText>
              {REMINDERS.map((reminder, index) => {
                const iconColor = theme[reminder.color as keyof typeof theme] || theme.primary;
                const iconBg = theme[`${reminder.color}Container` as keyof typeof theme] || theme.surfaceContainerHigh;
                return (
                  <View
                    key={index}
                    style={[{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: 1 }, { borderBottomColor: index < REMINDERS.length - 1 ? theme.outlineVariant + '66' : 'transparent' }]}
                  >
                    <View style={[{ width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }, { backgroundColor: iconBg + '66' }]}>
                      <SymbolView name={reminder.icon} size={18} tintColor={iconColor} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <ThemedText type="bodySm" style={{ fontWeight: '600' }}>{reminder.title}</ThemedText>
                      <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, fontSize: 11 }}>
                        {reminder.subtitle}
                      </ThemedText>
                    </View>
                    {reminder.spinning ? (
                      <View style={[{ width: 16, height: 16, borderRadius: 8, borderWidth: 2 }, { borderColor: theme.primary, borderTopColor: 'transparent' }]} />
                    ) : (
                      <SymbolView name="chevron.right" size={14} tintColor={theme.onSurfaceVariant} />
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* Pro Tip */}
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 16, padding: 16, borderRadius: 16, borderWidth: 1 }, { backgroundColor: theme.primaryContainer + '1A', borderColor: theme.primary + '20' }]}>
            <View style={[{ width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }, { backgroundColor: theme.primary + '1A' }]}>
              <SymbolView name="lightbulb.fill" size={24} tintColor={theme.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="bodySm" style={{ fontWeight: '600', color: theme.primary }}>
                Pro Tip
              </ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, fontSize: 11, marginTop: 2 }}>
                Enabling auto-reminders can reduce late payments by 40%.
              </ThemedText>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
