import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, AppRegistry, StatusBar } from "react-native";
import Map from "./screens/Map";

export default function App() {

  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

AppRegistry.registerComponent('main', () => App);