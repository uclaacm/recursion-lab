import { useState } from 'react';
import { baseCaseOptions1 } from './dropdown_imports';
import Blue from '../shared/Blue';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
import Tab from '../shared/Tab';

function BinaryBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState<(boolean | null | number)[]>([
    -1, -1,
  ]);
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
      name="binary-base-case"
    >
      <div className="left-align">
        <Blue>if</Blue> target ==
        <Dropdown
          size="large"
          options={baseCaseOptions1}
          correct_answer={isCorrect}
          index={0}
          answer={answerKey.question1}
          update_answer={setIsCorrect}
          name="binary-drop1"
        />
        :
        <br />
        <Tab>
          <>
            <Blue>return </Blue>
            <KhanInput
              size="medium"
              correct_answer={isCorrect}
              index={1}
              answer={answerKey.question2}
              update_answer={setIsCorrect}
              name="binary-base-case-1"
            />
          </>
        </Tab>
      </div>
    </KhanCard>
  );
}

export default BinaryBaseCase;
