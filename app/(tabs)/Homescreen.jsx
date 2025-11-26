import { Text, View } from "react-native";
import Header from "../components/Header";
export default function Homescreen() {
    return (
      <View style={{backgroundColor: "#fff", flex: 1}}>
          <Header />
        <Text>hello</Text>
      </View>
    );
}