import "./App.css";
import LearnComponents from "./components/examples/LearnComponents";
//import components from other files

// App is the parent component of all other components. So don't forget to add child components into it!!!
// Each component in its own file(or module)
// App and FirstComponent are called "function components"
// The first tag must be in the same line as return, or you need to add parenthese after return as following:
function App() {
  return (
    <div className="App">
      <LearnComponents></LearnComponents>
    </div>
  );
}

// SecondComponet is a class component whose syntax is different from function component
// Extends from Component. This class should be imported from react
// No parentheses after class name!
// class SecondComponent extends Component {
//   render() {
//     return <div className="SecondComponent">Second Component</div>;
//   }
// }
export default App;
