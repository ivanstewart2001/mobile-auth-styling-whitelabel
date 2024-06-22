import React from "react";
import { Button, Layout, Text, View } from "../elements";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <Layout className="flex-1 items-center justify-center space-y-4">
      <Text className="text-3xl">White Label</Text>

      <View className="flex flex-row space-x-4">
        <Button onPress={() => router.push("/(auth)/signIn")}>Sign In</Button>
        <Button onPress={() => router.push("/(auth)/signUp")}>Sign Up</Button>
      </View>
    </Layout>
  );
}
