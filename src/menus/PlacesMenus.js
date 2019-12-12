import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Content,
  Text,
  Body,
  Card,
  CardItem,
  Spinner,
  Left,
  View,
  Button
} from "native-base";
import MainFooter from "../common/MainFooter";
import MainHeader from "../common/MainHeader";

export default class PlacesMenus extends Component {
  state = { data: [], loaded: 0 };

  componentDidMount() {
    fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2")
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
      <Container>
        <Content>
          <MainHeader txtTitle={this.props.pageTitle} />

          {this.renderData()}
        </Content>
        <MainFooter activeFindPlaces="true" />
      </Container>
    );
  }
  renderData() {
    if (this.state.loaded === 0) {
      return <Spinner />;
    } else {
      return this.state.data.map(r => {
        return (
          <Card key={r.id}>
            <CardItem thumbnail style={{ marginTop: 10 }}>
              <Left>
                <Image
                  style={{ width: 120, height: 140, borderRadius: 20 }}
                  resizeMode="cover"
                  source={{ uri: r.better_featured_image.source_url }}
                />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>{r.title.rendered}</Text>

                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 10, height: 10, marginTop: 4 }}
                    source={require("../img/Khrogaty-Cuts/Icons/map-marker.png")}
                  />
                  <Text style={{ fontSize: 10, color: "green" }}>
                    {r.acf.address}
                  </Text>
                </View>

                <Text note numberOfLines={3}>
                  {r.excerpt.rendered}
                </Text>

                <Button
                  rounded
                  success
                  style={{ height: 30 }}
                  onPress={() => {
                    Actions.Details({
                      pageTitle: r.title.rendered,
                      pageDescreption: r.content.rendered,
                      img: r.better_featured_image.source_url,
                      loctionMapping: r.acf.map_location,
                      city: r.acf.address,
                      phone: r.acf.phone_number,
                      email: r.acf.email_address
                    });
                  }}
                >
                  <Text
                    style={{ width: 110, textAlign: "center" }}
                    uppercase={false}
                  >
                    Details
                  </Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        );
      });
    }
  }
}
