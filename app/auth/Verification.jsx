import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";

export default function Verification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs[index + 1].current.focus();
    }
    if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 60,
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <Image
              source={require("../../assets/images/saylanilogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <View style={styles.header}>
              <Text style={styles.title}>Enter OTP Code</Text>
              <Text style={styles.subtitle}>
                A four-digit code has been sent to your Phone Number
              </Text>
            </View>

            <View style={styles.form}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={styles.input}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={value}
                  onChangeText={(text) => handleChange(text, index)}
                />
              ))}
            </View>

            <TouchableOpacity>
              <Text style={styles.resendText}>
                Didn't get the code?{" "}
                <Text style={{ color: "#0071BA" }}>Resend Code</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: 50,
    height: "100%",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    minHeight: "100%",
    gap: 5,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    alignSelf: "center",
    marginBottom: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00000034",
    borderRadius: 10,
    width: 60,
    height: 60,
    textAlign: "center",
    fontSize: 30,
    color: "#0000007e",
    backgroundColor: "#ffffffad",
  },
  resendText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    backgroundColor: "#89C441",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
