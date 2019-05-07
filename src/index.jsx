import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Module1 from "./modules/module1/index";
import Module2 from "./modules/module2/index";
import Loading from "./components/loading";
import createStore from "./utils/createStore";

export const store = createStore();

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Module1} />
            <Route path="/module2" exact component={Module2} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
