import React, { Component } from "react";
import { Container, Tab, Tabs, TabHeading, Text, Body } from "native-base";
import AllMenus from "./restaurantsTabs/AllMenus";
import MainHeader from "../common/MainHeader";
import RestaurantsMMenus from "./restaurantsTabs/RestaurantsMMenus";
import CoffeeMenus from "./restaurantsTabs/CoffeeMenus";

export default class RestaurantsMenus extends Component {
  render() {
    return (
      <Container>
        <MainHeader txtTitle={this.props.pageTitle} />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "green" }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Body>
                  <Text>All</Text>
                </Body>
              </TabHeading>
            }
          >
            <AllMenus />
          </Tab>

          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Body>
                  <Text>Restaurants</Text>
                </Body>
              </TabHeading>
            }
          >
            <RestaurantsMMenus />
          </Tab>

          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Body>
                  <Text>Coffee</Text>
                </Body>
              </TabHeading>
            }
          >
            <CoffeeMenus />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
