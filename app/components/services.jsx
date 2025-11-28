import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Services() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <Text style={styles.headerLink}>View All</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={28}
              color="#007AFF"
            />
          </View>
          <Text style={styles.cardText}>Ration</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="stethoscope"
              size={28}
              color="#007AFF"
            />
          </View>
          <Text style={styles.cardText}>Medical</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="laptop" size={28} color="#007AFF" />
          </View>
          <Text style={styles.cardText}>IT Courses</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={28}
              color="#007AFF"
            />
          </View>
          <Text style={styles.cardText}>Financial Aid</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color:"#000",
  },
  headerLink: {
    color: "#00000083",
    fontSize: 14,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 48,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 12,
    alignItems: "center",
  },

  iconCircle: {
    height: 65,
    width: 65,
    borderRadius: 10,
    backgroundColor: "#e8f2ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
});
