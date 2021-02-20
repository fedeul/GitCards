import React from "react";

const axios = require("axios");
class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form
        className="m-1  md:m-4 md:pb-8 md:flex justify-between "
        onSubmit={this.handleSubmit}
      >
        <div className="flex mb-4 md:mb-0 place-items-center">
          <i class="lab la-github flex mr-3 place-items-center text-5xl"></i>{" "}
          <h1 className="flex justify-center items-center text-2xl">
            Github User's Cards
          </h1>
        </div>
        <div className="flex justify-evenly items-center">
          <input
            className="rounded-lg  p-2 border text-gray-800 border-gray-200 bg-white focus:outline-none focus:shadow-2xl focus:border-gray-400 focus:ring-1 ring-gray-500 focus:ring-opacity-50 "
            type="text"
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
            placeholder="Type a username"
            required
          />
          <button className="ml-4 px-4 rounded-lg bg-black  text-white font-bold py-2 uppercase focus:outline-none focus:shadow-2xl border-black focus:ring-1 ring-black focus:ring-opacity-50 ">
            <i className="text-lg las la-search"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
