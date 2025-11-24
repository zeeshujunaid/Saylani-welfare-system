import { Image, Text,  TouchableOpacity, View } from "react-native"; 
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Image source={require("../assets/images/saylanilogo.png")} />

      <Text>WELCOME TO</Text>
      <Text>SAYLANI WELFARE APP</Text>


      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Get Started</Text>
      </TouchableOpacity>


      <Text>this app is to easy your application process</Text>
    </View>
  );
}
