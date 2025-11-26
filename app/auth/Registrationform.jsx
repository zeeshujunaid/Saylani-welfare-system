 import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

export default function Registrationform() {
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [step, setStep] = useState(1);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/saylanilogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.title}>
            {step === 1
              ? "Complete Registration"
              : "Upload Documents"}
          </Text>
          <Text style={styles.subtitle}>
            {step === 1
              ? "Step 1 of 2 - Personal Details"
              : "Step 2 of 2 - Upload Documents"}
          </Text>
          <ProgressBar step={step} />
        </View>

        {/* ---------------- STEP 1 FORM ---------------- */}
        {step === 1 && (
          <View style={styles.form}>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 50, width: "100%" }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.label}>
                Full Name <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                placeholder="Enter your full name"
                style={styles.input}
              />

              <Text style={styles.label}>
                CNIC <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput placeholder="42101-1234567-0" style={styles.input} />

              <Text style={styles.label}>
                Phone Number <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput placeholder="0300-1234567" style={styles.input} />

              <Text style={styles.label}>Email (Optional)</Text>
              <TextInput placeholder="your@email.com" style={styles.input} />

              <View style={styles.row}>
                <View style={[styles.rowItem, { marginRight: 10 }]}>
                  <Text style={styles.label}>Date of Birth</Text>
                  <TextInput placeholder="DD/MM/YYYY" style={styles.input} />
                </View>

                <View style={styles.rowItem}>
                  <Text style={styles.label}>
                    Gender <Text style={{ color: "red" }}>*</Text>
                  </Text>

                  <View style={styles.dropdown}>
                    <Picker
                      selectedValue={gender}
                      onValueChange={(value) => setGender(value)}
                    >
                      <Picker.Item label="Select Gender" value="" />
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                    </Picker>
                  </View>
                </View>
              </View>

              <Text style={styles.label}>Marital Status</Text>
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={maritalStatus}
                  onValueChange={(value) => setMaritalStatus(value)}
                >
                  <Picker.Item label="Select Marital Status" value="" />
                  <Picker.Item label="Single" value="single" />
                  <Picker.Item label="Married" value="married" />
                  <Picker.Item label="Divorced" value="divorced" />
                  <Picker.Item label="Widowed" value="widowed" />
                </Picker>
              </View>

              <Text style={styles.label}>
                Current Address <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                placeholder="Street, Area, City"
                style={styles.input}
              />

            
              <TouchableOpacity
                style={styles.button}
                onPress={() => setStep(2)}
              >
                <Text style={styles.buttonText}>NEXT: UPLOAD DOCUMENTS</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}

        {/* ---------------- STEP 2 FORM ---------------- */}
        {step === 2 && (
          <View style={styles.form}>
            <Text style={styles.title}>Upload Documents</Text>

            <Text style={{ fontSize: 16, marginTop: 20 }}>
              Yahan tum CNIC Front, CNIC Back, Selfie, etc upload kar sakte ho.
            </Text>

            <TouchableOpacity
              style={[styles.button, { marginTop: 30 }]}
              onPress={() => setStep(3)}
            >
              <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
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
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0071BA",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 10,
  },
  form: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: "98%",
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#ffffffff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rowItem: {
    flex: 1,
  },
  button: {
    backgroundColor: "#0071BA",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#ffffffff",
    width: "98%",
    marginBottom: 10,
    justifyContent: "center",
  },
});