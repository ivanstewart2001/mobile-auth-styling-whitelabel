import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={"#fff"} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6c47ff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="newsfeed"
        options={{ headerShown: false }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="elections"
        options={{ headerShown: false }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="bills"
        options={{ headerShown: false }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="representatives"
        options={{ headerShown: false }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
