import React, { Component } from "react";
import UserInput from "./components/UserInput";
import ConnectedUsers from "./components/Users";
import manageUsers from "./reducers/manageUsers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

export default App;
