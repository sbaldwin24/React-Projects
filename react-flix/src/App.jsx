import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing";
import Search from "./components/Search";
import Details from "./components/Details";
import preload from "../data.json";

/**
 * @see http://2ality.com/2012/04/arrow-functions.html
 * @see https://github.com/airbnb/javascript#arrows--implicit-return
 */
const FourOhFour = () => <h1>404</h1>;

/**
 * @see https://reacttraining.com/react-router/web/api/BrowserRouter
 * @see https://reacttraining.com/react-router/web/api/Switch
 */
const App = () => (
  <Router>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/search"
            component={props => <Search shows={preload.shows} {...props} />}
          />
          <Route
            path="/details/:id"
            component={props => {
              const selectedShow = preload.shows.find(
                show => props.match.params.id === show.imdbID
              );
              return <Details show={selectedShow} {...props} />;
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </Router>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    }).isRequired
  })
};

export default App;
