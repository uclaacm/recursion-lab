import { useState } from 'react';
import { options_array } from '../../types';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function BinaryBaseCasePt2(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false, false]);
  const [answerKey] = useState({
    question1: 'low',
    question2: '>',
    question3: 'high',
  });

  const options1: options_array[] = [
    {
      value: '<',
      label: '<',
    },
    {
      value: '<=',
      label: '<=',
    },
    {
      value: '>',
      label: '>',
    },
    {
      value: '>=',
      label: '>=',
    },
  ];

  return (
    <KhanCard
      correct="Once the left pointer is on the right of the right pointer, the search is over."
      incorrect="Think about what position of the low & high pointers means the search is over."
      correct_answer={isCorrect}
      index={[0, 1]}
      name="binary-base-case-pt2"
    >
      <div>
        if
        <KhanInput
          correct_answer={isCorrect}
          index={0}
          answer={answerKey.question1}
          update_answer={setIsCorrect}
          name="binary-base-case-pt2-1"
        />
        <Dropdown
          options={options1}
          correct_answer={isCorrect}
          index={1}
          answer={answerKey.question2}
          update_answer={setIsCorrect}
        />
        <KhanInput
          correct_answer={isCorrect}
          index={2}
          answer={answerKey.question3}
          update_answer={setIsCorrect}
          name="binary-base-case-pt2-2"
        />
        :
        <br />
        <br />
        return -1
      </div>
    </KhanCard>
  );
}

export default BinaryBaseCasePt2;
