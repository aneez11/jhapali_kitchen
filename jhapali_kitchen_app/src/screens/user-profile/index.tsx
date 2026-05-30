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
import { BorderRadius, Spacing } from '@/constants/theme';

import _styles from './styles.module.scss';
const styles = _styles as any;

export default function UserProfile() {
  const theme = useTheme();
  const router = useRouter();
  const [isVegetarian, setIsVegetarian] = useState(true);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [hasNutAllergy, setHasNutAllergy] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.brandRow}>
            <SymbolView name="fork.knife" size={24} tintColor={theme.primary} />
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Canteen Pro</ThemedText>
          </View>
          <View style={[styles.miniAvatar, { borderColor: theme.outlineVariant + '4D' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAizyyMWDiiUudmUHLKCf0V-zE21kBdjDjZyQY6pg0GLdJugwBlvMGqEppIBH8bkoL1ux1iRqotUtiTOUTd8hxyYgId2Ys3CMbVa4wbxgbvRjIvI2PUvBN8xVDD9V9aNNcrN90lwJpbf25tpIiT7goJG_YcBxIARlkeBJjwgQyV1S2o6PMfx5L9EcB1eTCdnpe83-bOrhKEyig3WF4AQ7tivrOZ0M-s4e7DrW_nMOkbsNFDHm2SqoFDhSTMev9XTaN5TGoXXsuM5fE' }}
              style={styles.avatarImage}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <View style={[styles.largeAvatar, { borderColor: theme.primaryContainer }]}>
              <ExpoImage
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvW9n3wAX5WKteLNPXGi_8fJdWy3aAFWluC4J_5Kp3lWwro_80FzwMRY4sHcKjLZcgITkv9pPBS9B_I1JBxBkKN9R1GGsjGXicaO6u4IscGaYg1gHn9x8MIF_cWjvknL-eyu-hA1K6yGxvlqzaghBEM9STMHThl5AL4cgEPRN4ehLCBaKM0aGT1zPLoLzhjKgRHizvGegwlJ9z4_cVeOeC88DZh3SJQyOS3bCeNDH08lvndXAO8kP_Kk_xIstO6PnXJhbZa-ePGAM' }}
                style={styles.avatarImage}
              />
            </View>
            <Pressable style={[styles.editButton, { backgroundColor: theme.primary }]}>
              <SymbolView name="pencil" size={16} tintColor={theme.onPrimary} />
            </Pressable>
          </View>
          <ThemedText type="headlineLg">Alex Mercer</ThemedText>
          <View style={styles.badgeRow}>
            <View style={[styles.badge, { backgroundColor: theme.surfaceContainerHigh }]}>
              <ThemedText type="labelCaps">Emp ID: #88291</ThemedText>
            </View>
            <View style={[styles.badge, { backgroundColor: theme.surfaceContainerHigh }]}>
              <ThemedText type="labelCaps">IT Dept</ThemedText>
            </View>
          </View>
        </View>

        {/* Dietary Preferences */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="headlineMd">Dietary Preferences</ThemedText>
            <SymbolView name="figure.accessibility" size={24} tintColor={theme.primary} />
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
        <View style={styles.section}>
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

        {/* Logout */}
        <View style={styles.actionSection}>
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
