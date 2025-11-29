import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

export default function Services() {
  const router = useRouter();
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
        {services.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => router.push(`/common/Request?title=${item.title}`)}
            style={[
              styles.cardContainer,
              index % 2 === 0 ? { marginRight: "4%" } : { marginRight: 0 },
            ]}
          >
            <View style={styles.card}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={28}
                  color="#007AFF"
                />
              </View>
              <Text style={styles.cardText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
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
  },
  cardContainer: {
    width: "48%",
    marginBottom: 15,
  },
  card: {
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
    borderRadius: 20,
    backgroundColor: "#e8f2ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
});
