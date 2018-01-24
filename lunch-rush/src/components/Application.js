import React from "react";
import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import NewRestaurant from "./NewRestaurant";
import Restaurants from "./Restaurants";
import "./Application.css";
import map from "lodash/map";

/**
 * @see https://firebase.google.com/docs/auth/web/manage-users
 * @see https://lodash.com/docs/4.17.4#map
 */
class Application extends React.Component {
  state = {
    currentUser: null,
    restaurants: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser
      });

      this.restaurantRef = database.ref("restaurants");
      this.restaurantRef.on("value", snapshot => {
        this.setState({
          restaurants: snapshot.val()
        });
      });
    });
  }

  /**
   * @returns {object}
   */
  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {!currentUser && <SignIn />}
          {currentUser && (
            <div>
              <NewRestaurant />
              <Restaurants restaurants={restaurants} user={currentUser} />
              <CurrentUser user={currentUser} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Application;
