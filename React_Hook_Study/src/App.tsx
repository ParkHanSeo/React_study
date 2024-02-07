import React, { useState } from 'react';
import { Footer } from './Hook/Footer';
import '../src/index.css';

import { UseState } from './Hook/UseState/UseState';

const App = () => {

  const [studyType, setStudyType] = useState<string>();

  const hookTypeClickHandle = (type:string) => {
    setStudyType(type);
  }

  return (
    <>
      {studyType === '' || studyType === undefined ? 
        <div className='container'>
          <div className='centerContainer'>
            <div>
              <h3>State Hooks</h3>
              <ul>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseState")}>useState</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseRef")}>useRef</button>
                </li>
              </ul>
            </div>
            <div>
              <h3>Context Hooks</h3>
              <ul>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseContext")}>useContext</button>
                </li>
              </ul>
            </div>
            <div>
              <h3>Ref Hooks</h3>
              <ul>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseRef")}>useRef</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseImperativeHandle")}>useImperativeHandle</button>
                </li>          
              </ul>
            </div> 
          </div>
          <div className='centerContainer'>
          <div>
              <h3>Effect Hooks</h3>
              <ul>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseEffect")}>useEffect</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseLayoutEffect")}>useLayoutEffect</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseInsertionEffect")}>useInsertionEffect</button>
                </li>
              </ul>
            </div>    
            <div>
              <h3>Performance Hooks</h3>
              <ul>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseMemo")}>useMemo</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseCallback")}>useCallback</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseTransition")}>useTransition</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseDeferredValue")}>useDeferredValue</button>
                </li>          
              </ul>
            </div>          
            <div>
              <h3>Other Hooks</h3>
              <ul>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseDebugValue")}>useDebugValue</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseId")}>useId</button>
                </li>
                <li>
                  <button onClick={() => hookTypeClickHandle("UseSyncExternalStore")}>useSyncExternalStore</button>
                </li>        
              </ul>
            </div>
          </div>
        </div> : 
        <div className='container'>
          {studyType === 'UseState' && <UseState />}
          <Footer hookTypeClickHandle={hookTypeClickHandle}/>
        </div>
      }
    </>
  );
}

export default App;
