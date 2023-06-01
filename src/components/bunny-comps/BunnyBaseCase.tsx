import { useState } from 'react';
import { options_array } from '../../types';
import './StylesBunny.scss';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function BunnyBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]);
  const [answerKey] = useState({
    question1: 'n <= 1',
    question2: 'n',
  });

  const options2: options_array[] = [
    {
      value: 'n <= 1',
      label: 'n <= 1',
    },
    {
      value: 'n > 1',
      label: 'n > 1',
    },
    {
      value: 'n < 1',
      label: 'n < 1',
    },
  ];

  return (
    <KhanCard
      correct="The fibonacci sequence should end at 1! which is 1. Thus, we return the value n itself."
      incorrect="Think about what number is the last number to multiply within the factorial computation. That is the base case value. What does it return?"
      correct_answer={isCorrect}
      index={[0, 1]}
    >
      <div>
        if
        <Dropdown
          options={options2}
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

export default BunnyBaseCase;
