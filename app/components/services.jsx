import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Services() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <Text style={styles.headerLink}>View All</Text>
      </View>

      {/* ROW 1 */}
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

      {/* ROW 2 */}
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
              name="hand-coin"
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
    fontSize: 18,
    fontWeight: "bold",
  },
  headerLink: {
    color: "#007AFF",
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
    height: 55,
    width: 55,
    borderRadius: 55,
    backgroundColor: "#e8f2ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
});
