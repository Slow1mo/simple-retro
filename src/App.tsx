import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { mainReducer } from "./mainReducer";
import Retro from "./page/Retro";
import "./App.scss"

const rootReducer = combineReducers({
  mainReducer: mainReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
    <main className="main">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/retro/:id">
              <Retro />
            </Route>
          </Switch>
      </Router>
    </main>
  </Provider>
  );
}

export default App;
