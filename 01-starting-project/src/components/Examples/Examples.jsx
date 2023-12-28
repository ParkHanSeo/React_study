import { useState } from 'react';

import { EXAMPLES } from '../../data';
import { TabButton } from '../TabButton/TabButton';
import { Tabs } from '../TabButton/Tabs';
import { Section } from '../Section';

import './Examples.css'

export const Examples = () => {

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
        <Section title="Examples" id="examples">
          <Tabs buttons={
            <>
              <TabButton 
                isSelected={selectedTopic === 'components'} 
                onClick={() => handleClick('components')}>
                Components
              </TabButton>
              <TabButton 
                isSelected={selectedTopic === 'jsx'} 
                onClick={() => handleClick('jsx')}>
                JSP
              </TabButton>
              <TabButton 
                isSelected={selectedTopic === 'props'} 
                onClick={() => handleClick('props')}>
                Props
              </TabButton>
              <TabButton 
                isSelected={selectedTopic === 'state'} 
                onClick={() => handleClick('state')}>
                State
              </TabButton>
            </>
          }>
            {tabContents}
          </Tabs>
          <menu>
          </menu>
        </Section>        
    )
}