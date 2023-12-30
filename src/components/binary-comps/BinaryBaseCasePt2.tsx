import { useState } from 'react';
import { baseCaseOptions2 } from './dropdown_imports';
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

  return (
    <KhanCard
      correct="Once the left pointer is on the right of the right pointer, the search is over."
      incorrect="Think about what position of the low & high pointers means the search is over."
      correct_answer={isCorrect}
      index={[0, 1]}
    >
      <div>
        if
        <KhanInput
          correct_answer={isCorrect}
          index={0}
          answer={answerKey.question1}
          update_answer={setIsCorrect}
        />
        <Dropdown
          options={baseCaseOptions2}
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
