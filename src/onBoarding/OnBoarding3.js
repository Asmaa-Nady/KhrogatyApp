import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { Text, Button, Icon, Left, Body, View } from "native-base";

import { Actions } from "react-native-router-flux";
import OnBoarding2 from "./OnBoarding2";
import OnBoarding1 from "./OnBoarding1";

export default class OnBoarding3 extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }
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
            source={require("../img/Khrogaty-Cuts/VectorIcons/home-third-icon.png")}
            style={{ width: 60, height: 60, marginTop: 220 }}
          ></Image>

          <Text style={{ fontSize: 20 }}> What Do I Do?</Text>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Left>
              <Button
                iconRight
                transparent
                onPress={() => {
                  Actions.pop();
                }}
              >
                <Text style={{ color: "black" }}>Prev</Text>
                <Icon style={{ color: "black" }} name="arrow-back" />
              </Button>
            </Left>

            <Body style={{ alignContent: "center" }}>
              <Button
                onPress={() => {
                  Actions.Home();
                }}
                style={{ marginLeft: -40 }}
                rounded
                success
              >
                <Text>Start</Text>
              </Button>
            </Body>
          </View>
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
