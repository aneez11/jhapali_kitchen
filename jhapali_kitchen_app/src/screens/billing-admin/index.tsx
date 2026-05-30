import React, { useState } from 'react';
import { ScrollView, View, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

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
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.header, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.iconButton} onPress={() => router.back()}>
              <SymbolView name="chevron.left" size={24} tintColor={theme.onSurface} />
            </Pressable>
            <View style={styles.brandIcon}>
              <SymbolView name="leaf.fill" size={18} tintColor="#ffffff" />
            </View>
            <ThemedText type="headlineMd" style={{ fontSize: 16 }}>Admin</ThemedText>
          </View>
          <Pressable style={styles.iconButton}>
            <SymbolView name="bell.fill" size={22} tintColor={theme.onSurfaceVariant} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <View style={styles.sectionPadding}>
          <ThemedText type="headlineLg" style={styles.pageTitle}>Financial Oversight</ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginBottom: 20 }}>
            Tracking dues and collection efficiency for May 2024
          </ThemedText>
        </View>

        {/* Financial Overview Cards */}
        <View style={styles.sectionPadding}>
          <View style={styles.financialGrid}>
            {FINANCIAL_CARDS.map((card, index) => {
              const iconBgColor = theme[`${card.bgColor}` as keyof typeof theme] || theme.surfaceContainerHigh;
              const iconColor = theme[card.color as keyof typeof theme] || theme.primary;
              return (
                <View
                  key={index}
                  style={[styles.finCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[styles.finCardIcon, { backgroundColor: iconBgColor }]}>
                      <SymbolView name={card.icon} size={20} tintColor={iconColor} />
                    </View>
                    {card.trend ? (
                      <View style={styles.finCardTrend}>
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
                      <View style={styles.finCardTrend}>
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
                  <ThemedText style={[styles.finCardValue, { color: theme.onSurface }]}>
                    {card.value}
                  </ThemedText>
                </View>
              );
            })}
          </View>
        </View>

        {/* Search & Filter */}
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <View style={{ marginBottom: 16 }}>
              <View style={[styles.chartCard, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant }]}>
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
            <View style={styles.filterRow}>
              {['All', 'Overdue', 'Pending', 'Paid'].map((f) => (
                <Pressable
                  key={f}
                  onPress={() => setFilter(f)}
                  style={[
                    styles.filterChip,
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
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <View style={styles.tableHeader}>
              <ThemedText type="headlineMd">Customer Dues</ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                1-4 of 245
              </ThemedText>
            </View>

            {CUSTOMERS.map((customer, index) => (
              <View
                key={index}
                style={[styles.customerRow, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}
              >
                <View style={[styles.customerAvatar, { backgroundColor: theme.primary + '1A' }]}>
                  <ThemedText type="bodySm" style={{ color: theme.primary, fontWeight: '700' }}>
                    {customer.initials}
                  </ThemedText>
                </View>
                <View style={styles.customerInfo}>
                  <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{customer.name}</ThemedText>
                  <View style={styles.customerMeta}>
                    <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                      {customer.empId}
                    </ThemedText>
                    <View style={[styles.planBadge, { backgroundColor: theme.surfaceContainerHigh }]}>
                      <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, fontSize: 9 }}>
                        {customer.plan}
                      </ThemedText>
                    </View>
                  </View>
                </View>
                <View style={styles.customerRight}>
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
                      styles.statusBadge,
                      { backgroundColor: statusColor(customer.statusColor) + '1A' },
                    ]}
                  >
                    <View
                      style={[styles.statusDot, { backgroundColor: statusColor(customer.statusColor) }]}
                    />
                    <ThemedText
                      type="labelCaps"
                      style={{ color: statusColor(customer.statusColor), fontSize: 9 }}
                    >
                      {customer.status}
                    </ThemedText>
                  </View>
                  <View style={styles.actionRow}>
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

            <View style={styles.pagination}>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                Showing 1-4 of 245
              </ThemedText>
              <View style={styles.paginationBtns}>
                <Pressable style={[styles.pageBtn, { borderColor: theme.outlineVariant }]}>
                  <SymbolView name="chevron.left" size={14} tintColor={theme.onSurfaceVariant} />
                </Pressable>
                <Pressable style={[styles.pageBtn, styles.pageBtnActive, { backgroundColor: theme.primary }]}>
                  <ThemedText type="bodySm" style={{ color: theme.onPrimary, fontWeight: '700' }}>1</ThemedText>
                </Pressable>
                <Pressable style={[styles.pageBtn, { borderColor: theme.outlineVariant }]}>
                  <ThemedText type="bodySm" style={{ color: theme.onSurface, fontWeight: '700' }}>2</ThemedText>
                </Pressable>
                <Pressable style={[styles.pageBtn, { borderColor: theme.outlineVariant }]}>
                  <SymbolView name="chevron.right" size={14} tintColor={theme.onSurfaceVariant} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Collection Trend Chart */}
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <View style={[styles.chartCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
              <View style={styles.chartHeader}>
                <ThemedText type="headlineMd">Collection Trend</ThemedText>
                <SymbolView name="ellipsis" size={20} tintColor={theme.onSurfaceVariant} />
              </View>
              <View style={[styles.chartContainer, { borderBottomColor: theme.outlineVariant }]}>
                {CHART_DATA.map((bar, index) => (
                  <View key={index} style={styles.chartBar}>
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
              <View style={styles.chartLabels}>
                {CHART_DATA.map((bar, index) => (
                  <ThemedText key={index} style={styles.chartLabel} themeColor="textSecondary">
                    {bar.label}
                  </ThemedText>
                ))}
              </View>
              <View style={[styles.insightCard, { backgroundColor: theme.primary + '08', borderColor: theme.primary + '10' }]}>
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
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <View style={[styles.chartCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
              <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>Priority Reminders</ThemedText>
              {REMINDERS.map((reminder, index) => {
                const iconColor = theme[reminder.color as keyof typeof theme] || theme.primary;
                const iconBg = theme[`${reminder.color}Container` as keyof typeof theme] || theme.surfaceContainerHigh;
                return (
                  <View
                    key={index}
                    style={[styles.reminderItem, { borderBottomColor: index < REMINDERS.length - 1 ? theme.outlineVariant + '66' : 'transparent' }]}
                  >
                    <View style={[styles.reminderIcon, { backgroundColor: iconBg + '66' }]}>
                      <SymbolView name={reminder.icon} size={18} tintColor={iconColor} />
                    </View>
                    <View style={styles.reminderContent}>
                      <ThemedText type="bodySm" style={{ fontWeight: '600' }}>{reminder.title}</ThemedText>
                      <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, fontSize: 11 }}>
                        {reminder.subtitle}
                      </ThemedText>
                    </View>
                    {reminder.spinning ? (
                      <View style={[styles.spinner, { borderColor: theme.primary, borderTopColor: 'transparent' }]} />
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
        <View style={styles.sectionPadding}>
          <View style={[styles.proTipCard, { backgroundColor: theme.primaryContainer + '1A', borderColor: theme.primary + '20' }]}>
            <View style={[styles.proTipIcon, { backgroundColor: theme.primary + '1A' }]}>
              <SymbolView name="lightbulb.fill" size={24} tintColor={theme.primary} />
            </View>
            <View style={styles.proTipContent}>
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
