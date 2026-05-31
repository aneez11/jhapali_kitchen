import React, { useState } from 'react';
import { ScrollView, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const QUICK_ACTIONS = [
  {
    title: 'Subscription',
    icon: 'creditcard.fill' as const,
    description: 'Plans, billing, and refunds',
    color: 'primary',
    halfWidth: true,
  },
  {
    title: 'Technical Issues',
    icon: 'gearshape.fill' as const,
    description: 'App bugs and performance',
    color: 'secondary',
    halfWidth: true,
  },
  {
    title: 'Canteen Rules',
    icon: 'doc.text.fill' as const,
    description: 'Hygiene standards and pickup protocols',
    color: 'tertiary',
    halfWidth: false,
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I change my meal preference?',
    answer: 'Go to your Profile page and tap on "Dietary Preferences". You can update your vegetarian, gluten, and allergy preferences there. Changes take effect from the next meal.',
  },
  {
    question: 'What is the QR ID for?',
    answer: 'Your QR ID is your digital meal pass. Show it at the counter to pick up your pre-ordered meal. Each QR code refreshes every 5 minutes for security.',
  },
  {
    question: 'Can I pause my subscription?',
    answer: 'Yes, you can pause your subscription from the Subscription page. Tap on "Manage Plan" and select "Pause Subscription". You can resume anytime.',
  },
];

function FAQItem({
  question,
  answer,
  theme,
}: {
  question: string;
  answer: string;
  theme: any;
}) {
  const [open, setOpen] = useState(false);
  const height = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: height.value > 0 ? withTiming(1) : 0,
    overflow: 'hidden',
  }));

  const toggle = () => {
    setOpen(!open);
    height.value = withTiming(open ? 0 : 100, { duration: 300 });
  };

  return (
    <View style={[{ borderWidth: 1, borderRadius: 12, overflow: 'hidden' }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
      <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }} onPress={toggle}>
        <ThemedText type="bodyLg" style={{ fontWeight: '600', flex: 1 }}>{question}</ThemedText>
        <SymbolView
          name={open ? 'chevron.up' : 'chevron.down'}
          size={20}
          tintColor={theme.onSurfaceVariant}
        />
      </Pressable>
      {open && (
        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, lineHeight: 22 }}>
            {answer}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

export default function HelpSupport() {
  const theme = useTheme();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={[{ paddingLeft: 16, paddingRight: 16, borderBottomWidth: 1, zIndex: 50, backgroundColor: theme.surface + 'E6' }, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Pressable style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => router.back()}>
              <SymbolView name="chevron.left" size={24} tintColor={theme.onSurface} />
            </Pressable>
            <ThemedText type="headlineMd">Help & Support</ThemedText>
          </View>
          <View style={[{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }, { borderWidth: 2, borderColor: theme.primary + '33', borderRadius: 20, overflow: 'hidden' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg' }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 24, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View style={{ marginBottom: 24 }}>
            <ThemedText type="headlineMd" style={{ marginBottom: 12 }}>How can we help?</ThemedText>
            <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, height: 52, borderRadius: 12, borderWidth: 1 }, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant }]}>
              <SymbolView name="magnifyingglass" size={20} tintColor={theme.onSurfaceVariant} />
              <TextInput
                style={[{ flex: 1, fontFamily: 'Inter', fontSize: 16, lineHeight: 24 }, { color: theme.onSurface }]}
                placeholder="Search help topics..."
                placeholderTextColor={theme.outlineVariant}
                value={search}
                onChangeText={setSearch}
              />
            </View>
          </View>

          {/* Quick Actions */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {QUICK_ACTIONS.map((action, index) => {
              const colorKey = action.color as keyof typeof theme;
              const containerColor = theme[`${action.color}Container` as keyof typeof theme] || theme.surfaceContainerHigh;
              const iconColor = theme[action.color as keyof typeof theme] || theme.primary;

              return (
                <View
                  key={index}
                  style={[
                    { padding: 16, borderRadius: 16, borderWidth: 1, gap: 12 },
                    action.halfWidth ? { width: '48%' } : { width: '100%' },
                    { backgroundColor: containerColor + '1A', borderColor: iconColor + '20' },
                  ]}
                >
                  <View style={[{ width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }, { backgroundColor: iconColor + '1A' }]}>
                    <SymbolView name={action.icon} size={22} tintColor={iconColor} />
                  </View>
                  <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>{action.title}</ThemedText>
                  <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
                    {action.description}
                  </ThemedText>
                </View>
              );
            })}
          </View>
        </View>

        {/* FAQ */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>Frequently Asked Questions</ThemedText>
          </View>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={{ gap: 8 }}>
              {filteredFAQs.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} theme={theme} />
              ))}
            </View>
          </View>
        </View>

        {/* Contact Support */}
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View style={[{ padding: 16, borderRadius: 16, borderWidth: 1, flexDirection: 'row', alignItems: 'center', gap: 16 }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
            <View style={[{ width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center' }, { backgroundColor: theme.primaryContainer + '33' }]}>
              <SymbolView name="person.crop.circle.fill" size={28} tintColor={theme.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>Still need help?</ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
                Our support team is here for you
              </ThemedText>
            </View>
            <Button title="Contact" type="primary" size="sm" onPress={() => {}} />
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
