import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderScreen1 from "./Screens/Header-Sticky/header.screen-1";
import MegaMenus from "./Screens/Mega-Menus/mega.menu.screen";
import HomeScreen from "./Screens/home-screen";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/header-sticky" component={HeaderScreen1} />
          <Route exact path="/mega-menus" component={MegaMenus} />
        </Router>
      </>
    );
  }
}
export default App;
