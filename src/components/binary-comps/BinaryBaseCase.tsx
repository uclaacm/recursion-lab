import { useState } from 'react';
import { baseCaseOptions1 } from './dropdown_imports';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function BinaryBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]);
  const [answerKey] = useState({
    question1: 'arr[mid]',
    question2: 'mid',
  });

  return (
    <KhanCard
      correct="Every iteration we are reducing the array into half based on the middle value."
      incorrect="Think about what position in the array we are searching for at every iteration."
      correct_answer={isCorrect}
      index={[0, 1]}
    >
      <div>
        if target ==
        <Dropdown
          options={baseCaseOptions1}
          correct_answer={isCorrect}
          index={0}
          answer={answerKey.question1}
          update_answer={setIsCorrect}
        />
        :
        <br />
        <br />
        return
        <KhanInput
          correct_answer={isCorrect}
          index={1}
          answer={answerKey.question2}
          update_answer={setIsCorrect}
        />
      </div>
    </KhanCard>
  );
}

export default BinaryBaseCase;
