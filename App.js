import React, { Component } from "react";
import AppNavigator from "./navigation/AppNavigator";

import AsyncStorage from "@react-native-community/async-storage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistReducer } from "redux-persist";

import todoReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, todoReducer);
let store = createStore(persistedReducer);

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
