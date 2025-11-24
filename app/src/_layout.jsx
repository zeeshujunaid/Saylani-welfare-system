import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function UserDrawer() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Homescreen"
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
