import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { Text, Button, Icon, Left, Right, View } from "native-base";
import { Actions } from "react-native-router-flux";
import OnBoarding1 from "./OnBoarding1";
import OnBoarding3 from "./OnBoarding3";

export default class OnBoarding2 extends Component {
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
          source={require("../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-left.png")}
        >
          <Image
            source={require("../img/Khrogaty-Cuts/Logo/khrogaty-logo.png")}
            style={{ width: 150, height: 150, marginBottom: 20 }}
          ></Image>

          <Image
            source={require("../img/Khrogaty-Cuts/VectorIcons/home-second-icon.png")}
            style={{ width: 60, height: 60, marginTop: 130 }}
          ></Image>

          <Text style={{ fontSize: 20 }}> Restaurants & Coffee Shops</Text>

          <View style={{ flexDirection: "row", marginBottom: -140 }}>
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

            <Right>
              <Button
                onPress={() => {
                  Actions.OnBoarding3();
                }}
                iconRight
                transparent
              >
                <Text style={{ color: "black" }}>Next</Text>
                <Icon style={{ color: "black" }} name="arrow-forward" />
              </Button>
            </Right>
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
