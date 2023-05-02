// Using this to test the recursion formula component 
import { useState } from 'react';
import { options_array } from '../types';
import Dropdown from '../components/shared/Dropdown';
import FinishCodeCard from '../components/shared/FinishCode';

function RecursionFormula(): JSX.Element {
  const [isCorrect] = useState([false]);
  const [answerKey] = useState({
    question1: 'dropdown2',
  });

  const options0: options_array[] = [
    {
      value: 'dropdown1',
      label: 'dropdown1',
    },
    {
      value: 'dropdown2',
      label: 'dropdown2',
    },
    {
      value: 'dropdown3',
      label: 'dropdown3',
    },
  ];

  return (
    <div>
      <FinishCodeCard
        correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
        incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={0} //index for what KhanCard you are referring to
      >
        <div>
          <span>
            factorial(n):
          </span>
          <span>if</span>
          <Dropdown
            options={options0}
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={0} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
          />
          <span>return</span>          
           <Dropdown
            options={options0}
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={0} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
          />
          <span>return n * factorial(n-1)</span>
        </div>
      </FinishCodeCard>
    </div>
  );
}

export default RecursionFormula;
