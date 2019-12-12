import React, { Component } from "react";
import {
  Container,
  Card,
  Content,
  Text,
  Body,
  CardItem,
  Spinner,
  Input,
  Item,
  Button,
  View
} from "native-base";
import { Image, TouchableOpacity } from "react-native";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loaded: 0, c: "" };
  }

  componentDidMount() {
    fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?post=7`)
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

  postingComment() {
    let postLink = `http://reactnative.website/iti/wp-json/wp/v2/comments?author_name=Ahmed Hassan &author_email=ahmed.hassan6259@gmail.com&content=${this.state.c}&post=7`;
    fetch(postLink, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(r => {
        fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?post=7`, {
          method: "GET"
        })
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
      })
      .then(this.setState({ c: "" }));
  }
  TimeData(date) {
    let dateComment = new Date(date);

    return dateComment.toLocaleTimeString();
  }

  render() {
    return (
      <Container>
        <Content>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{ uri: this.props.imagename }}
          />
          <Card>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              {this.props.titlename}
            </Text>
            <Text style={{ fontSize: 15 }}>{this.props.descreptionname}</Text>
          </Card>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 20 }}>
            More Information
          </Text>

          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body style={{ flexDirection: "column" }}>
                <Container style={{ flexDirection: "row", height: 40 }}>
                  <Image
                    style={{ width: 20, height: 23, marginRight: 15 }}
                    source={require("../img/Khrogaty-Cuts/Icons/address.png")}
                  />
                  <Text>{this.props.cityName}</Text>
                </Container>

                <Container style={{ flexDirection: "row", height: 30 }}>
                  <Image
                    style={{ width: 23, height: 23, marginRight: 15 }}
                    source={require("../img/Khrogaty-Cuts/Icons/call.png")}
                  />
                  <Text>{this.props.phoneName}</Text>
                </Container>

                <Container style={{ flexDirection: "row", height: 30 }}>
                  <Image
                    style={{ width: 23, height: 23, marginRight: 15 }}
                    source={require("../img/Khrogaty-Cuts/Icons/mail.png")}
                  />
                  <Text>{this.props.emailName}</Text>
                </Container>
              </Body>
            </CardItem>
          </Card>

          <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
            Leave a Comment
          </Text>
          {this.renderData()}

          <Card style={{ flex: 0 }}>
            <Item>
              <Input
                placeholder="Write Here..."
                onChangeText={text => this.setState({ c: text })}
                value={this.state.c}
              />
              <TouchableOpacity>
                <Button
                  transparent
                  onPress={() => {
                    this.postingComment();
                  }}
                >
                  <Image
                    source={require("../img/Khrogaty-Cuts/Icons/telegram.png")}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                </Button>
              </TouchableOpacity>
            </Item>
          </Card>
        </Content>
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
            <CardItem
              style={{ flexDirection: "column", alignSelf: "flex-start" }}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Image
                  source={require("../img/Khrogaty-Cuts/Icons/profile.png")}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                />
                <Text>{r.author_name}</Text>
                <Text style={{ marginLeft: 30, marginTop: 5 }}>
                  {this.TimeData(r.date)}
                </Text>
              </View>

              <Text>{r.content.rendered}</Text>
            </CardItem>
          </Card>
        );
      });
    }
  }
}
