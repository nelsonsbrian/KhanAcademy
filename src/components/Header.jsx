import React, { Component } from "react";
import HeaderNaveBar from "./HeaderNavebar";
import HeaderStart from "./HeaderStart";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <style jsx>{`
          .header {
            height: 500px;
            border: 1px black solid;
            background-image: url(https://cdn.kastatic.org/images/homepage/blue-mountains.svg);
          }


        `}</style>
        <HeaderNaveBar />
        <HeaderStart />
      </div>
    );
  }
}

export default Header;
