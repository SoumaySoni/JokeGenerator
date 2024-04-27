// Button.js

import React from "react";
import "./Button.css";

const Button = (props) => {
    const {callApi} = props  // Destructuring...
    return <button onClick={callApi}>Click to generate a joke.</button>;
};

// Export Button Component
export default Button;
