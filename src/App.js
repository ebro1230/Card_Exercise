import React, { useState } from "react";
import "./styles.css";
import DesignSelect from "./components/DesignSelect";
import Card from "./components/Card";

export default function App() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [bgColor, setBgColor] = useState("808080");

  const handleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const handleChangeBg = (e) => {
    setBgColor(e.target.value);
  };

  const myCard = {
    firstName: "Max",
    lastName: "Mustermann",
    company: "WBS",
    role: "Instructor",
    email: "max@wbscodingschool.com",
    imageUrl: "/images/image0.jpg",
  };

  return (
    <div className="App">
      <div className="block" id="instructions">
        {showInstructions ? (
          <button onClick={handleInstructions}>Hide instructions</button>
        ) : (
          <button onClick={handleInstructions}>Show instructions</button>
        )}
        <br />
        {showInstructions && (
          <>
            In this exercise you will have to:
            <ul>
              <li>
                Create a component <b>Card</b> and add (+ import) it into your{" "}
                <b>App.js</b>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactjs.org/docs/components-and-props.html"
                >
                  Help
                </a>
                <br />
              </li>
              <li>
                Your <b>Card component</b> should hold the users' image and
                details. <br />
                Create two components for this information and add them to your{" "}
                <b>Card component</b>.
              </li>
              <li>
                Pass all the necessary information you'll find in <b>App.js</b>{" "}
                as props to the components.
              </li>
              <li>
                In <b>App.js</b> you will find a state. <br />
                Per default it has the color HEX code for grey (#808080) as it's
                value.
                <br />
                Pass the state as props to your <b>Card component</b> and use it
                to change your cards' background color.
              </li>

              <li>
                (Optional) Try to change the state with the{" "}
                <b>DesignSelect component</b>. <br />
                We already provide a function <b>handleChangeBg</b> which could
                become useful.
              </li>
              <li>
                (Optional) However when you add different possible colors it
                could become difficult to read the text. <br />
                Perhaps you want your user to be able to change it according to
                the background.
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="block">
        <div className="designSelect">
          <DesignSelect handleChangeBg={handleChangeBg} />
        </div>
        <Card myCard={myCard} background={bgColor} />
      </div>
    </div>
  );
}
