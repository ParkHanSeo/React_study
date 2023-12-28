import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import { Header } from './components/Header/Header'
import { CoreConcept } from './components/CoreConcept/CoreConcept'
import { TabButton } from './components/TabButton/TabButton'

function App() {
  const handleClick = () => {
    console.log("check")
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton onSelect={handleClick}>JSP</TabButton>
            <TabButton onSelect={handleClick}>Props</TabButton>
            <TabButton onSelect={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;