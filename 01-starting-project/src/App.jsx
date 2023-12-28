import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import { Header } from './components/Header/Header';
import { CoreConcept } from './components/CoreConcept/CoreConcept';
import { TabButton } from './components/TabButton/TabButton';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('');

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }

  let tabContents = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContents = 
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )};
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => handleClick('jsx')}>
              JSP
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onSelect={() => handleClick('props')}>
              Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onSelect={() => handleClick('state')}>
              State
            </TabButton>
          </menu>
          {tabContents}
        </section>
      </main>
    </>
  );
}

export default App;