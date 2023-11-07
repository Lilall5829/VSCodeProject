// Import state
// import { useState } from "react";
//Import PropTypes
import { PropTypes } from "prop-types";

// Invoke properties
// Call parent componet method, notice: when you pass properties from parents componets as child's parameters, they should be included in {}!!!
// The following three props from parents componet(Counter.jsx)
export default function CounterButton({
  by,
  incrementMethod,
  decrementMethod,
}) {
  //Introduce "state", it will return an array including state[0](value) and state[1](function)
  //Initialize state[0] by 0
  // const state = useState(0);
  // Deconstruct array state to count and setCount
  // const [count, setCount] = useState(0);

  // function incrementCounterFunction(){
  // Child component +
  // setCount(count + by)
  // Parent component +
  //     incrementMethod(by);
  // }
  // function decrementCounterFunction(){
  //     // setCount(count - by)
  //     decrementMethod(by);
  // }

  return (
    <div className="Counter">
      {/* <span className="count">{count}</span> */}
      {/* map an arrow function to "onClick", NOTICE: You have to use arrow functions, or you cannot call parent methods directly!!!*/}
      <button className="counterButton" onClick={() => incrementMethod(by)}>
        +{by}
      </button>
      <button className="counterButton" onClick={() => decrementMethod(by)}>
        -{by}
      </button>
    </div>
  );
}

// Set property type for function
CounterButton.propTypes = {
  // Only number be allowed to assign to "by"
  by: PropTypes.number,
};
// Set default property type for function
CounterButton.defaultProps = {
  // Only number be allowed to assign to "by"
  by: 5,
};
