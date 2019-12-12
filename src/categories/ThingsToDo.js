import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  Left,
  Content,
  Text,
  Body,
  Card,
  CardItem,
  List,
  ListItem,
  Right,
  Spinner
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Image, ScrollView, View } from "react-native";

export default class ThingsToDo extends Component {
  state = { data: [], loaded: 0 };

  componentDidMount() {
    fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4")
      .then(r => r.json())
      .then(rJson => {
        this.setState(
          {
            data: rJson,
            loaded: 1
          },
          function() {
            console.log(rJson);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Content>
        <List transparent>
          <ListItem style={{ borderBottomColor: "#fff" }}>
            <Left>
              <Image
                source={require("../img/Khrogaty-Cuts/VectorIcons/home-third-icon.png")}
                style={{ width: 40, height: 40, alignSelf: "center" }}
              />
              <Body>
                <Text style={{ marginTop: 10 }}>Things To Do</Text>
              </Body>

              <Right>
                <TouchableOpacity
                  onPress={() => {
                    Actions.ThingsToDoMenus({ pageTitle: "Things To Do" });
                  }}
                >
                  <Text style={{ color: "green" }}>View More</Text>
                </TouchableOpacity>
              </Right>
            </Left>
          </ListItem>
        </List>
        <ScrollView horizontal={true} style={{ height: 200 }}>
          {this.renderData()}
        </ScrollView>
      </Content>
    );
  }

  renderData() {
    if (this.state.loaded === 0) {
      return <Spinner />;
    } else {
      return this.state.data.map(r => {
        return (
          <Card
            key={r.id}
            transparent
            style={{
              flex: 0,
              width: 150,
              borderRadius: 10,
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Actions.Details({
                  pageTitle: r.title.rendered,
                  pageDescreption: r.content.rendered,
                  img: r.better_featured_image.source_url,
                  img: r.better_featured_image.source_url,
                  loctionMapping: r.acf.map_location,
                  city: r.acf.address,
                  phone: r.acf.phone_number,
                  email: r.acf.email_address
                });
              }}
            >
              <CardItem style={{ flexDirection: "column" }}>
                <Image
                  style={{
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    alignSelf: "center"
                  }}
                  source={{ uri: r.better_featured_image.source_url }}
                />

                <Body
                  style={{
                    flexDirection: "column",
                    flex: 0,
                    width: 150,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignContent: "center"
                  }}
                >
                  <View style={{ height: 55 }}>
                    <Text style={{ alignSelf: "flex-start", fontSize: 15 }}>
                      {r.title.rendered}
                    </Text>

                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={{ width: 10, height: 10, paddingBottom: 13 }}
                        source={require("../img/Khrogaty-Cuts/Icons/map-marker.png")}
                      />
                      <Text style={{ fontSize: 10 }}>{r.acf.address}</Text>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </TouchableOpacity>
          </Card>
        );
      });
    }
  }
}
