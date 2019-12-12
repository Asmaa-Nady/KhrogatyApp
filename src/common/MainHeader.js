import React, { Component } from "react";
import { Text, View } from "native-base";
import { ImageBackground } from "react-native";

export default class MainHeader extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: 100 }}>
        <ImageBackground
          source={require("../img/Khrogaty-Cuts/Backgrounds/theme-header.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text style={{ marginTop: 60, fontSize: 16, color: "white" }}>
            {this.props.txtTitle}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
