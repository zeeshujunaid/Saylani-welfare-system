import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Services() {
  const services = [
    { id: 1, title: "Ration", icon: "silverware-fork-knife" },
    { id: 2, title: "Medical", icon: "stethoscope" },
    { id: 3, title: "IT Courses", icon: "laptop" },
    { id: 4, title: "Financial Aid", icon: "credit-card-outline" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <Text style={styles.headerLink}>View All</Text>
      </View>

      {/* Grid 2x2 */}
      <View style={styles.grid}>
        {services.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name={item.icon}
                size={28}
                color="#007AFF"
              />
            </View>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        ))}
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
    color: "#000",
  },
  headerLink: {
    color: "#00000083",
    fontSize: 14,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 48,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
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
