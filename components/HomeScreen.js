import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Scanner from "./Scanner";
const HomeScreen = () => {
  const handlePress = () => {
    console.log("Button Pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scan QR Code</Text>
      <Text style={styles.desc}>
        Place QR Code inside the frame to scan. Please avoid shaking to get the
        result quickly.
      </Text>
      <View style={styles.scanningArea}>
        <Scanner/>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Icon name="qrcode" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  
  },

  heading: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    marginTop: 30,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#adb5bd",
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
    backgroundColor: "#fe7d55",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 10,
    fontSize: 16,
  },
  scanningArea: {
    flex: 1,
    width: '100%',
    marginTop:50,
  },
});
