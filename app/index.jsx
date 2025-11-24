import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/saylanilogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.welcomeText}>WELCOME TO</Text>

      <View style={styles.rowCenter}>
        <Text style={styles.appName}>SAYLANI </Text>
        <Text style={styles.greenText}>WELFARE</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        This app makes your application process easier.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 240,
    height: 140,
    marginBottom: 35,
  },
  welcomeText: {
    fontSize: 26,
    color: "#333",
    fontWeight: "700",
    marginBottom: 8,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 45,
  },
  appName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0071BA",
  },
  greenText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#8BC541",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 25,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 15,
  },
});
