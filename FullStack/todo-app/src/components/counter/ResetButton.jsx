export default function ResetButton({resetMethod}){
    // function resetCounter(){
    //     resetMethod();
    // }
    return(
        <div className="Counter">
            <button className="resetButton" onClick={()=>resetMethod()}>Reset</button>
        </div>
    )
}