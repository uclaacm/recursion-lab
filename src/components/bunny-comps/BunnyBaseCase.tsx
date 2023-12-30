import { useState } from 'react';
import './StylesBunny.scss';
import { baseCaseOptions1 } from './dropdown_imports';
import Blue from '../shared/Blue';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
import Tab from '../shared/Tab';

function BunnyBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]);
  const [answerKey] = useState({
    question1: 'n <= 1',
    question2: 'n',
  });

  return (
    <KhanCard
      correct="The fibonacci sequence should end at 1! which is 1. Thus, we return the value n itself."
      incorrect="Think about what number is the last number to multiply within the factorial computation. That is the base case value. What does it return?"
      correct_answer={isCorrect}
      index={[0, 1]}
    >
      <div className="left-align">
        <Blue>if</Blue>
        <Dropdown
          size="medium"
          options={baseCaseOptions1}
          correct_answer={isCorrect}
          index={0}
          answer={answerKey.question1}
          update_answer={setIsCorrect}
        />
        :
        <Tab>
          <>
            <Blue>return </Blue>
            <KhanInput
              size="small"
              correct_answer={isCorrect}
              index={1}
              answer={answerKey.question2}
              update_answer={setIsCorrect}
            />
          </>
        </Tab>
      </div>
    </KhanCard>
  );
}

export default BunnyBaseCase;
