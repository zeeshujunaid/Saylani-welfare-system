import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
export default function Login() {
  const router = useRouter();
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  
  
    const handellogin = () => {
      if (!cnic || !phone) {
        setError(true);
      } else {
        setError(false);
        router.push('/auth/Verification');
      }
      setCnic("");
      setPhone("");
      setError(false);
    }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/saylanilogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.header}>
            <Text style={styles.title}>Login to your Account</Text>
            <Text style={styles.subtitle}>
              Log in to continue your application and stay updated.
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>CNIC Number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                value={cnic}
                onChangeText={(text) => setCnic(text)}
                placeholder="422101-1234567-1"
                placeholderTextColor="#909090"
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>

            <Text style={styles.label}>Phone Number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="0300-1234567"
                placeholderTextColor="#909090"
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>

            {error && (
              <View
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: "#FEF2F2",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#EF4444" }}>
                  plz fill all required fields
                </Text>
              </View>
            )}

            <TouchableOpacity onPress={handellogin}>
              <View style={styles.button}>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.bottomText}>
                Don't have an account?{" "}
                <Text
                  style={styles.signupText}
                  onPress={() => router.push("/(tabs)/Homescreen")}
                >
                  Signup
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 55,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0071BA",
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    marginTop: 6,
    textAlign: "center",
    width: "90%",
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    fontWeight: "600",
    color: "#0071BA",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#00000034",
    borderRadius: 10,
    marginBottom: 18,
    backgroundColor: "#ffffffad",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#89C441",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    marginLeft: 10,
  },
  bottomText: {
    textAlign: "center",
    marginTop: 20,
    color: "#000000b3",
  },
  signupText: {
    color: "#0071BA",
    fontWeight: "600",
  },
});
