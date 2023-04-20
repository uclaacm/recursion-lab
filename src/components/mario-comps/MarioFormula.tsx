import { useState } from 'react';
import { options_array } from '../../types';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';

function MarioFormula(): JSX.Element {
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
      <KhanCard
        correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
        incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={0} //index for what KhanCard you are referring to
      >
        <div>
          <span>
            This is a sample way to use fill in the blank. The answer for this
            input is &quot;dropdown2&quot;. Try it out! The answer for this
            input is
          </span>
          <Dropdown
            options={options0}
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={0} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
          />
          .
        </div>
      </KhanCard>
    </div>
  );
}

export default MarioFormula;
