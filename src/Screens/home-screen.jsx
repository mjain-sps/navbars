import React, { Component } from "react";

class HomeScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li onClick={() => this.props.history.push("/header-sticky")}>
            STICKY NAVIGATION
          </li>
          <li onClick={() => this.props.history.push("/mega-menus")}>
            MEGA MENU NAVIGATION
          </li>
          <li>STICKY NAVIGATION</li>
          <li>STICKY NAVIGATION</li>
          <li>STICKY NAVIGATION</li>
          <li>STICKY NAVIGATION</li>
        </ul>
      </div>
    );
  }
}

export default HomeScreen;
