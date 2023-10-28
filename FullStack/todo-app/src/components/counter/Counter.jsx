// Import state
import { useState } from "react";

// Add CSS style
import "./Counter.css";
// Do not add parentheses to CounterButton! Only non-default component need it!
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";

export default function Counter() {
    const [count, setCount] = useState(0);
    // Create a parent component method, it will be called by child components
    function incrementCounterParentFunction(by){
        setCount(count + by)//Equals to state[1](state[0] + 1)
    }
    function decrementCounterParentFunction(by){
        setCount(count - by)//Equals to state[1](state[0] + 1)
    }
    function resetCounter(){
        setCount(0);
    }
    

    return( 
    <>
        <span className="totalCount">{count}</span>
        {/* Add properties for calling parent method */}
        <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={3} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <ResetButton resetMethod = {resetCounter}></ResetButton>
    </>
    )
}

