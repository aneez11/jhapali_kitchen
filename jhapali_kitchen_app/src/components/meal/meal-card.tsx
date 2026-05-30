import React from "react";
import { View, Pressable } from "react-native";
import { Image as ExpoImage } from "expo-image";
import { SymbolView } from "expo-symbols";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

import _styles from "./meal-card.module.scss";
const styles = _styles as any;

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
        styles.card,
        {
          borderColor: theme.outlineVariant,
          backgroundColor: theme.surfaceContainerLowest,
        },
      ]}
    >
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <ExpoImage
          source={{ uri: imageUrl }}
          style={styles.image}
          contentFit="cover"
        />
        <View style={styles.imageOverlay}>
          <View
            style={[
              styles.typeBadge,
              { backgroundColor: "rgba(255,255,255,0.9)" },
            ]}
          >
            <ThemedText
              type="labelCaps"
              style={[styles.typeBadgeText, { color: theme.primary }]}
            >
              {type} • {time}
            </ThemedText>
          </View>
          {isOverridden && (
            <View
              style={[
                styles.overrideBadge,
                { backgroundColor: theme.secondaryContainer + "E6" },
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
                  styles.overrideBadgeText,
                  { color: theme.onSecondaryContainer },
                ]}
              >
                Custom Overridden
              </ThemedText>
            </View>
          )}
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <View style={styles.contentRow}>
          <View style={styles.contentLeft}>
            <ThemedText type="headlineMd" style={styles.title}>
              {title}
            </ThemedText>
            {tags.length > 0 && (
              <View style={styles.tagsContainer}>
                {calories && (
                  <View
                    style={[
                      styles.tag,
                      { backgroundColor: theme.surfaceContainerHigh },
                    ]}
                  >
                    <ThemedText
                      type="labelCaps"
                      style={[
                        styles.tagText,
                        { color: theme.onSurfaceVariant },
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
                      styles.tag,
                      { backgroundColor: theme.surfaceContainerHigh },
                    ]}
                  >
                    <ThemedText
                      type="labelCaps"
                      style={[
                        styles.tagText,
                        { color: theme.onSurfaceVariant },
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
                style={[styles.overrideNote, { color: theme.onSurfaceVariant }]}
              >
                {overrideNote}
              </ThemedText>
            )}
          </View>
          {onEditPress && (
            <Pressable
              style={[
                styles.editButton,
                { backgroundColor: theme.surfaceContainerHigh },
              ]}
              onPress={onEditPress}
            >
              <SymbolView name="pencil" size={20} tintColor={theme.primary} />
            </Pressable>
          )}
        </View>

        {/* Action Buttons (only for non-overridden cards) */}
        {!isOverridden && (
          <View style={styles.actionButtons}>
            <Pressable
              style={[
                styles.actionButton,
                { borderColor: theme.primary + "33" },
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
                style={[styles.actionButtonText, { color: theme.primary }]}
              >
                Swap Meal
              </ThemedText>
            </Pressable>
            <Pressable
              style={[
                styles.actionButton,
                { borderColor: theme.outline + "33" },
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
                style={[styles.actionButtonText, { color: theme.outline }]}
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
