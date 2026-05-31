import React, { useState } from 'react';
import { ScrollView, View, TextInput, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/star-rating';
import { useTheme } from '@/hooks/use-theme';

export default function MealFeedback() {
  const theme = useTheme();
  const router = useRouter();
  const [quality, setQuality] = useState(0);
  const [taste, setTaste] = useState(0);
  const [portion, setPortion] = useState(0);
  const [comment, setComment] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <ThemedView style={[{ flex: 1 }, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', zIndex: 100 }]}>
        <View style={[{ alignItems: 'center', gap: 16, padding: 32, borderRadius: 24, maxWidth: 300 }, { backgroundColor: theme.surfaceContainerLowest }]}>
          <View style={[{ width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }, { backgroundColor: theme.primaryContainer + '33' }]}>
            <SymbolView name="hand.thumbsup.fill" size={40} tintColor={theme.primary} />
          </View>
          <ThemedText type="headlineMd" style={{ textAlign: 'center' }}>
            Thanks for the love!
          </ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, textAlign: 'center' }}>
            Your feedback helps us serve you better meals.
          </ThemedText>
          <Button
            title="Back to Home"
            type="primary"
            size="md"
            onPress={() => router.back()}
            style={{ marginTop: 8 }}
          />
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={[{ paddingLeft: 16, paddingRight: 16, borderBottomWidth: 1, zIndex: 50, backgroundColor: theme.surface + 'E6' }, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Pressable style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => router.back()}>
              <SymbolView name="chevron.left" size={24} tintColor={theme.onSurface} />
            </Pressable>
            <ThemedText type="headlineMd">Meal Feedback</ThemedText>
          </View>
          <View style={[{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }, { borderWidth: 2, borderColor: theme.primary + '33', borderRadius: 20, overflow: 'hidden' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg' }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 24, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Feedback Header */}
        <View style={[{ paddingLeft: 16, paddingRight: 16 }, { alignItems: 'center', marginBottom: 24 }]}>
          <View style={[{ width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }, { backgroundColor: theme.primaryContainer + '33' }]}>
            <SymbolView name="fork.knife" size={32} tintColor={theme.primary} />
          </View>
          <ThemedText type="headlineMd" style={{ textAlign: 'center' }}>
            How was your lunch?
          </ThemedText>
          <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, textAlign: 'center', marginTop: 4 }}>
            Your honest feedback helps us improve
          </ThemedText>
        </View>

        {/* Meal Preview */}
        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
          <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 16, padding: 16, borderRadius: 16, borderWidth: 1, marginBottom: 24 }, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwC9Fs6OJ4cYlY66xWO4D8TzcwkUSv61uPob7pCfAyIEL0kgwUj9R6MwF3N5ASF_qU25PbeEHTQGhZDXXI-4LawP0vd-uQq1Q3fx1CjNgOcGxHH0LgeiiEQJPZfO80eipoDqc1BJP0aSFtWvdQJleWUVtjaFO6gXVijfYmdz1zAGOunxp3GjwBZ2pxXyj1O9pP3njnNmBmieKfiRFrBJ-y_LXaOh_973GT_U9_7SvidNka8YWyOgi6nWQBCnNF-scekgvzQNb1MX8' }}
              style={{ width: 64, height: 64, borderRadius: 12 }}
            />
            <View style={{ flex: 1 }}>
              <ThemedText type="bodyLg" style={{ fontWeight: '600' }}>
                Grilled Salmon & Quinoa Bowl
              </ThemedText>
              <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginTop: 2 }}>
                Picked up at 12:45 PM
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Star Ratings */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={{ gap: 24 }}>
              <StarRating
                label="Overall Quality"
                value={quality}
                onChange={setQuality}
              />
              <StarRating
                label="Taste & Flavor"
                value={taste}
                onChange={setTaste}
              />
              <StarRating
                label="Portion Size"
                value={portion}
                onChange={setPortion}
              />
            </View>
          </View>
        </View>

        {/* Comments */}
        <View style={{ marginBottom: 32 }}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginBottom: 8 }}>
              Additional Comments
            </ThemedText>
            <TextInput
              style={[{ minHeight: 100, borderWidth: 1, borderRadius: 12, padding: 12, fontFamily: 'Inter', fontSize: 16, lineHeight: 24 }, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant, color: theme.onSurface }]}
              placeholder="Tell us more about your meal experience..."
              placeholderTextColor={theme.outlineVariant}
              multiline
              textAlignVertical="top"
              value={comment}
              onChangeText={setComment}
            />
          </View>
        </View>

        {/* Submit */}
        <View style={[{ paddingLeft: 16, paddingRight: 16 }, { paddingTop: 16 }]}>
          <Button
            title="Submit Feedback"
            type="primary"
            size="lg"
            onPress={handleSubmit}
            icon={<SymbolView name="paperplane.fill" size={18} tintColor={theme.onPrimary} />}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
