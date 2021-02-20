import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [profileData, ...prevState.profiles],
    }));
  };

  render() {
    return (
      <div className="container divide-y divide-light-blue-400 mx-auto p-4 md:pt-8 md:p-24">
        <Form onSubmit={this.addNewProfile} />
        <Card profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
