import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import Audiorecorder from "../components/voicereorder";
export default function Request() {
  const router = useRouter();
  const { title } = useLocalSearchParams();
  const [income, setIncome] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-outline" size={28} color="black" />
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Header />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Request {title}</Text>

        {/* Monthly Income */}
        <View style={styles.rowItem}>
          <Text style={styles.label}>What is Your Monthly Income?</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={income}
              onValueChange={(value) => setIncome(value)}
            >
              <Picker.Item label="Select Income" value="" />
              <Picker.Item label="Less than $500" value="<500" />
              <Picker.Item label="$500 - $1000" value="500-1000" />
              <Picker.Item label="$1000 - $2000" value="1000-2000" />
              <Picker.Item label="$2000 - $3000" value="2000-3000" />
              <Picker.Item label="More than $3000" value=">3000" />
            </Picker>
          </View>
        </View>

        <View style={styles.describeContainer}>
          <Text style={styles.label}>Why do you need a {title}?</Text>
          <Text style={styles.subLabel}>Type or record your voice</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            multiline
          />
        </View>

        <View style={styles.linecontainer}>
          <View style={styles.line} />
          <Text style={styles.text}>or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.recordcontainer}>
          <View style={styles.recorderview}>
            <Audiorecorder />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backIconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  headerWrapper: {
    width: "90%",
  },
  content: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#0071B4",
    marginBottom: 20,
  },
  rowItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    marginBottom: 5,
  },
  subLabel: {
    fontSize: 13,
    color: "#555",
    marginBottom: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  describeContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    minHeight: 150,
    textAlignVertical: "top",
  },
  linecontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  text: {
    marginHorizontal: 10,
    color: "#555",
    fontWeight: "600",
  },
  recordcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  recorderview: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
});
