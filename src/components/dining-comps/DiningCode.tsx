import { useState } from 'react';
import Dropdown from '../../components/shared/Dropdown';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';

function DiningCode(): JSX.Element {
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

  const outputDiv = document.getElementById('output');

  // If you're sure the element exists
  if (outputDiv) {
    const factorialOutput = factorial(5);
    outputDiv.innerHTML = `Factorial of 5 is: ${factorialOutput}`;
  }

  return (
    <FinishCodeCard
      correct="This is an explanation for when you get the answer correct."
      incorrect="This is a hint for when you get the answer incorrect."
      correct_answer={isCorrect}
      index={0}
    >
      <div className="code-component-container">
        <div className="factorial-text">
          <div>In this example, we will use n = 5.</div>
          <div>factorial(n):</div>
          <span>if</span>
          <Dropdown
            options={options0}
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
          />
          <div></div>
          <span>return</span>
          <Dropdown
            options={options1}
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
          />
          <div>return n * factorial(n-1)</div>
        </div>
        <div id="output"></div>
      </div>
    </FinishCodeCard>
  );
}

export default DiningCode;
