import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform,StatusBar, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: "red" }}>
          <Text>Search</Text>
        </View>

        <View style={{ flex: 1, padding: 16, backgroundColor: "green" }}>
          <Text>Lists</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
      
    </>
    // 07 11
  );
}
