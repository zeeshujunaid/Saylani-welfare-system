import { View } from "react-native";
import Header from "../components/Header";
import Saillstatus from "../components/Saillstatus";
import Services from "../components/services";
export default function Homescreen() {
    return (
      <View style={{backgroundColor: "#fff", flex: 1}}>
          <Header />
          <Saillstatus/>
          <Services/>
      </View>
    );
}