import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  const style = {
    fontSize: "16px",
    fontStyle: "italic",
  };

  return (
    <div className="userOutput">
      <p style={style}>Username: {props.username}</p>
      <p>
        Life is a ripple in a pond, and you are the rock. You have the power to
        control reality, even if you are just a speck of dust in a infinite
        universe. You have the power to make others laugh, hurt, cry, and yell.
        You can create who you are.
      </p>
      <p>
        Life is a series of events, one following another. Life is something you
        can never escape from, no matter what you do. Life is what keeps you
        awake at dawn, when the early morning light is just starting to peek
        through the fluffy clouds in the sky.
      </p>
    </div>
  );
};

export default userOutput;
