import "../global.css";

import { Stack, usePathname } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { BottomNav } from "@/components/bottom-nav";
import { ThemePreferenceProvider } from "@/components/theme-preference-provider";
import { useTheme } from "@/hooks/use-theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

const TAB_ROUTES = ["/", "/meal-calendar", "/qr-pickup-pass", "/user-profile"];

function RootLayoutContent() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const pathname = usePathname();
  const showBottomNav = TAB_ROUTES.includes(pathname);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <AnimatedSplashOverlay />
      <View style={{ flex: 1, backgroundColor: theme.background }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.background },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="meal-calendar" />
          <Stack.Screen name="qr-pickup-pass" />
          <Stack.Screen name="user-profile" />
          <Stack.Screen
            name="bill-tracker"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="billing-admin"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="customize-meal"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="explore"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="food-menu"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="help-support"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="meal-feedback"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="notifications"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="subscription-payments"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="upgrade-plan"
            options={{ animation: "slide_from_right" }}
          />
        </Stack>
        {showBottomNav && <BottomNav />}
      </View>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemePreferenceProvider>
      <RootLayoutContent />
    </ThemePreferenceProvider>
  );
}
