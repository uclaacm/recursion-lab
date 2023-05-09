// Using this to test the recursion formula component
import { useState } from 'react';
import Dropdown from '../components/shared/Dropdown';
import FinishCodeCard from '../components/shared/FinishCode';
import { options_array } from '../types';

function RecursionFormula(): JSX.Element {
  const [isCorrect] = useState([false]);
  const [answerKey] = useState({
    question1: 'dropdown2',
  });

  const options0: options_array[] = [
    {
      value: 'dropdown1',
      label: 'n==0',
    },
    {
      value: 'dropdown2',
      label: 'n==1',
    },
    {
      value: 'dropdown3',
      label: 'n==2',
    },
  ];
  const options1: options_array[] = [
    {
      value: 'dropdown1',
      label: '0',
    },
    {
      value: 'dropdown2',
      label: '1',
    },
    {
      value: 'dropdown3',
      label: '2',
    },
  ];
  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  let outputDiv = document.getElementById('output');
  
  // If you're sure the element exists
  if (outputDiv) {
    let factorialOutput = factorial(5);
    outputDiv.innerHTML = `Factorial of 5 is: ${factorialOutput}`;
  }
  
  return (
    <div>
      <FinishCodeCard
        correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
        incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={0} //index for what KhanCard you are referring to
      >
          <div className="Card-Container">
            <div className="Factorial-Text">
              <div>In this example, we will use n = 5.</div>
              <div>factorial(n):</div>
              <span>if</span>
              <Dropdown
                options={options0}
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question1} //the answer from answerkey
              />
              <div></div>
              <span>return</span>
              <Dropdown
                options={options1}
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question1} //the answer from answerkey
              />
              <div>return n * factorial(n-1)</div>
            </div>
              <div id="output"></div> 
          </div>
          </FinishCodeCard>
    </div>
  );
}

export default RecursionFormula;
