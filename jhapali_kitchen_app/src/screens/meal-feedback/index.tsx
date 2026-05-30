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

import _styles from './styles.module.scss';
const styles = _styles as any;

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
      <ThemedView style={[styles.container, styles.successOverlay]}>
        <View style={[styles.successContent, { backgroundColor: theme.surfaceContainerLowest }]}>
          <View style={[styles.successIcon, { backgroundColor: theme.primaryContainer + '33' }]}>
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
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.header, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.iconButton} onPress={() => router.back()}>
              <SymbolView name="chevron.left" size={24} tintColor={theme.onSurface} />
            </Pressable>
            <ThemedText type="headlineMd">Meal Feedback</ThemedText>
          </View>
          <View style={[styles.iconButton, { borderWidth: 2, borderColor: theme.primary + '33', borderRadius: 20, overflow: 'hidden' }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp95JLCE2dbhqEXEQSAzwyBFJ0h0_Gb7Tf9IVLG0vW6DNhzmQX9BZJ10Jdp4Txi7YWz2jAEI2BYtYLk73tS1LMpNpR1uwGVKpurRhC9P807896x1gkfsj7o5z46Fi1XLayPYN_apR_WCw_2suld1WRnN8ugo6n5JErmPju7Nvc_-S1V2XsLe7dcJA77OE4O482NWYrmWwV3_nTX8-xOJD0x4B4RkRrQpPgtIkCl2iLkj5MmGnYj7WM2T0omSqPWV5tqIL1-2cB1Wg' }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
          </View>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Feedback Header */}
        <View style={[styles.sectionPadding, styles.feedbackHeader]}>
          <View style={[styles.feedbackIcon, { backgroundColor: theme.primaryContainer + '33' }]}>
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
        <View style={styles.sectionPadding}>
          <View style={[styles.mealPreview, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.outlineVariant }]}>
            <ExpoImage
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwC9Fs6OJ4cYlY66xWO4D8TzcwkUSv61uPob7pCfAyIEL0kgwUj9R6MwF3N5ASF_qU25PbeEHTQGhZDXXI-4LawP0vd-uQq1Q3fx1CjNgOcGxHH0LgeiiEQJPZfO80eipoDqc1BJP0aSFtWvdQJleWUVtjaFO6gXVijfYmdz1zAGOunxp3GjwBZ2pxXyj1O9pP3njnNmBmieKfiRFrBJ-y_LXaOh_973GT_U9_7SvidNka8YWyOgi6nWQBCnNF-scekgvzQNb1MX8' }}
              style={styles.mealPreviewImage}
            />
            <View style={styles.mealPreviewInfo}>
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
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <View style={styles.ratingsContainer}>
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
        <View style={styles.section}>
          <View style={styles.sectionPadding}>
            <ThemedText type="bodySm" style={{ color: theme.onSurfaceVariant, marginBottom: 8 }}>
              Additional Comments
            </ThemedText>
            <TextInput
              style={[styles.textArea, { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant, color: theme.onSurface }]}
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
        <View style={[styles.sectionPadding, styles.submitSection]}>
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
