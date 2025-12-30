import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const IMAGES = [
  require('@/assets/images/Kashmiri_White_Honey.png'),
  require('@/assets/images/Cow_ghee.png'),
  require('@/assets/images/Jamun_Honey.png'),
];

export default function HomeProductSlider() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={220}
        autoPlay
        autoPlayInterval={3000}
        data={IMAGES}
        scrollAnimationDuration={1200}
        renderItem={({ item, animationValue }) => {
          return <ParallaxItem item={item} animationValue={animationValue} />;
        }}
      />
    </View>
  );
}

function ParallaxItem({ item, animationValue }: any) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animationValue.value, [-1, 0, 1], [0.8, 1, 0.8]);
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [0.4, 1, 0.4]);

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <View style={styles.slide}>
      {/* BLUR BACKGROUND */}
      <Image source={item} style={styles.blurImage} blurRadius={20} />

      {/* MAIN IMAGE */}
      <Animated.Image
        source={item}
        style={[styles.mainImage, animatedStyle]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurImage: {
    position: 'absolute',
    width: 180,
    height: 180,
    opacity: 0.6,
  },
  mainImage: {
    width: 220,
    height: 220,
  },
});
