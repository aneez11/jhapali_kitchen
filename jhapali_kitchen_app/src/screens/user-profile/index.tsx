import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PreferenceCard } from '@/components/profile/preference-card';
import { SettingsItem } from '@/components/profile/settings-item';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { useThemePreference, useSetThemePreference } from '@/hooks/use-theme-preference';
import { BorderRadius, Spacing } from '@/constants/theme';

export default function UserProfile() {
  const theme = useTheme();
  const router = useRouter();
  const preference = useThemePreference();
  const setThemePreference = useSetThemePreference();
  const [isVegetarian, setIsVegetarian] = useState(true);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [hasNutAllergy, setHasNutAllergy] = useState(false);

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ paddingLeft: 16, paddingRight: 16 }}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <SymbolView name="fork.knife" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <View style={[{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 1 }, { borderColor: theme.outlineVariant + '4D' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAizyyMWDiiUudmUHLKCf0V-zE21kBdjDjZyQY6pg0GLdJugwBlvMGqEppIBH8bkoL1ux1iRqotUtiTOUTd8hxyYgId2Ys3CMbVa4wbxgbvRjIvI2PUvBN8xVDD9V9aNNcrN90lwJpbf25tpIiT7goJG_YcBxIARlkeBJjwgQyV1S2o6PMfx5L9EcB1eTCdnpe83-bOrhKEyig3WF4AQ7tivrOZ0M-s4e7DrW_nMOkbsNFDHm2SqoFDhSTMev9XTaN5TGoXXsuM5fE' }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 32, paddingLeft: 16, paddingRight: 16 }} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={{ alignItems: 'center', marginBottom: 32 }}>
          <View style={{ position: 'relative', marginBottom: 16 }}>
            <View style={[{ width: 112, height: 112, borderRadius: 56, overflow: 'hidden', borderWidth: 4 }, { borderColor: theme.primaryContainer }]}>
              <ExpoImage
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvW9n3wAX5WKteLNPXGi_8fJdWy3aAFWluC4J_5Kp3lWwro_80FzwMRY4sHcKjLZcgITkv9pPBS9B_I1JBxBkKN9R1GGsjGXicaO6u4IscGaYg1gHn9x8MIF_cWjvknL-eyu-hA1K6yGxvlqzaghBEM9STMHThl5AL4cgEPRN4ehLCBaKM0aGT1zPLoLzhjKgRHizvGegwlJ9z4_cVeOeC88DZh3SJQyOS3bCeNDH08lvndXAO8kP_Kk_xIstO6PnXJhbZa-ePGAM' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <Pressable style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, backgroundColor: theme.primary }}>
              <SymbolView name="pencil" size={16} tintColor={theme.onPrimary} />
            </Pressable>
          </View>
          <ThemedText type="headlineLg">Alex Mercer</ThemedText>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
            <View style={[{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, borderRadius: 9999 }, { backgroundColor: theme.surfaceContainerHigh }]}>
              <ThemedText type="labelCaps">Emp ID: #88291</ThemedText>
            </View>
            <View style={[{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, borderRadius: 9999 }, { backgroundColor: theme.surfaceContainerHigh }]}>
              <ThemedText type="labelCaps">IT Dept</ThemedText>
            </View>
          </View>
        </View>

        {/* Dietary Preferences */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <ThemedText type="headlineMd">Dietary Preferences</ThemedText>
            <SymbolView name={"figure.accessibility" as any} size={24} tintColor={theme.primary} />
          </View>
          <PreferenceCard
            title="Vegetarian Only"
            description="Exclude meat from all plans"
            icon="leaf.fill"
            iconColor={theme.primary}
            iconBg={theme.primaryContainer + '33'}
            value={isVegetarian}
            onValueChange={setIsVegetarian}
          />
          <PreferenceCard
            title="No Gluten"
            description="Gluten-free meal alternatives"
            icon="grain"
            iconColor={theme.secondary}
            iconBg={theme.secondaryContainer + '33'}
            value={isGlutenFree}
            onValueChange={setIsGlutenFree}
          />
          <PreferenceCard
            title="Nut Allergy"
            description="Strict cross-contamination check"
            icon="exclamationmark.triangle"
            iconColor={theme.error}
            iconBg={theme.errorContainer + '33'}
            value={hasNutAllergy}
            onValueChange={setHasNutAllergy}
          />
        </View>

        {/* Application Settings */}
        <View style={{ marginBottom: 32 }}>
          <ThemedText type="headlineMd" style={{ marginBottom: Spacing.stackGap }}>Application Settings</ThemedText>
          <Card variant="outline" style={{ borderRadius: BorderRadius.md }}>
            <SettingsItem
              title="Language Settings"
              subtitle="Currently: English"
              icon="globe"
            />
            <SettingsItem
              title="Notifications"
              subtitle="Meal alerts and billing"
              icon="bell"
              showDivider={false}
            />
          </Card>
        </View>

        {/* Theme Preference */}
        <View style={{ marginBottom: 32 }}>
          <ThemedText type="headlineMd" style={{ marginBottom: Spacing.stackGap }}>Appearance</ThemedText>
          <Card variant="outline" style={{ borderRadius: BorderRadius.md }}>
            <View style={{ flexDirection: 'row', padding: 16, gap: 8 }}>
              {(['light', 'dark', 'system'] as const).map((mode) => {
                const isActive = preference === mode;
                return (
                  <Pressable
                    key={mode}
                    onPress={() => setThemePreference(mode)}
                    style={[
                      {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        paddingVertical: 12,
                        borderRadius: BorderRadius.md,
                        borderWidth: 1,
                      },
                      isActive
                        ? { backgroundColor: theme.primary, borderColor: theme.primary }
                        : { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant },
                    ]}
                  >
                    <SymbolView
                      name={mode === 'light' ? 'sun.max.fill' : mode === 'dark' ? 'moon.fill' : 'gear'}
                      size={20}
                      tintColor={isActive ? theme.onPrimary : theme.onSurfaceVariant}
                    />
                    <ThemedText
                      type="labelCaps"
                      style={{ color: isActive ? theme.onPrimary : theme.onSurfaceVariant }}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
          </Card>
        </View>

        {/* Logout */}
        <View style={{ marginTop: 16 }}>
          <Button
            title="Logout"
            type="primary"
            style={{ backgroundColor: theme.errorContainer, height: 56 }}
            textStyle={{ color: theme.onErrorContainer, fontWeight: '700' }}
            icon={<SymbolView name="rectangle.portrait.and.arrow.right" size={20} tintColor={theme.onErrorContainer} />}
          />
          <ThemedText type="labelCaps" style={{ color: theme.outline, textAlign: 'center', marginTop: 16 }}>
            Canteen Pro v2.4.1
          </ThemedText>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </ThemedView>
  );
}
