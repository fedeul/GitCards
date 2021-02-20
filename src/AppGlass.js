import React, { Fragment } from "react";
import "./AppGlass.css";
import FormGlass from "./components/FormGlass";
import CardGlass from "./components/CardGlass";

class AppGlass extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(() => ({
      profiles: [profileData],
    }));
  };

  render() {
    return (
      <Fragment>
        <FormGlass onSubmit={this.addNewProfile} />
        <CardGlass profiles={this.state.profiles} />
      </Fragment>
    );
  }
}

export default AppGlass;
