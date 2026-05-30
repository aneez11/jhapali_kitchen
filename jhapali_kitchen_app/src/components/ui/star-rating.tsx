import { View, Pressable, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { BorderRadius, Spacing } from '@/constants/theme';

export type StarRatingProps = {
  label: string;
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
};

export function StarRating({ label, value, onChange, readonly }: StarRatingProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant }}>
        {label}
      </ThemedText>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable
            key={star}
            onPress={() => onChange?.(star)}
            disabled={readonly}
            style={({ pressed }) => [
              styles.starButton,
              { opacity: pressed ? 0.7 : 1 },
            ]}
          >
            <SymbolView
              name={star <= value ? 'star.fill' : 'star'}
              size={32}
              tintColor={star <= value ? theme.secondary : theme.outlineVariant}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
  },
  stars: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  starButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.sm,
  },
});
