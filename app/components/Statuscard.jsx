import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function StatusCard() {
  const cards = [
    {
      title: "Laptop Support",
      date: "26 Nov 2025",
      caseNumber: "REQ-2023-892",
      status: "Pending",
    },
    {
      title: "Medical Support",
      date: "20 Nov 2025",
      caseNumber: "REQ-2023-221",
      status: "Approved",
    },
    {
      title: "Food Support",
      date: "18 Nov 2025",
      caseNumber: "REQ-2023-552",
      status: "Rejected",
    },
    {
      title: "Education Support",
      date: "10 Nov 2025",
      caseNumber: "REQ-2023-981",
      status: "Pending",
    },
    {
      title: "Job Support",
      date: "8 Nov 2025",
      caseNumber: "REQ-2023-771",
      status: "Under Review",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <View style={{ padding: 15 }}>
      {cards.map((item, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.headercontainer}>
            <View style={styles.headertext}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>Date: {item.date}</Text>
            </View>

            <View style={styles.statusBox}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.casecontainer}
            onPress={() => toggle(i)}
          >
            <Text style={styles.caseLabel}>Case Number</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.caseValue}>{item.caseNumber}</Text>
              <Ionicons
                name={openIndex === i ? "chevron-up" : "chevron-down"}
                size={20}
                color="#111"
                style={{ marginLeft: 6 }}
              />
            </View>
          </TouchableOpacity>

          {openIndex === i && (
            <View style={styles.timelineContainer}>
              <View style={styles.leftColumn}>
                <View style={styles.line} />
                <View style={styles.circle}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={24}
                    color="#fff"
                  />
                </View>
                <View style={styles.line} />
                <View style={styles.circle}>
                  <EvilIcons name="clock" size={24} color="#fff" />
                </View>
                <View style={styles.line} />
                <View style={styles.circle}>
                  <Ionicons name="call-outline" size={24} color="#fff" />
                </View>
                <View style={styles.line} />
                <View style={styles.circle}>
                  <Ionicons name="laptop-outline" size={24} color="#fff" />
                </View>
                <View style={styles.line} />
              </View>

              <View style={{ flexDirection: "column", width: "90%" }}>
                <View style={styles.stepRow}>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Request Submitted</Text>
                    <Text style={styles.stepDesc}>
                      Your request has been submitted.
                    </Text>
                  </View>
                </View>

                <View style={styles.stepRow}>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Under Review</Text>
                    <Text style={styles.stepDesc}>
                      Your request is being reviewed.
                    </Text>
                  </View>
                </View>

                <View style={styles.stepRow}>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Approval / Interview</Text>
                    <Text style={styles.stepDesc}>
                      You may be contacted soon.
                    </Text>
                  </View>
                </View>

                <View style={styles.stepRow}>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Laptop Distribution</Text>
                    <Text style={styles.stepDesc}>
                      Your laptop will be scheduled.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
  caseLabel: {
    fontSize: 14,
    color: "#6B7280",
  },
  caseValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  date: {
    fontSize: 13,
    color: "#6B7280",
  },
  statusBox: {
    backgroundColor: "#FFF6D9",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  statusText: {
    color: "#D97706",
    fontWeight: "600",
  },
  timelineContainer: {
    marginTop: 15,
    flexDirection: "row",
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
  leftColumn: {
    width: 30,
    paddingRight: 20,
    alignItems: "center",
  },
  circle: {
    width: 42,
    height: 42,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#0071BA",
    borderWidth: 2,
    borderColor: "#fff",
    zIndex: 10,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#93c4fd5b",
  },
  stepContent: {
    flex: 1,
    backgroundColor: "#E8F1FF",
    padding: 12,
    borderRadius: 10,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 4,
    color: "#000",
  },
  stepDesc: {
    fontSize: 12,
    color: "#4A5565",
  },
});
