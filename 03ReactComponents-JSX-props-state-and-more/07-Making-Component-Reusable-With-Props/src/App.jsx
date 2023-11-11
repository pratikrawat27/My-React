import Header from "./Header.jsx";
import CoreConcept from './CoreConcept.jsx'
// import componentImg from "./assets/components.png";
import {CORE_CONCEPTS} from './data.js'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {/* <CoreConcept title='' description='The core UI building block' img={componentImg}/> */}
          {/* Using dynamic values */}
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].img}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
