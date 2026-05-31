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
    <ThemedView style={{ flex: 1 }}>
      {/* Header */}
      <ThemedView style={{ paddingLeft: 16, paddingRight: 16 }}>
        <SafeAreaView
          edges={["top"]}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 64,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
        contentContainerStyle={{
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={{ marginBottom: 32 }}>
          <View
            style={{
              width: "100%",
              aspectRatio: 4 / 3,
              borderRadius: 24,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <ExpoImage
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6EIl5JWy8y3OthATLE8C41RSO0Ac7NAf_aMltOGV9VTGM-HRHrgXEsTImWJQHuKN83uAs4xPevqHJ-1eT4BsGWqtymIZ-wrbj_b6eDHcpZ_bF4SW1-locmxUb7u1P0XS2bIH8JxsKWkZ-dzkhLe9tt9pzm1Htc1c8AF5eN-ox5lsWwGtgygcpV8RWY0i4acKq8NAj9P943M7P8u1iQeYvppb2ryRqyjN1wKb7VW8cMylCWorx1YXFppsGUkf-u8w37YoYs31Obos",
              }}
              style={{ width: "100%", height: "100%" }}
            />
            <View
              style={[
                {
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 6,
                  paddingBottom: 6,
                  borderRadius: 9999,
                  borderWidth: 1,
                  borderColor: theme.outlineVariant + '33',
                },
                { backgroundColor: theme.surfaceContainerLowest + 'E6' },
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
        <View style={{ flexDirection: "row", gap: 12, marginBottom: 32 }}>
          <View
            style={[
              {
                flex: 1,
                padding: 16,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                borderWidth: 1,
                borderColor: theme.outlineVariant + '33',
              },
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
              {
                flex: 1,
                padding: 16,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                borderWidth: 1,
                borderColor: theme.outlineVariant + '33',
              },
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
              {
                flex: 1,
                padding: 16,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                borderWidth: 1,
                borderColor: theme.outlineVariant + '33',
              },
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
        <View style={{ marginBottom: 32 }}>
          <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>
            Dietary Adjustments
          </ThemedText>
          <View style={{ gap: 12 }}>
            <Pressable
              onPress={() => setIsVegan(!isVegan)}
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                },
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant + "33",
                },
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
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
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                },
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant + "33",
                },
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
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
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                },
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant + "33",
                },
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
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
        <View style={{ marginBottom: 32 }}>
          <ThemedText type="headlineMd" style={{ marginBottom: 16 }}>
            Extra Portions
          </ThemedText>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {EXTRAS_OPTIONS.map((option) => (
              <Pressable
                key={option}
                onPress={() => toggleExtra(option)}
                style={[
                  {
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 9999,
                    borderWidth: 1,
                  },
                  {
                    backgroundColor: extras.includes(option)
                      ? theme.primaryContainer
                      : theme.surfaceContainerLowest,
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
        <View style={{ marginBottom: 32 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
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
              {
                width: "100%",
                height: 120,
                borderRadius: 16,
                padding: 16,
                textAlignVertical: "top",
                fontSize: 16,
                borderWidth: 1,
              },
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
        style={[
          {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 16,
            paddingBottom: 32,
            borderTopWidth: 1,
          },
          { borderTopColor: theme.outlineVariant + "33" },
        ]}
      >
        <View style={{ flexDirection: "row", gap: 12 }}>
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
