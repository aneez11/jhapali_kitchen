import { View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePathname, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

interface Tab {
  name: string;
  label: string;
  icon: string;
  route: string;
}

const TABS: Tab[] = [
  { name: "index", label: "Home", icon: "home", route: "/" },
  { name: "meal-calendar", label: "Calendar", icon: "calendar-month", route: "/meal-calendar" },
  { name: "qr-pickup-pass", label: "QR ID", icon: "qrcode", route: "/qr-pickup-pass" },
  { name: "user-profile", label: "Profile", icon: "account", route: "/user-profile" },
];

export function BottomNav() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (route: string) => {
    if (route === "/") return pathname === "/";
    return pathname.startsWith(route);
  };

  return (
    <View
      className="rounded-t-xl"
      style={{
        borderTopWidth: 1,
        borderTopColor: theme.outlineVariant,
        backgroundColor: theme.surface + "E6",
      }}
    >
      <SafeAreaView
        edges={["bottom"]}
        className="flex-row justify-around items-center px-4"
        style={{ height: 64 }}
      >
        {TABS.map((tab) => {
          const active = isActive(tab.route);
          return (
            <Pressable
              key={tab.name}
              className="flex-1 items-center justify-center"
              style={{ gap: 4 }}
              onPress={() => router.push(tab.route as any)}
            >
              <MaterialCommunityIcons
                name={tab.icon as any}
                size={24}
                color={active ? theme.primary : theme.onSurfaceVariant}
              />
              <ThemedText
                type="labelCaps"
                style={{ color: active ? theme.primary : theme.onSurfaceVariant, fontWeight: active ? "700" : "400" }}
              >
                {tab.label}
              </ThemedText>
              {active && (
                <View className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.primary }} />
              )}
            </Pressable>
          );
        })}
      </SafeAreaView>
    </View>
  );
}
