import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Home from "./src/Home";
import Places from "./src/categories/Places";
import PlacesMenus from "./src/menus/PlacesMenus";
import Search from "./src/Search";
import Splash from "./src/Splash";
import Restaurants from "./src/categories/Restaurants";
import ThingsToDo from "./src/categories/ThingsToDo";
import RestaurantsMenus from "./src/menus/RestaurantsMenus";
import ThingsToDoMenus from "./src/menus/ThingsToDoMenus";
import Details from "./src/Details";
import About from "./src/common/About";
import Mapping from "./src/common/Mapping";
import AllMenus from "./src/menus/restaurantsTabs/AllMenus";
import RestaurantsMMenus from "./src/menus/restaurantsTabs/RestaurantsMMenus";
import CoffeeMenus from "./src/menus/restaurantsTabs/CoffeeMenus";
import HeaderDetails from "./src/common/HeaderDetails";
import OnBoarding1 from "./src/onBoarding/OnBoarding1";
import OnBoarding2 from "./src/onBoarding/OnBoarding2";
import OnBoarding3 from "./src/onBoarding/OnBoarding3";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="Splash" component={Splash} title="Splash" initial />

          <Scene
            key="OnBoarding1"
            component={OnBoarding1}
            title="OnBoarding1"
            type="reset"
          />
          <Scene
            key="OnBoarding2"
            component={OnBoarding2}
            title="OnBoarding2"
          />
          <Scene
            key="OnBoarding3"
            component={OnBoarding3}
            title="OnBoarding3"
          />

          <Scene key="Home" component={Home} title="Home" type="reset" />
          <Scene key="Search" component={Search} title="Search" />

          <Scene key="Places" component={Places} title="Places" />
          <Scene
            key="PlacesMenus"
            component={PlacesMenus}
            title="PlacesMenus"
          />

          <Scene
            key="Restaurants"
            component={Restaurants}
            title="Restaurants"
          />
          <Scene
            key="RestaurantsMenus"
            component={RestaurantsMenus}
            title="RestaurantsMenus"
          />

          <Scene key="ThingsToDo" component={ThingsToDo} title="ThingsToDo" />
          <Scene
            key="ThingsToDoMenus"
            component={ThingsToDoMenus}
            title="ThingsToDoMenus"
          />

          <Scene key="Details" component={Details} title="Details" />
          <Scene key="About" component={About} title="About" />
          <Scene key="Mapping" component={Mapping} title="Mapping" />

          <Scene key="AllMenus" component={AllMenus} title="AllMenus" />
          <Scene
            key="RestaurantsMMenus"
            component={RestaurantsMMenus}
            title="RestaurantsMMenus"
          />
          <Scene
            key="CoffeeMenus"
            component={CoffeeMenus}
            title="CoffeeMenus"
          />

          <Scene
            key="HeaderDetails"
            component={HeaderDetails}
            title="HeaderDetails"
          />
        </Scene>
      </Router>
    );
  }
}
