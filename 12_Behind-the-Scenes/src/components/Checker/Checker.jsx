import { useState, useMemo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import { log } from '../../log.js';

function isPrime(number) {
    log(
      'Calculating if is prime number',
      2,
      'other'
    );
    if (number <= 1) {
      return false;
    }
  
    const limit = Math.sqrt(number);
  
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

export const Checker = () => {
    return(
        <section className="counter">
        <p className="counter-info">
          The initial counter value was <strong>{initialCount}</strong>. It{' '}
          <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
        </p>
        </section>
    );
};