import React from "react";
import { database } from "./firebase";
import "./App.css";

/**
 * @see https://firebase.google.com/docs/reference/js/firebase.database.Reference
 */
class App extends React.Component {
  state = {
    data: null,
    newData: ""
  };

  dataRef = null;

  componentDidMount() {
    this.dataRef = database.ref("/WowWow/lololol/hehehe");

    this.dataRef.on("child_added", snapshot => {
      console.log("child_added: ", snapshot.val());
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange = e => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.dataRef.push(this.state.newData);
  };

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>React and FireBase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="app-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newData}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
