import { View, StyleSheet } from "react-native";

export default function ProgressBar({ progress }) {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginTop: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: "#0071BA",
    borderRadius: 5,
  },
});

