import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Button, Text } from "../../elements";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout}>
      <Text>Logout</Text>
      <Ionicons name="log-out-outline" size={24} />
    </Pressable>
  );
};

function DrawerPage() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <Button
                onPress={() => {
                  props.navigation.navigate("home");
                }}
              >
                Home
              </Button>
              <Button
                onPress={() => {
                  props.navigation.navigate("profile");
                }}
              >
                Profile
              </Button>
              <LogoutButton />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            title: "Politix",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "My Profile",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default DrawerPage;
