import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
export default function Submitscreen() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/saylanilogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.header}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: "orange",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Ionicons name="time-outline" size={40} color="orange" />
          </View>
        <Text style={styles.title}>Registration Submitted!</Text>
        <Text style={styles.subtitle}>Your application is under review</Text>
      </View>

      <View style={styles.statusBox}>
        <Text style={{ color: "#000", fontWeight: "400", fontSize: 12 }}>
          Current Status
        </Text>
        <Text style={{ color: "#000", fontWeight: "800", fontSize: 16 }}>
          {""}
          <View
            style={{
              borderRadius: 60,
              height: 10,
              width: 10,
              backgroundColor: "#89C441",
            }}
          ></View>{" "}
          PENDING APPROVAL
        </Text>
        <Text style={{ color: "#000", fontWeight: "400", fontSize: 12 }}>
          You'll be notified soon
        </Text>
      </View>

      <View style={styles.infobox}>
        <Text style={styles.nextTittle}>What Happens Next?</Text>
        <View style={styles.infotextbox}>
          <View style={styles.number}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={styles.titleText}>Documents Review</Text>
            <Text style={styles.subtitleText}>
              Our team verifies your files
            </Text>
          </View>
        </View>

        <View style={styles.infotextbox}>
          <View style={styles.number}>
            <Text style={styles.numberText}>2</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={styles.titleText}>Verification Call</Text>
            <Text style={styles.subtitleText}>
              We'll contact you at the phone number you provided
            </Text>
          </View>
        </View>

        <View style={styles.infotextbox}>
          <View style={styles.number}>
            <Text style={styles.numberText}>3</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={styles.titleText}>Approval Notification</Text>
            <Text style={styles.subtitleText}>
              Once approved, you can submit requests
            </Text>
          </View>
        </View>
        <View style={styles.hintbox}>
          <AntDesign name="info-circle" size={16} color="#0070ba88" />
          <Text style={styles.hintsubtitle}>
            This usually takes 2-3 business days. Check back soon!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/auth/Login")}
        >
          <Ionicons name="chevron-back-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Back To Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 25,
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: "#0071BA",
    fontFamily: "Roboto_700Bold",
  },
  subtitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    color: "#000",
    marginTop: 10,
  },
  statusBox: {
    marginTop: 30,
    padding: 20,
    gap: 5,
    borderWidth: 1,
    borderColor: "#0071BA",
    borderRadius: 10,
    alignItems: "center",
  },
  infobox: {
    padding: 10,
    gap: 10,
  },
  infotextbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  nextTittle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0071BA",
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8, 
  },
  number: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FEF9C3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  numberText: {
    color: "#CA8A04",
    fontWeight: "bold",
  },
  textbox: {
    flexDirection: "column",
  },
  titleText: {
    fontWeight: "400",
    fontSize: 16,
  },
  subtitleText: {
    color: "gray",
    fontSize: 14,
  },
  hintbox: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  hintsubtitle: {
    fontSize: 12,
    color: "#0071BA",
    textAlign: "center",
  },
});
