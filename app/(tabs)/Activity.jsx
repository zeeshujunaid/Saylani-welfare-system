import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/Header";
import Statuscard from "../components/Statuscard";
export default function Activity() {

  return (
    <View style={{ flex: 1,backgroundColor:"#fff", }}>
      <Header />
      <View style={styles.container}>
        <ScrollView>
        <Statuscard/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 5 },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 3,
    marginBottom: 15,
  },
});