import React from "react";
import { View, Pressable } from "react-native";
import { Image as ExpoImage } from "expo-image";
import { SymbolView } from "expo-symbols";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

interface MealCardProps {
  title: string;
  type: string;
  time: string;
  calories?: string;
  tags?: string[];
  imageUrl: string;
  isOverridden?: boolean;
  overrideNote?: string;
  onSwapPress?: () => void;
  onSkipPress?: () => void;
  onEditPress?: () => void;
}

export function MealCard({
  title,
  type,
  time,
  calories,
  tags = [],
  imageUrl,
  isOverridden,
  overrideNote,
  onSwapPress,
  onSkipPress,
  onEditPress,
}: MealCardProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 16,
          marginLeft: 16,
          marginRight: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
          borderColor: theme.outlineVariant,
          backgroundColor: theme.surfaceContainerLowest,
        },
      ]}
    >
      {/* Image Section */}
      <View
        style={{
          height: 176,
          width: "100%",
          position: "relative",
        }}
      >
        <ExpoImage
          source={{ uri: imageUrl }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
        />
        <View
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            right: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View
            style={[
              {
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 4,
                paddingBottom: 4,
                borderRadius: 9999,
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            ]}
          >
            <ThemedText
              type="labelCaps"
              style={[
                {
                  fontSize: 10,
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: theme.primary,
                },
              ]}
            >
              {type} • {time}
            </ThemedText>
          </View>
          {isOverridden && (
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 4,
                  paddingBottom: 4,
                  borderRadius: 9999,
                  backgroundColor: theme.secondaryContainer + "E6",
                },
              ]}
            >
              <SymbolView
                name="square.and.pencil"
                size={12}
                tintColor={theme.onSecondaryContainer}
              />
              <ThemedText
                type="labelCaps"
                style={[
                  {
                    fontSize: 10,
                    fontWeight: "700",
                    color: theme.onSecondaryContainer,
                  },
                ]}
              >
                Custom Overridden
              </ThemedText>
            </View>
          )}
        </View>
      </View>

      {/* Content Section */}
      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ flex: 1 }}>
            <ThemedText
              type="headlineMd"
              style={{
                fontSize: 18,
                fontWeight: "600",
                lineHeight: 24,
                marginBottom: 8,
              }}
            >
              {title}
            </ThemedText>
            {tags.length > 0 && (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 4,
                }}
              >
                {calories && (
                  <View
                    style={[
                      {
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderRadius: 9999,
                        backgroundColor: theme.surfaceContainerHigh,
                      },
                    ]}
                  >
                    <ThemedText
                      type="labelCaps"
                      style={[
                        {
                          fontSize: 10,
                          fontWeight: "600",
                          color: theme.onSurfaceVariant,
                        },
                      ]}
                    >
                      {calories}
                    </ThemedText>
                  </View>
                )}
                {tags.map((tag, index) => (
                  <View
                    key={index}
                    style={[
                      {
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderRadius: 9999,
                        backgroundColor: theme.surfaceContainerHigh,
                      },
                    ]}
                  >
                    <ThemedText
                      type="labelCaps"
                      style={[
                        {
                          fontSize: 10,
                          fontWeight: "600",
                          color: theme.onSurfaceVariant,
                        },
                      ]}
                    >
                      {tag}
                    </ThemedText>
                  </View>
                ))}
              </View>
            )}
            {overrideNote && (
              <ThemedText
                type="bodySm"
                style={[
                  {
                    marginTop: 8,
                    fontSize: 12,
                    lineHeight: 16,
                    color: theme.onSurfaceVariant,
                  },
                ]}
              >
                {overrideNote}
              </ThemedText>
            )}
          </View>
          {onEditPress && (
            <Pressable
              style={[
                {
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.surfaceContainerHigh,
                },
              ]}
              onPress={onEditPress}
            >
              <SymbolView name="pencil" size={20} tintColor={theme.primary} />
            </Pressable>
          )}
        </View>

        {/* Action Buttons (only for non-overridden cards) */}
        {!isOverridden && (
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginTop: 16,
            }}
          >
            <Pressable
              style={[
                {
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 48,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: theme.primary + "33",
                },
              ]}
              onPress={onSwapPress}
            >
              <SymbolView
                name="arrow.triangle.2.circlepath"
                size={18}
                tintColor={theme.primary}
              />
              <ThemedText
                type="labelCaps"
                style={[
                  {
                    fontSize: 12,
                    fontWeight: "700",
                    color: theme.primary,
                  },
                ]}
              >
                Swap Meal
              </ThemedText>
            </Pressable>
            <Pressable
              style={[
                {
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 48,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: theme.outline + "33",
                },
              ]}
              onPress={onSkipPress}
            >
              <SymbolView
                name="calendar.badge.minus"
                size={18}
                tintColor={theme.outline}
              />
              <ThemedText
                type="labelCaps"
                style={[
                  {
                    fontSize: 12,
                    fontWeight: "700",
                    color: theme.outline,
                  },
                ]}
              >
                Skip Day
              </ThemedText>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
