import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

export default function Registrationform() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../../assets/images/saylanilogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Complete Registration</Text>
          <Text style={styles.subtitle}>Step 1 of 2 - Personal Details</Text>
        </View>

        <View style={styles.form}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20, width: "100%" }}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor="#909090"
              style={styles.input}
            />

            <Text style={styles.label}>CNIC</Text>
            <TextInput
              placeholder="42101-1234567-0"
              placeholderTextColor="#909090"
              style={styles.input}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="0300-1234567"
              placeholderTextColor="#909090"
              style={styles.input}
            />

            <Text style={styles.label}>Email (Optional)</Text>
            <TextInput
              placeholder="your@email.com"
              placeholderTextColor="#909090"
              style={styles.input}
            />

            {/* Row: Date of Birth & Gender */}
            <View style={styles.row}>
              <View style={[styles.rowItem, { marginRight: 10 }]}>
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor="#909090"
                  style={styles.input}
                />
              </View>

              <View style={styles.rowItem}>
                <Text style={styles.label}>Gender</Text>
                <TextInput
                  placeholder="Male / Female"
                  placeholderTextColor="#909090"
                  style={styles.input}
                />
              </View>
            </View>

            <Text style={styles.label}>Marital Status</Text>
            <TextInput
              placeholder="Single / Married"
              placeholderTextColor="#909090"
              style={styles.input}
            />

            <Text style={styles.label}>Current Address</Text>
            <TextInput
              placeholder="Street, Area, City"
              placeholderTextColor="#909090"
              style={styles.input}
            />
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
    marginBottom: 5,
    marginTop: 10,
  },
  form: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // backgroundColor: "#a82525ff",
  },
  input: {
    borderWidth: 1,
    width: "98%",
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
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
});
