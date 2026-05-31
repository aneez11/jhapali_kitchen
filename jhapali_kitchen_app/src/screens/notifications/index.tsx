import React from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { NotificationCard } from '@/components/notifications/notification-card';
import { useTheme } from '@/hooks/use-theme';

export default function Notifications() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ paddingLeft: 16, paddingRight: 16, borderBottomWidth: 1, borderBottomColor: theme.outlineVariant + '33' }}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Pressable 
                style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => router.back()}
            >
              <SymbolView name="chevron.left" size={24} tintColor={theme.primary} />
            </Pressable>
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Notifications</ThemedText>
          </View>
          <Pressable style={[{ paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 9999 }, { backgroundColor: theme.primary + '1A' }]}>
            <ThemedText type="labelCaps" style={{ color: theme.primary }}>Mark all as read</ThemedText>
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 32 }}>
          <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, marginBottom: 12, letterSpacing: 1 }}>TODAY</ThemedText>
          <NotificationCard
            title="Daily Menu Live"
            message="Today's special: Mediterranean Quinoa Bowl and Grilled Salmon. Pre-order now to skip the queue!"
            time="10:30 AM"
            icon="fork.knife"
            type="primary"
            actionTitle="View Menu"
          />
          <NotificationCard
            title="Payment Successful"
            message="Your Premium Lunch Plan has been successfully renewed for next month. Receipt #CP-8829-1."
            time="08:15 AM"
            icon="creditcard.fill"
            type="secondary"
          />
          <NotificationCard
            title="Meal Confirmed"
            message="Your lunch booking for 12:45 PM today has been confirmed. See you at Station 4!"
            time="07:00 AM"
            icon="checkmark.circle.fill"
            type="primary"
          />
        </View>

        <View style={{ marginBottom: 32 }}>
          <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, marginBottom: 12, letterSpacing: 1 }}>YESTERDAY</ThemedText>
          <NotificationCard
            title="App Update Available"
            message="Version 2.4.0 is now live with improved nutritional tracking features."
            time="Yesterday"
            icon="arrow.up.circle.fill"
            type="info"
            isRead
          />
          <NotificationCard
            title="Weekly Nutrition Summary"
            message="Great job! You met 90% of your protein goals this past week."
            time="Yesterday"
            icon="leaf.fill"
            type="primary"
            isRead
          />
        </View>

        {/* Empty State / Footer */}
        <View style={[{ marginTop: 32, padding: 32, borderRadius: 24, borderWidth: 2, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' }, { borderColor: theme.outlineVariant + '4D' }]}>
            <View style={[{ width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 16 }, { backgroundColor: theme.surfaceContainerLow }]}>
                <SymbolView name="tray.fill" size={32} tintColor={theme.outline} />
            </View>
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>You're all caught up for now!</ThemedText>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </ThemedView>
  );
}
