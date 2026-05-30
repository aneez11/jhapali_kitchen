import React from "react";
import { ScrollView, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import { SymbolView } from "expo-symbols";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { CalendarStrip, CalendarDay } from "@/components/meal/calendar-strip";
import { MealCard } from "@/components/meal/meal-card";
import { useTheme } from "@/hooks/use-theme";

import _styles from "./styles.module.scss";
const styles = _styles as any;

const MOCK_DAYS: CalendarDay[] = [
  { dayName: "MON", dayNumber: 23, hasMeal: true },
  { dayName: "TUE", dayNumber: 24 },
  { dayName: "WED", dayNumber: 25, isActive: true },
  { dayName: "THU", dayNumber: 26, isCustom: true },
  { dayName: "FRI", dayNumber: 27 },
  { dayName: "SAT", dayNumber: 28, isDisabled: true },
  { dayName: "SUN", dayNumber: 29, isDisabled: true },
];

export default function MealDashboard() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Top App Bar */}
      <ThemedView
        style={[styles.header, { borderBottomColor: theme.outlineVariant }]}
      >
        <SafeAreaView edges={["top"]} style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View
              style={[styles.avatar, { borderColor: theme.primary + "33" }]}
            >
              <ExpoImage
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg",
                }}
                style={styles.avatarImage}
              />
            </View>
            <View>
              <ThemedText
                type="headlineMd"
                style={[styles.greeting, { color: theme.primary }]}
              >
                Hi, Alex!
              </ThemedText>
              <View
                style={[
                  styles.badge,
                  { backgroundColor: theme.primary + "1A" },
                ]}
              >
                <ThemedText
                  type="labelCaps"
                  style={[styles.badgeText, { color: theme.primary }]}
                >
                  Monthly Plan Active
                </ThemedText>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.iconButton}
            onPress={() => router.push("/notifications")}
          >
            <SymbolView
              name="bell.fill"
              size={22}
              tintColor={theme.onSurfaceVariant}
            />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Horizontal Calendar Strip */}
        <View style={styles.sectionSpacing}>
          <View style={styles.sectionHeader}>
            <ThemedText type="headlineMd" style={styles.sectionHeaderTitle}>
              Your Schedule
            </ThemedText>
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
              October 2023
            </ThemedText>
          </View>
          <CalendarStrip days={MOCK_DAYS} />
        </View>

        {/* Meal Slots */}
        <View style={styles.sectionSpacing}>
          <ThemedText type="headlineMd" style={styles.sectionTitle}>
            Today's Meals
          </ThemedText>

          <MealCard
            title="Grilled Salmon & Quinoa Bowl"
            type="Lunch"
            time="12:30 PM"
            calories="650 kcal"
            tags={["High Protein"]}
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDwC9Fs6OJ4cYlY66xWO4D8TzcwkUSv61uPob7pCfAyIEL0kgwUj9R6MwF3N5ASF_qU25PbeEHTQGhZDXXI-4LawP0vd-uQq1Q3fx1CjNgOcGxHH0LgeiiEQJPZfO80eipoDqc1BJP0aSFtWvdQJleWUVtjaFO6gXVijfYmdz1zAGOunxp3GjwBZ2pxXyj1O9pP3njnNmBmieKfiRFrBJ-y_LXaOh_973GT_U9_7SvidNka8YWyOgi6nWQBCnNF-scekgvzQNb1MX8"
            onSwapPress={() => console.log("Swap meal")}
            onSkipPress={() => console.log("Skip meal")}
          />

          <MealCard
            title="Custom: Vegetarian Stir-Fry"
            type="Dinner"
            time="7:00 PM"
            calories="420 kcal"
            tags={["Vegan"]}
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDdquMHeGWYUN78XUvekcoe20-nuUT2mw92lkWq2PZhBhHGaeZYmrwAPshSV3w2NZLWF5e1CDwmgwcHdnJyf_FpBj-irhZ-GRWImDrdwqOAyohQIGVRwcK394JSNZeNduv1oDKAP8RzVu1KuiNmLkUBTOYxDmSb1fjwhKFeiKG64sbMwIUl5sZTDeQnvDY26juQg8LmmjuPo0zy7DuOiC8TvBRnjl24r8ytK1cGXz6NIf8aDRCc0LNh0vqLrPCEHmSzenIIl7KDAuM"
            isOverridden
            overrideNote="Modified for extra tofu and no broccoli."
            onEditPress={() => console.log("Edit meal")}
          />
        </View>

        {/* Bento Grid - Hydration & Streak */}
        <View style={styles.bentoGrid}>
          <Pressable
            style={[
              styles.bentoCard,
              {
                backgroundColor: theme.tertiaryContainer + "20",
                borderColor: theme.tertiary + "1A",
              },
            ]}
            onPress={() => console.log("Hydration goal pressed")}
          >
            <SymbolView name="drop.fill" size={28} tintColor={theme.tertiary} />
            <View style={styles.bentoCardText}>
              <ThemedText
                style={[
                  styles.bentoTitle,
                  { color: theme.onTertiaryContainer },
                ]}
              >
                Hydration Goal
              </ThemedText>
              <ThemedText
                type="bodySm"
                style={{ color: theme.onTertiaryContainer + "CC" }}
              >
                1.5L / 2.5L tracked
              </ThemedText>
            </View>
          </Pressable>

          <Pressable
            style={[
              styles.bentoCard,
              {
                backgroundColor: theme.secondaryContainer + "10",
                borderColor: theme.secondary + "1A",
              },
            ]}
            onPress={() => console.log("Weekly streak pressed")}
          >
            <SymbolView
              name="star.fill"
              size={28}
              tintColor={theme.secondary}
            />
            <View style={styles.bentoCardText}>
              <ThemedText
                style={[
                  styles.bentoTitle,
                  { color: theme.onSecondaryContainer },
                ]}
              >
                Weekly Streak
              </ThemedText>
              <ThemedText
                type="bodySm"
                style={{ color: theme.onSecondaryContainer + "CC" }}
              >
                4 days consistent!
              </ThemedText>
            </View>
          </Pressable>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View
        style={[
          styles.bottomNav,
          {
            borderTopColor: theme.outlineVariant,
            backgroundColor: theme.surface + "E6",
          },
        ]}
      >
        <SafeAreaView edges={["bottom"]} style={styles.bottomNavContent}>
          <Pressable style={styles.navItem} onPress={() => router.push("/")}>
            <SymbolView name="house.fill" size={24} tintColor={theme.primary} />
            <ThemedText
              type="labelCaps"
              style={[styles.navLabel, { color: theme.primary }]}
            >
              Home
            </ThemedText>
            <View
              style={[styles.navActiveDot, { backgroundColor: theme.primary }]}
            />
          </Pressable>

          <Pressable
            style={styles.navItem}
            onPress={() => router.push("/calendar")}
          >
            <SymbolView
              name="calendar"
              size={24}
              tintColor={theme.onSurfaceVariant}
            />
            <ThemedText
              type="labelCaps"
              style={[styles.navLabel, { color: theme.onSurfaceVariant }]}
            >
              Calendar
            </ThemedText>
          </Pressable>

          <Pressable style={styles.navItem} onPress={() => router.push("/qr")}>
            <SymbolView
              name="qrcode"
              size={24}
              tintColor={theme.onSurfaceVariant}
            />
            <ThemedText
              type="labelCaps"
              style={[styles.navLabel, { color: theme.onSurfaceVariant }]}
            >
              QR ID
            </ThemedText>
          </Pressable>

          <Pressable
            style={styles.navItem}
            onPress={() => router.push("/profile")}
          >
            <SymbolView
              name="person"
              size={24}
              tintColor={theme.onSurfaceVariant}
            />
            <ThemedText
              type="labelCaps"
              style={[styles.navLabel, { color: theme.onSurfaceVariant }]}
            >
              Profile
            </ThemedText>
          </Pressable>
        </SafeAreaView>
      </View>
    </ThemedView>
  );
}
