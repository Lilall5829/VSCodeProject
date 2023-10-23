import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

// How to import non-default component? Put it into braces{} !!!
import { FourthComponent } from "./FirstComponent";
export default function LearnComponents() {
    return (
      <div className="LearnComponents">
        My Todo Application
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
      </div>
    );
  }