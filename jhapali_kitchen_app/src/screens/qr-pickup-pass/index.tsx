import React, { useState, useEffect } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

export default function QRPickupPass() {
  const theme = useTheme();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(299); // 4:59

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      {/* Top App Bar */}
      <ThemedView style={[{ paddingLeft: 16, paddingRight: 16, borderBottomWidth: 1 }, { borderBottomColor: theme.outlineVariant }]}>
        <SafeAreaView edges={['top']} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={[{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: theme.outlineVariant + '33' }, { backgroundColor: theme.primaryContainer + '33' }]}>
              <ExpoImage
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJkV2No07pO3fvJYryeBnXdA7Dp9wg6PuGdsDSE2nJx4H7uakJLreSi-3-ZM2tCSTP5pjmEF27Voh7UYWr0tpyvvJNDqAvQE81NuOD7Ouhq1AXkr7DuJOclkaItnCBcAjghqX_ieNoiQsWKTaW9XvdWZ6ZxnqiJ7Bl5zAxkQQNJga2ba0u7TPFj6ziaviZEO7z9Q1s7Ni_cVFqsy4eKT1HoyH6mhlonknCsRCiM9570AQFOaRJETQp9cU-LAUZSO9ABkoHfvxiMY8' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <ThemedText type="headlineMd" style={{ color: theme.primary }}>Good Morning, Alex</ThemedText>
          </View>
          <Pressable style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <SymbolView name="bell" size={24} tintColor={theme.primary} />
          </Pressable>
        </SafeAreaView>
      </ThemedView>

      <ScrollView contentContainerStyle={{ paddingTop: 32, paddingLeft: 16, paddingRight: 16, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', maxWidth: 400 }}>
          <Card variant="outline" style={{ backgroundColor: theme.surfaceContainerLowest, borderRadius: 24, overflow: 'visible', position: 'relative' }}>
            {/* Ticket Header */}
            <View style={[{ padding: 24, alignItems: 'center', borderBottomWidth: 1 }, { borderBottomColor: theme.outlineVariant, borderStyle: 'dashed' }]}>
              <ThemedText type="headlineMd">Alex Mercer</ThemedText>
              <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, marginTop: 4 }}>
                Emp ID: #4092 • Central Canteen
              </ThemedText>
            </View>

            {/* Ticket QR Section */}
            <View style={{ padding: 32, alignItems: 'center' }}>
              <View style={[{ padding: 16, borderRadius: 16, borderWidth: 1, backgroundColor: theme.surfaceContainerLowest, position: 'relative' }, { borderColor: theme.outlineVariant + '33' }]}>
                {/* Corner Accents */}
                <View style={[{ position: 'absolute', width: 24, height: 24 }, { top: -2, left: -2, borderTopWidth: 4, borderLeftWidth: 4, borderColor: theme.primary, borderTopLeftRadius: 8 }]} />
                <View style={[{ position: 'absolute', width: 24, height: 24 }, { top: -2, right: -2, borderTopWidth: 4, borderRightWidth: 4, borderColor: theme.primary, borderTopRightRadius: 8 }]} />
                <View style={[{ position: 'absolute', width: 24, height: 24 }, { bottom: -2, left: -2, borderBottomWidth: 4, borderLeftWidth: 4, borderColor: theme.primary, borderBottomLeftRadius: 8 }]} />
                <View style={[{ position: 'absolute', width: 24, height: 24 }, { bottom: -2, right: -2, borderBottomWidth: 4, borderRightWidth: 4, borderColor: theme.primary, borderBottomRightRadius: 8 }]} />
                
                <View style={[{ width: 192, height: 192, borderRadius: 12, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }, { backgroundColor: theme.surfaceContainerLow }]}>
                   <ExpoImage
                     source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfQUM2mrZikzO0_Wg-HAtdf172uvLkuojjf1YRoPZ61kvW3WA6Hv7Eok41-hX-Z3g5UCwIDu8vs8z4Tf57L0jxkb3HHHrltnMi6jVhJiPpjKUNnOUb61rWjQRXmwrutJH2vNlmztQdiaqfZKS9mpUnuGDcH4QB7GUjoHoYQqcU7r0l07GzOjVBE2WaFkwUWJeQewLDCa0rsKV6pPC40jI39gSP_DyaX8D_vzLpK9dBht74QbK5IgY_2R6mHAO2_HAH58DjONfQ3QM' }}
                     style={{ width: 160, height: 160, opacity: 0.9 }}
                   />
                </View>
              </View>

              <View style={{ marginTop: 32, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <SymbolView name="timer" size={20} tintColor={theme.primary} />
                  <ThemedText type="headlineMd" style={{ color: theme.primary }}>{formatTime(timeLeft)}</ThemedText>
                </View>
                <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant, letterSpacing: 2 }}>
                  Valid for Pickup
                </ThemedText>
              </View>
            </View>

            {/* Ticket Footer (Meal Details) */}
            <View style={[{ padding: 24, flexDirection: 'row', justifyContent: 'space-between' }, { backgroundColor: theme.surfaceContainerLow }]}>
              <View style={{ flex: 1, marginRight: 12 }}>
                <View>
                  <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant }}>CURRENT SLOT</ThemedText>
                  <ThemedText type="headlineMd" style={{ color: theme.primary }}>Lunch</ThemedText>
                </View>
                <View style={{ marginTop: 16 }}>
                  <ThemedText type="labelCaps" style={{ color: theme.onSurfaceVariant }}>ITEM</ThemedText>
                  <ThemedText type="bodyLg" style={{ fontWeight: '700' }}>Grilled Salmon & Quinoa Bowl</ThemedText>
                  <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
                    <View style={[{ paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, borderRadius: 9999 }, { backgroundColor: theme.surfaceContainerHigh }]}>
                       <ThemedText type="labelCaps" style={{ fontSize: 10 }}>Gluten-Free</ThemedText>
                    </View>
                    <View style={[{ paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, borderRadius: 9999 }, { backgroundColor: theme.surfaceContainerHigh }]}>
                       <ThemedText type="labelCaps" style={{ fontSize: 10 }}>High-Protein</ThemedText>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ width: 80, height: 80, borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: theme.surfaceContainerLowest, shadowColor: theme.onSurface, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 }}>
                <ExpoImage
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzUtjzmoh60xln7uC9kImZdnT0AfVuM98EgaSEkqEa9zxjdFXLDz_a6pemougkXGLRsIdOeZ1UnbmC0wjYe71602yfqjj3ChTyP6lUNcOJD53vUujptaTBIU8OY7SxUh2ymqqtcdWgwoxlFPvZoHFBGUoBxJA1yvMdUtzUWvSedLWGdEHW9-su_LtXrY0BLOsiGlpYZnz6zSPXKt_SRijGB7NoNK8-r-AZp9UaMaHjkiL42mmsnK4WpFLG48anGUsCv-eE1ySp1fQ' }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            </View>

            {/* Ticket Notch Simulation */}
            <View style={[{ position: 'absolute', top: '70%', width: 20, height: 20, borderRadius: 10, marginTop: -10, zIndex: 1 }, { left: -10, backgroundColor: theme.background }]} />
            <View style={[{ position: 'absolute', top: '70%', width: 20, height: 20, borderRadius: 10, marginTop: -10, zIndex: 1 }, { right: -10, backgroundColor: theme.background }]} />
          </Card>
        </View>

        <View style={{ width: '100%', maxWidth: 400, marginTop: 32 }}>
          <Button
            title="Share Pass"
            icon={<SymbolView name="square.and.arrow.up" size={20} tintColor={theme.onPrimary} />}
            style={{ marginBottom: 12 }}
          />
          <Button
            title="Need Help?"
            type="outline"
            icon={<SymbolView name="questionmark.circle" size={20} tintColor={theme.primary} />}
            style={{ backgroundColor: theme.primary + '1A', borderWidth: 0 }}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ThemedView>
  );
}
