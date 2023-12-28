import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import { Header } from './components/Header/Header';
import { CoreConcept } from './components/CoreConcept/CoreConcept';
import { TabButton } from './components/TabButton/TabButton';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
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
            <TabButton onSelect={() => handleClick('componeents')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSP</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;