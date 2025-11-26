import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* Left Logo */}
      <Image
        source={require("../../assets/images/saylanilogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Right Notification Button */}
      <View style={styles.notificationBox}>
        <Ionicons name="notifications-outline" size={26} color="#00000070" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  logo: {
    width: 190,
    height: 190,
  },

  notificationBox: {
    width: 40,
    height: 40,
    backgroundColor: "#fbfafae8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
