import React, { useState } from "react";
import { ScrollView, View, Pressable, TextInput, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import { SymbolView } from "expo-symbols";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

import _styles from "./styles.module.scss";
const styles = _styles as any;

export default function CustomizeMeal() {
  const theme = useTheme();
  const router = useRouter();
  const [isVegan, setIsVegan] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLowSodium, setIsLowSodium] = useState(false);
  const [extras, setExtras] = useState<string[]>([]);

  const toggleExtra = (extra: string) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra],
    );
  };

  const EXTRAS_OPTIONS = [
    "Extra Pickles (Achaar)",
    "Extra Ghee",
    "Papadum Cracker",
    "Brown Rice Upgrade",
  ];

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <SafeAreaView edges={["top"]} style={styles.headerContent}>
          <Pressable onPress={() => router.back()} style={styles.iconButton}>
            <SymbolView
              name="chevron.left"
              size={24}
              tintColor={theme.primary}
            />
          </Pressable>
          <ThemedText type="headlineMd" style={{ color: theme.primary }}>
            Customize Meal
          </ThemedText>
          <View style={{ width: 40 }} />
        </SafeAreaView>
      </ThemedView>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroImageWrapper}>
            <ExpoImage
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6EIl5JWy8y3OthATLE8C41RSO0Ac7NAf_aMltOGV9VTGM-HRHrgXEsTImWJQHuKN83uAs4xPevqHJ-1eT4BsGWqtymIZ-wrbj_b6eDHcpZ_bF4SW1-locmxUb7u1P0XS2bIH8JxsKWkZ-dzkhLe9tt9pzm1Htc1c8AF5eN-ox5lsWwGtgygcpV8RWY0i4acKq8NAj9P943M7P8u1iQeYvppb2ryRqyjN1wKb7VW8cMylCWorx1YXFppsGUkf-u8w37YoYs31Obos",
              }}
              style={styles.heroImage}
            />
            <View
              style={[
                styles.heroBadge,
                { backgroundColor: "rgba(255,255,255,0.9)" },
              ]}
            >
              <ThemedText type="labelCaps" style={{ color: theme.primary }}>
                Main Course
              </ThemedText>
            </View>
          </View>
          <ThemedText type="headlineLg" style={{ marginTop: 16 }}>
            Dal Bhat Tarkari
          </ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
            Traditional Nepali platter with organic lentils, seasonal
            vegetables, and aromatic spices.
          </ThemedText>
        </View>

        {/* Nutritional Grid */}
        <View style={styles.statsGrid}>
          <View
            style={[
              styles.statCard,
              { backgroundColor: theme.surfaceContainerLow },
            ]}
          >
            <ThemedText
              type="labelCaps"
              style={{ color: theme.onSurfaceVariant }}
            >
              CALORIES
            </ThemedText>
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>
              640
            </ThemedText>
          </View>
          <View
            style={[
              styles.statCard,
              { backgroundColor: theme.surfaceContainerLow },
            ]}
          >
            <ThemedText
              type="labelCaps"
              style={{ color: theme.onSurfaceVariant }}
            >
              PROTEIN
            </ThemedText>
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>
              24g
            </ThemedText>
          </View>
          <View
            style={[
              styles.statCard,
              { backgroundColor: theme.surfaceContainerLow },
            ]}
          >
            <ThemedText
              type="labelCaps"
              style={{ color: theme.onSurfaceVariant }}
            >
              CARBS
            </ThemedText>
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>
              82g
            </ThemedText>
          </View>
        </View>

        {/* Dietary Adjustments */}
        <View style={styles.section}>
          <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>
            Dietary Adjustments
          </ThemedText>
          <View style={styles.adjustmentList}>
            <Pressable
              onPress={() => setIsVegan(!isVegan)}
              style={[
                styles.adjustmentItem,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant + "33",
                },
              ]}
            >
              <View style={styles.adjustmentLeft}>
                <SymbolView
                  name="leaf.fill"
                  size={20}
                  tintColor={theme.primary}
                />
                <ThemedText type="bodyLg">Vegan Preparation</ThemedText>
              </View>
              <Switch
                value={isVegan}
                onValueChange={setIsVegan}
                trackColor={{ true: theme.primary }}
              />
            </Pressable>
            <Pressable
              onPress={() => setIsGlutenFree(!isGlutenFree)}
              style={[
                styles.adjustmentItem,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant + "33",
                },
              ]}
            >
              <View style={styles.adjustmentLeft}>
                <SymbolView name="nosign" size={20} tintColor={theme.primary} />
                <ThemedText type="bodyLg">Gluten Free Grains</ThemedText>
              </View>
              <Switch
                value={isGlutenFree}
                onValueChange={setIsGlutenFree}
                trackColor={{ true: theme.primary }}
              />
            </Pressable>
            <Pressable
              onPress={() => setIsLowSodium(!isLowSodium)}
              style={[
                styles.adjustmentItem,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant + "33",
                },
              ]}
            >
              <View style={styles.adjustmentLeft}>
                <SymbolView
                  name="heart.fill"
                  size={20}
                  tintColor={theme.primary}
                />
                <ThemedText type="bodyLg">Low Sodium</ThemedText>
              </View>
              <Switch
                value={isLowSodium}
                onValueChange={setIsLowSodium}
                trackColor={{ true: theme.primary }}
              />
            </Pressable>
          </View>
        </View>

        {/* Extra Portions */}
        <View style={styles.section}>
          <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>
            Extra Portions
          </ThemedText>
          <View style={styles.chipsContainer}>
            {EXTRAS_OPTIONS.map((option) => (
              <Pressable
                key={option}
                onPress={() => toggleExtra(option)}
                style={[
                  styles.chip,
                  {
                    backgroundColor: extras.includes(option)
                      ? theme.primaryContainer
                      : "#fff",
                    borderColor: extras.includes(option)
                      ? theme.primary
                      : theme.outlineVariant + "80",
                  },
                ]}
              >
                <ThemedText
                  type="bodySm"
                  style={{
                    color: extras.includes(option)
                      ? theme.onPrimaryContainer
                      : theme.onSurface,
                  }}
                >
                  {option}
                </ThemedText>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Special Instructions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <SymbolView
              name="square.and.pencil"
              size={20}
              tintColor={theme.primary}
            />
            <ThemedText type="headlineMd">Special Instructions</ThemedText>
          </View>
          <TextInput
            multiline
            placeholder="E.g., 'Please make it extra spicy'..."
            placeholderTextColor={theme.onSurfaceVariant + "80"}
            style={[
              styles.textArea,
              {
                backgroundColor: theme.surfaceContainerLow,
                color: theme.onSurface,
                borderColor: theme.outlineVariant + "33",
              },
            ]}
          />
        </View>

        <View style={{ height: 160 }} />
      </ScrollView>

      {/* Action Footer */}
      <ThemedView
        style={[styles.footer, { borderTopColor: theme.outlineVariant + "33" }]}
      >
        <View style={styles.footerActions}>
          <Button
            title="Cancel"
            type="outline"
            style={{
              flex: 1,
              backgroundColor: theme.surfaceContainerHigh,
              borderWidth: 0,
            }}
            textStyle={{ color: theme.onSurfaceVariant }}
            onPress={() => router.back()}
          />
          <Button
            title="Save Changes"
            style={{ flex: 2, backgroundColor: theme.primaryContainer }}
            textStyle={{ color: theme.onPrimaryContainer }}
          />
        </View>
      </ThemedView>
    </ThemedView>
  );
}
