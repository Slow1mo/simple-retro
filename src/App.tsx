import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import { Board } from "./page/Board";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { mainReducer } from "./mainReducer";

const rootReducer = combineReducers({
  mainReducer: mainReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
    <main style={{ margin: "50px 50px 0" }}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/board/:boardId">
              <Board />
            </Route>
          </Switch>
      </Router>
    </main>
  </Provider>
  );
}

export default App;
