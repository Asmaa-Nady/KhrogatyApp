import React, { Component } from "react";
import { Footer, FooterTab, Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

export default class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: "white" }}>
          <Button vertical>
            <TouchableOpacity
              onPress={() => {
                Actions.Home();
              }}
            >
              <Image
                source={
                  this.props.activeHome
                    ? require("../img/Khrogaty-Cuts/Icons/ghome.png")
                    : require("../img/Khrogaty-Cuts/Icons/home.png")
                }
                style={{ width: 20, height: 20, alignSelf: "center" }}
              />
              <Text>Home</Text>
            </TouchableOpacity>
          </Button>
          <Button vertical>
            <TouchableOpacity
              onPress={() => {
                Actions.Search();
              }}
            >
              <Image
                source={
                  this.props.activeSearch
                    ? require("../img/Khrogaty-Cuts/Icons/gfilter.png")
                    : require("../img/Khrogaty-Cuts/Icons/filter.png")
                }
                style={{ width: 20, height: 20, alignSelf: "center" }}
              />
              <Text style={{ fontSize: 6 }}>Search</Text>
            </TouchableOpacity>
          </Button>

          <Button vertical>
            <TouchableOpacity
              onPress={() => {
                Actions.PlacesMenus({ pageTitle: "Places For Going Out" });
              }}
            >
              <Image
                source={
                  this.props.activeFindPlaces
                    ? require("../img/Khrogaty-Cuts/Icons/gfind-places.png")
                    : require("../img/Khrogaty-Cuts/Icons/find-places.png")
                }
                style={{ width: 20, height: 20, alignSelf: "center" }}
              />

              <Text style={{ fontSize: 5 }}>Find places</Text>
            </TouchableOpacity>
          </Button>

          <Button vertical>
            <TouchableOpacity
              onPress={() => {
                Actions.RestaurantsMenus({
                  pageTitle: "Restaurants & Coffee Shops"
                });
              }}
            >
              <Image
                source={
                  this.props.activeRestaurants
                    ? require("../img/Khrogaty-Cuts/Icons/grestaurants.png")
                    : require("../img/Khrogaty-Cuts/Icons/restaurants.png")
                }
                style={{ width: 20, height: 20, alignSelf: "center" }}
              />
              <Text style={{ fontSize: 5 }}>Restaurants</Text>
            </TouchableOpacity>
          </Button>

          <Button vertical>
            <TouchableOpacity
              onPress={() => {
                Actions.ThingsToDoMenus({ pageTitle: "Things To Do" });
              }}
            >
              <Image
                source={
                  this.props.activeThingsToDo
                    ? require("../img/Khrogaty-Cuts/Icons/gtodo.png")
                    : require("../img/Khrogaty-Cuts/Icons/todo.png")
                }
                style={{ width: 20, height: 20, alignSelf: "center" }}
              />

              <Text style={{ fontSize: 5 }}>Things To Do</Text>
            </TouchableOpacity>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
