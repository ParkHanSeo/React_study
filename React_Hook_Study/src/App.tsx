import React, { useState } from 'react';
import '../src/index.css';

const App = () => {

  const [studyType, setStudyType] = useState<string>();

  return (
    <div className='container'>
      <div className='centerContainer'>
        <div>
          <h3>State Hooks</h3>
          <ul>
            <li>
              <button>useState</button>
            </li>
            <li>
              <button>useRef</button>
            </li>
          </ul>
        </div>
        <div>
          <h3>Context Hooks</h3>
          <ul>
            <li>
              <button>useContext</button>
            </li>
          </ul>
        </div>
        <div>
          <h3>Ref Hooks</h3>
          <ul>
            <li>
              <button>useRef</button>
            </li>
            <li>
              <button>useImperativeHandle</button>
            </li>          
          </ul>
        </div> 
      </div>
      <div className='centerContainer'>
      <div>
          <h3>Effect Hooks</h3>
          <ul>
            <li>
              <button>useEffect</button>
            </li>
            <li>
              <button>useLayoutEffect</button>
            </li>
            <li>
              <button>useInsertionEffect</button>
            </li>
          </ul>
        </div>    
        <div>
          <h3>Performance Hooks</h3>
          <ul>
            <li>
              <button>useMemo</button>
            </li>
            <li>
              <button>useCallback</button>
            </li>
            <li>
              <button>useTransition</button>
            </li>
            <li>
              <button>useDeferredValue</button>
            </li>          
          </ul>
        </div>          
        <div>
          <h3>Other Hooks</h3>
          <ul>
            <li>
              <button>useDebugValue</button>
            </li>
            <li>
              <button>useId</button>
            </li>
            <li>
              <button>useSyncExternalStore</button>
            </li>        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
