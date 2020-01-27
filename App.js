import React, { Component } from "react";
import AppNavigator from "./navigation/AppNavigator";

import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers";

let store = createStore(todoReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
