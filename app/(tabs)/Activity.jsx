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
          <View style={styles.headercontainer}>
            <View style={styles.headertext}>
              <Text style={styles.title}>Laptop Support</Text>
              <Text style={styles.date}>Date: 26 Nov 2025</Text>
            </View>

            <View style={styles.statusBox}>
              <Text style={styles.statusText}>Pending</Text>
            </View>
          </View>

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

          {open && (
            <View style={styles.timelineContainer}>
              {/* Step 1 */}
              <View style={styles.stepRow}>
                <View style={styles.iconWrapper}>
                  <View style={styles.circle}>
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  </View>
                  <View style={styles.line} />
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Request Submitted</Text>
                  <Text style={styles.stepDesc}>
                    Your laptop request has been successfully submitted and is
                    now in our system.
                  </Text>
                </View>
              </View>

              {/* Step 2 */}
              <View style={styles.stepRow}>
                <View style={styles.iconWrapper}>
                  <View style={styles.circle}>
                    <Ionicons name="time-outline" size={14} color="#fff" />
                  </View>
                  <View style={styles.line} />
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Under Review</Text>
                  <Text style={styles.stepDesc}>
                    Our team is currently reviewing your request and verifying
                    all requirements.
                  </Text>
                </View>
              </View>

              {/* Step 3 */}
              <View style={styles.stepRow}>
                <View style={styles.iconWrapper}>
                  <View style={styles.circle}>
                    <Ionicons name="call-outline" size={14} color="#fff" />
                  </View>
                  <View style={styles.line} />
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Approval / Interview</Text>
                  <Text style={styles.stepDesc}>
                    Final approval is pending. You may be contacted for a brief
                    interview or clarification.
                  </Text>
                </View>
              </View>

              {/* Step 4 */}
              <View style={styles.stepRow}>
                <View style={styles.iconWrapper}>
                  <View style={styles.circle}>
                    <Ionicons name="laptop-outline" size={14} color="#fff" />
                  </View>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Laptop Distribution</Text>
                  <Text style={styles.stepDesc}>
                    Once approved, your laptop will be prepared and scheduled
                    for distribution.
                  </Text>
                </View>
              </View>
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
    alignSelf:"center",
  },

  statusText: { color: "#D97706", fontWeight: "600" },
  timelineContainer: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F8FAFC",
  },

  stepRow: {
    flexDirection: "row",
    marginBottom: 20,
  },

  iconWrapper: {
    width: 40,
    alignItems: "center",
  },

  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#0284C7",
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    width: 2,
    height: "10%",
    backgroundColor: "#93C5FD",
  },

  stepContent: {
    flex: 1,
    backgroundColor: "#E8F1FF",
    padding: 12,
    borderRadius: 10,
  },

  stepTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1E40AF",
  },

  stepDesc: {
    fontSize: 13,
    color: "#475569",
  },
});
