import React, { Component } from "react";
import { ImageBackground, Image, View } from "react-native";

export default class HeaderHome extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: 200 }}>
        <ImageBackground
          source={require("../img/Khrogaty-Cuts/Backgrounds/home-header.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            source={require("../img/Khrogaty-Cuts/Logo/khrogaty-logo.png")}
            style={{ width: 75, height: 75, marginTop: 40, marginLeft: 140 }}
          />
        </ImageBackground>
      </View>
    );
  }
}
