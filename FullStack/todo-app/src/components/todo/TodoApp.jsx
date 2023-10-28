import { useState } from "react"
import "./TodoApp.css"
export default function TodoApp(){
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent></LoginComponent>
            <WelcomeComponent></WelcomeComponent>
        </div>
    )
    function LoginComponent(){

        const[username, setUsername] = useState('lila')
        const[password, setPassword] = useState('')
        const[showSuccessMessage, setShowSuccessMessage] = useState(false)
        const[showErrorMessage, setShowErrorMessage] = useState(false)

        function handleUsernameChange(event){
            setUsername(event.target.value)
        }

        function handlePasswordChange(event){
            setPassword(event.target.value)
        }
        function handleSubmit(){
            // add a hard code authentication
            if(username === 'lila' && password === '123'){
                console.log('Success');
                setShowSuccessMessage(true)
                setShowErrorMessage(false)
            } else{
                console.log('Failed');
                setShowSuccessMessage(false)
                setShowErrorMessage(true)
            }
        }
        // Use short-circuit to simplify the following code
        // function SuccessMessageComponet(){
        //     if(showSuccessMessage)
        //     return(
        //         <div className="successMessage">Authenticated Successfully</div>
        //     )
        //     return null
        // }
        // function ErrorMessageComponet(){
        //     if(showErrorMessage)
        //     return(
        //         <div className="errorMessage">Authentication Failed. Please check your creadenials.</div>
        //         )
        //     return null
        // }

        return (
            <div className="Login">
                <div className="LoginForm">
                    {/* Short-circuit   */}
                    {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
                    {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your creadenials.</div>}
                    {/* <SuccessMessageComponet></SuccessMessageComponet> */}
                    {/* <ErrorMessageComponet></ErrorMessageComponet> */}
                    <div>
                        <label htmlFor="">Username</label>
                        {/* Use value to authenticate user and password and call onChange */}
                        {/* When you pass value, you must also pass an onChange handler that updates the passed value. */}
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                    </div>
                    <div>
                        <button type="button" name="login" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
                Login Component 
            </div>
        )
    }



    function WelcomeComponent(){
        return (
            <div className="Welcome">
                Welcome Component 
            </div>
        )
    }
}