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
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [rephone, setRephone] = useState("");
  const [error, setError] = useState(false);

  const handelSignup = () => {
    if (!cnic || cnic.length !== 13 || !/^[0-9]+$/.test(cnic)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid 13-digit CNIC number",
      });
      setCnic("");
      setError(true);
      return;
    }

    if (!phone || phone.length !== 11 || !/^[0-9]+$/.test(phone)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid 11-digit phone number",
      });
      setPhone("");
      setError(true);
      return;
    }

    if (!rephone || rephone !== phone) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Phone numbers do not match",
      });
      setRephone("");
      setError(true);
      return;
    }

    if (!checked) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please accept the terms and conditions",
      });
      setError(true);
      return;
    }

    router.replace("/auth/Registrationform");

    setCnic("");
    setPhone("");
    setRephone("");
    setChecked(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/saylanilogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Create your profile to start your aid application and track its
              status.
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

            <Text style={styles.label}>Re-Enter Phone Number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                value={rephone}
                onChangeText={(text) => setRephone(text)}
                placeholder="0300-1234567"
                placeholderTextColor="#909090"
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>

            <View>
              <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: checked ? "#0071BA" : "transparent",
                    width: 24,
                    height: 24,
                    borderWidth: 2,
                    borderColor: "#0071BA",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  {checked && (
                    <Ionicons name="checkmark" size={18} color="#fff" />
                  )}
                </View>
                <Text style={{ color: "#00000077", fontSize: 12 }}>
                  I agree to the Terms and Conditions and Privacy Policy
                </Text>
              </TouchableOpacity>
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

            <TouchableOpacity onPress={handelSignup}>
              <View style={styles.button}>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.bottomText}>
                Already have an account?{" "}
                <Text
                  style={styles.signupText}
                  onPress={() => router.push("/auth/Verification")}
                >
                  Log in
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
    backgroundColor: "#fff",
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
