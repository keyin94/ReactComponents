import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = (props) => {
  const [userInput, setUserInput] = useState({
    username: "default_username",
  });

  const [userOutput, setUserOutput] = useState({
    username: "default_username",
  });

  const inputUsernameHandler = (event) => {
    setUserInput({
      username: event.target.value,
    });
  };

  const submitUsernameHandler = (event) => {
    console.log(userInput);
    setUserOutput({
      username: userInput.username,
    });
    event.preventDefault();
  };

  const style = {
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <div className="App">
      <h2 className="headerAssign">This is React Section 3 Assignment</h2>
      <div className="requirements">
        <p style={style}>Requirements: </p>
        <p>1. Create TWO new components: UserInput and UserOutput</p>
        <p>
          2. UserInput should hold an input element, UserOutput two paragraphs
        </p>
        <p>
          3. Output multiple UserOutput components in the App component (any
          paragraph texts of your choice)
        </p>
        <p>
          4. Pass a username (of your choice) to UserOutput via props and
          display it there
        </p>
        <p>
          5. Add state to the App component (=> the username) and pass the
          username to the UserOutput component
        </p>
        <p>
          6. Add a method to manipulate the state (=> an event-handler method)
        </p>
        <p>
          7. Pass the event-handler method reference to the UserInput component
          and bind it to the input-change event
        </p>
        <p>
          8. Ensure that the new input entered by the user overwrites the old
          username passed to UserOutput
        </p>
        <p>
          9. Add two-way-binding to your input (in UserInput) to also display
          the starting username
        </p>
        <p>
          10. Add styling of your choice to your components/ elements in the
          components - both with inline styles and stylesheets
        </p>
      </div>
      <div className="userSection">
        <UserInput
          username={userInput.username}
          submit={submitUsernameHandler}
          changed={inputUsernameHandler}
        />
        <UserOutput username={userOutput.username} />
        <UserOutput username={userOutput.username} />
      </div>
    </div>
  );
};

export default App;
