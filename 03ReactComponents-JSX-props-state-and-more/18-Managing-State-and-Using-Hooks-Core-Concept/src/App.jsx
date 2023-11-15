import Header from "./component/Header.jsx";
import CoreConcept from "./component/CoreConcept.jsx";
// import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./component/TabButton.jsx";
import { useState } from "react";

function App() {
  // Passing Functions as Values to Props
  const [selectedTopic, setSelectedTopic] = useState("Please click on the button");
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept title='' description='The core UI building block' img={componentImg}/> */}
            {/* Using dynamic values */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].img}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("Props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("State")}>State</TabButton>
            {/* <TabButton label="Components" /> */}
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
