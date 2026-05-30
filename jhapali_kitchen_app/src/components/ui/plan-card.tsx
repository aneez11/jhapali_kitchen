import { View, Pressable, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type PlanFeature = {
  label: string;
  included: boolean;
};

export type PlanCardProps = {
  name: string;
  price: string;
  features: PlanFeature[];
  isPopular?: boolean;
  isCurrent?: boolean;
  isDisabled?: boolean;
  onAction?: () => void;
  actionLabel: string;
};

export function PlanCard({
  name,
  price,
  features,
  isPopular,
  isCurrent,
  isDisabled,
  onAction,
  actionLabel,
}: PlanCardProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surfaceContainerLowest,
          borderColor: isPopular ? theme.primary : theme.outlineVariant,
          borderWidth: isPopular ? 2 : 1,
        },
      ]}
    >
      {isPopular && (
        <View style={[styles.popularBadge, { backgroundColor: theme.primary }]}>
          <ThemedText type="labelCaps" style={{ color: theme.onPrimary, fontSize: 10 }}>
            MOST POPULAR
          </ThemedText>
        </View>
      )}

      <ThemedText type="headlineMd">{name}</ThemedText>

      <View style={styles.priceRow}>
        <ThemedText type="headlineLg" style={{ fontSize: 28 }}>{price}</ThemedText>
        <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>/meal</ThemedText>
      </View>

      <View style={styles.features}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <SymbolView
              name={feature.included ? 'checkmark.circle.fill' : 'xmark.circle'}
              size={20}
              tintColor={feature.included ? theme.primary : theme.outlineVariant}
            />
            <ThemedText
              type="bodySm"
              style={{
                color: feature.included ? theme.onSurface : theme.outlineVariant,
                flex: 1,
              }}
            >
              {feature.label}
            </ThemedText>
          </View>
        ))}
      </View>

      {isCurrent ? (
        <View style={[styles.currentBadge, { backgroundColor: theme.primaryContainer + '33' }]}>
          <ThemedText type="labelCaps" style={{ color: theme.primary }}>
            CURRENT ACTIVE PLAN
          </ThemedText>
        </View>
      ) : (
        <Button
          title={actionLabel}
          type={isPopular ? 'primary' : 'outline'}
          size="md"
          onPress={onAction}
          disabled={isDisabled}
          style={isDisabled ? { opacity: 0.5 } : undefined}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: Spacing.md,
    position: 'relative',
    overflow: 'hidden',
  },
  popularBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  features: {
    gap: Spacing.sm,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  currentBadge: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
});
