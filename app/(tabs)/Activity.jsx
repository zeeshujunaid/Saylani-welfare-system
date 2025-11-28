import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../components/Header";

export default function Activity() {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={styles.container}>
        <View style={styles.card}>
          {/* Header Row */}
          <View style={styles.headercontainer}>
            <View style={styles.headertext}>
              <Text style={styles.title}>Laptop Support</Text>
              <Text style={styles.date}>Date: 26 Nov 2025</Text>
            </View>

            <View style={styles.statusBox}>
              <Text style={styles.statusText}>Pending</Text>
            </View>
          </View>

          {/* Case Number Dropdown Row */}
          <TouchableOpacity
            style={styles.casecontainer}
            onPress={() => setOpen(!open)}
          >
            <Text style={styles.caseLabel}>Case Number</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.caseValue}>REQ-2023-892</Text>
              <Ionicons
                name={open ? "chevron-up" : "chevron-down"}
                size={20}
                color="#111"
                style={{ marginLeft: 6 }}
              />
            </View>
          </TouchableOpacity>

          {/* Dropdown Content */}
          {open && (
            <View style={styles.dropdownBox}>
              <Text style={styles.dropText}>• Submitted on: 20 Nov 2025</Text>
              <Text style={styles.dropText}>• Verified by: Admin Team</Text>
              <Text style={styles.dropText}>• Status: Under Review</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 3,
    marginBottom: 15,
  },

  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  headertext: { flexDirection: "column" },

  casecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    backgroundColor: "#F9FAFB",
    marginTop: 10,
  },

  dropdownBox: {
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
  },

  dropText: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 3,
  },

  caseLabel: { fontSize: 14, color: "#6B7280" },
  caseValue: { fontSize: 14, fontWeight: "600", color: "#111827" },

  title: { fontSize: 16, fontWeight: "600", color: "#111827" },
  date: { fontSize: 13, color: "#6B7280" },

  statusBox: {
    backgroundColor: "#FFF6D9",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  statusText: { color: "#D97706", fontWeight: "600" },
});
