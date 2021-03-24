import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div className="inputStyle">
      <form onSubmit={props.submit}>
        <p className="usernameInput">Please input your username: </p>
        <input
          type="text"
          className="inputBox"
          value={props.username}
          onChange={props.changed}
        />
        <button type="submit" className="userInputSubmit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default userInput;
