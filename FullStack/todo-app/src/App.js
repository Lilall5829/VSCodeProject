import "./App.css";
//import components from other files
// import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";

// import LearnComponents from "./components/examples/LearnComponents";
// App is the parent component of all other components. So don't forget to add child components into it!!!
// Each component in its own file(or module)
// App and FirstComponent are called "function components"
// The first tag must be in the same line as return, or you need to add parenthese after return as following:
function App() {
  return (
    <div className="App">
      {/* <LearnComponents></LearnComponents> */}
      {/* Add properties */}
      {/* <PlayingWithProps
        property1="value1"
        property2="value2"
      ></PlayingWithProps> */}
      {/* If you want to pass a number, it must be included by{}! */}
      {/* <Counter></Counter> */}
      <TodoApp></TodoApp>
    </div>
  );
}
// Invoke properties
// Method 1
// function PlayingWithProps(properties) {
//   console.log(properties);
//   console.log(properties.property1);
//   console.log(properties.property2);
//   return <div>Props</div>;
// }
// Method 2, use {} to include properties
// function PlayingWithProps({ property1, property2 }) {
//   console.log(property1);
//   console.log(property2);
//   return <div>Props</div>;
// }

// SecondComponet is a class component whose syntax is different from function component
// Extends from Component. This class should be imported from react
// No parentheses after class name!
// class SecondComponent extends Component {
//   render() {
//     return <div className="SecondComponent">Second Component</div>;
//   }
// }
export default App;
