import "./App.css";
import { Component } from "react";
// App is the parent component of all other components. So don't forget to add child components into it!!!
// App and FirstComponent are called "function components"
function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}
function FirstComponent() {
  return <div className="FirstComponent">First Component</div>;
}
// SecondComponet is a class component whose syntax is different from function component
// Extends from Component. This class should be imported from react
// No parentheses after class name!
class SecondComponent extends Component {
  render() {
    return <div className="SecondComponent">Second Component</div>;
  }
}
export default App;
