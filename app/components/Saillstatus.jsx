import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function SaillStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View style={styles.statusRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.label}>Saail ID:-</Text>
            <Text style={styles.id}>SW-8921</Text>
          </View>
          <View style={styles.verified}>
            <Text style={{ marginRight: 5 }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color="#fff"
              />
            </Text>
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
        </View>

        <View style={styles.userRow}>
          <View style={styles.userImageContainer}>
            <Image
              source={require("../../assets/images/saillnew.png")}
              style={styles.userImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Muhammad Hunain</Text>
            <Text style={styles.userAddress}>
              Hussainabad F.B Area, Karachi
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  mainCard: {
    backgroundColor: "#0071BA",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    color: "#ffffffc9",
    fontWeight: "400",
    fontSize: 16,
  },
  id: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
  },
  verified:{
    width: 100,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#8BC541",
  },
  verifiedText: {
    color: "#fff",
    alignItems: "center",
    fontSize: 16,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImageContainer: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderColor: "#8BC581",
    borderRadius: 5,
    justifyContent: "center",
    marginRight: 15,
  },
  userImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
    marginBottom: 4,
  },
  userAddress: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffffbd",
  },
});
