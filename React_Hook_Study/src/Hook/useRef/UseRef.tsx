import React, { useState, useRef } from "react";
import styles from './UseRef.module.scss';

export const UseRef: React.FC<{}> = () => {

    const ref = useRef(0);

    const handleClick = () => {
        ref.current = ref.current +1;
        console.log(ref.current);
    }
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    let varCount = 0;
  
    const upState = () => {
      setStateCount(stateCount + 1);
      console.log("stateCount : ", stateCount);
    }
  
    const upRef = () => {
      ++refCount.current;
      console.log("refCount : ", refCount.current);
    }
  
    const upVar = () => {
      ++varCount;
      console.log("varCount : ", varCount);
    }

    const slowDownVar = () => {
        ++varCount;
        console.log("varCount : ", varCount);
    }
    return (
        <div>
            <ul className={styles.useRefUl}>
                <li>
                    <button onClick={handleClick}>Click</button>
                </li>
                <li>
                    <div>stateCount : {stateCount} </div>
                    <div>refCount : {refCount.current} </div>
                    <div>varCount : {varCount} </div>
                    <br />
                    <button onClick={upState}>state up</button>
                    <button onClick={upRef}>ref up</button>
                    <button onClick={upVar}>var up</button>
                </li>
            </ul>
        </div>
    );
}