import { View, StyleSheet } from "react-native";

export default function ProgressBar({ step }) {
  const getWidth = () => {
    if (step === 1) return "30%";
    if (step === 2) return "50%";
    if (step === 3) return "100%";
    return "30%";
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: getWidth() }]} />
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
