import React, { Component } from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { Icon, Text, Button } from "native-base";
import OnBoarding2 from "./OnBoarding2";
import OnBoarding3 from "./OnBoarding3";
import { Actions } from "react-native-router-flux";

export default class OnBoarding1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagebackground}
          source={require("../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-right.png")}
        >
          <Image
            source={require("../img/Khrogaty-Cuts/Logo/khrogaty-logo.png")}
            style={{ width: 150, height: 150, marginBottom: 20 }}
          ></Image>

          <Image
            source={require("../img/Khrogaty-Cuts/VectorIcons/home-first-icon.png")}
            style={{ width: 60, height: 60, marginTop: 200 }}
          ></Image>

          <Text style={{ fontSize: 20 }}> Places For Going Out</Text>
          <Button
            onPress={() => {
              Actions.OnBoarding2();
            }}
            iconRight
            transparent
            style={{ marginLeft: 270, marginBottom: -90 }}
          >
            <Text style={{ color: "black" }}>Next</Text>
            <Icon style={{ color: "black" }} name="arrow-forward" />
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingText: {
    color: "black",
    fontSize: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  imagebackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
