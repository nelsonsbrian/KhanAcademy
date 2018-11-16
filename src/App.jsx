import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from './components/Body';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Leaf } from '@fortawesome/free-solid-svg-icons'

// library.add(Leaf)

class App extends Component {
  render() {
    return (
      <main className="">

        <Header />
        <Body/>
      </main>
    );
  }
}

export default App;
