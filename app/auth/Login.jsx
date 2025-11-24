import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/saylanilogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Enter your email and password to log in.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={22} color="#00000034" />
          <TextInput
            placeholder="your email address"
            style={styles.inputWithIcon}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Password</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={22} color="#00000034" />
          <TextInput
            placeholder="your password"
            secureTextEntry={true}
            style={styles.inputWithIcon}
          />
          <AntDesign name="eye-invisible" size={24} color="#00000034" />
        </View>

        <View style={{ alignItems: "flex-end", marginBottom: 25 }}>
            <Text>Forgot Password?</Text>
        </View>

          <TouchableOpacity onPress={()=>router.push("/auth/Signup")}>
        <View style={styles.button}>
          <Text style={{color: "#fff", fontWeight: "700", fontSize: 18}}>Login</Text>
        </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 250,
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
    color: "#193C77",
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
    color: "#193C77",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#00000034",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: "#fff",
  },
  button:{
    backgroundColor: "#89C441",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  inputWithIcon: {
    flex: 1,
    color:"#00000034",
    fontSize: 15,
    marginLeft: 10,
  },
});
