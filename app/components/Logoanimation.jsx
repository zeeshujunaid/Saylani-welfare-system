import { Image, View, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
export default function Logoanimation() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: -39, 
      duration: 800, 
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, 
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/saylanigreen.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Animated.Image
        source={require("../../assets/images/saylaniblue.png")}
        style={[styles.logoBlue, { marginLeft: slideAnim }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoBlue: {
    width: 180,
    height: 180,
  },
});
