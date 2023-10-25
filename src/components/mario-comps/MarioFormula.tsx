import { useState } from 'react';
import { options_array } from '../../types';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function MarioFormula(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false]);
  const [answerKey] = useState({
    question1: 'n',
    question2: 'recurSum(n-1)',
  });

  const options0: options_array[] = [
    {
      value: 'recurSum(n)',
      label: 'recurSum(n)',
    },
    {
      value: 'recurSum(n-2)',
      label: 'recurSum(n-2)',
    },
    {
      value: 'recurSum(n-1)',
      label: 'recurSum(n-1)',
    },
    {
      value: 'recurSum(n+1)',
      label: 'recurSum(n+1)',
    },
  ];

  return (
    <div>
      <KhanCard
        correct="The total sum depends on the number of blocks in the current row, n, and in the rows above, recurSum(n-1)." //explanation for when user gets answer correct
        incorrect="Think about what terms you add together to get the total sum of the current and above rows." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={[0]} //index for what KhanCard you are referring to
      >
        <div>
          recurSum(n) =
          <KhanInput
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
            update_answer={setIsCorrect}
          />
          +
          <Dropdown
            options={options0}
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={1} //index for what KhanCard you are referring to
            answer={answerKey.question2} //the answer from answerkey
            update_answer={setIsCorrect}
          />
        </div>
      </KhanCard>
    </div>
  );
}

export default MarioFormula;
