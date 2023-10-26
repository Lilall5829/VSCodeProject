// Import state
import { useState } from "react";
//Import PropTypes
import {PropTypes} from "prop-types";
// Add CSS style
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    // Create a parent component method, it will be called by child components
    function incrementCounterParentFunction(by){
        setCount(count + by)//Equals to state[1](state[0] + 1)
    }
    function decrementCounterParentFunction(by){
        setCount(count - by)//Equals to state[1](state[0] + 1)
    }
    

    return( 
    <>
        <span className="totalCount">{count}</span>
        {/* Add properties for calling parent method */}
        <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={3} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
    </>
    )
}

// Invoke properties
// Call parent componet method, notice: when you pass properties as parameters, they should be included in {}!!!
function CounterButton({by,incrementMethod,decrementMethod}){
    //Introduce "state", it will return an array including state[0](value) and state[1](function)
    //Initialize state[0] by 0
    // const state = useState(0);
    // Deconstruct array state to count and setCount
    const [count, setCount] = useState(0);

    console.log(by);

    function incrementCounterFunction(){
        // Child component +
        setCount(count + by)
        // Parent component +
        incrementMethod(by);
    }
    function decrementCounterFunction(){
        setCount(count - by)
        decrementMethod(by);
    }

    return(
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            {/* map a function by {function name} to "onClick"*/}
            <div>            
                <button className="counterButton" onClick={incrementCounterFunction}
                >+{by}</button>
            </div>

            <div>            
                <button className="counterButton" onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>
    )
}

// Set property type for function
CounterButton.propTypes = {
    // Only number be allowed to assign to "by"
    by: PropTypes.number
}
// Set default property type for function
CounterButton.defaultProps = {
    // Only number be allowed to assign to "by"
    by: 5
}