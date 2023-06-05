import { useState } from 'react';
import { options_array } from '../../types';

import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';

function BunnyCode(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false, false]);
  const [answerKey] = useState({
    question1: 'n <= 1',
    question2: 'n',
    question3: 'fib(n-1) + fib(n-2)',
  });

  const options1: options_array[] = [
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
  const options2: options_array[] = [
    {
      value: '0',
      label: '0',
    },
    {
      value: '1',
      label: '1',
    },
    {
      value: 'n',
      label: 'n',
    },
  ];

  const options3: options_array[] = [
    {
      value: 'n + fib(n-1)',
      label: 'n + fib(n-1)',
    },
    {
      value: 'fib(n-1) * fib(n-2)',
      label: 'fib(n-1) * fib(n-2)',
    },
    {
      value: 'fib(n-1) + fib(n-2)',
      label: 'fib(n-1) + fib(n-2)',
    },
  ];

  return (
    <div>
      <KhanCard
        correct="Put the base case and calculate fib(n) by adding fib(n-1) and fib(n-2)"
        incorrect="Combine the 2 code from `base case` and `recursive formula` into your answer."
        correct_answer={isCorrect}
        index={[0, 1, 2]}
      >
        <div>
          def fib(n):
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          if
          <Dropdown
            options={options1}
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
            update_answer={setIsCorrect}
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return
          <Dropdown
            options={options2}
            correct_answer={isCorrect}
            index={1}
            answer={answerKey.question2}
            update_answer={setIsCorrect}
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return
          <Dropdown
            options={options3}
            correct_answer={isCorrect}
            index={2}
            answer={answerKey.question3}
            update_answer={setIsCorrect}
          />
        </div>
      </KhanCard>
    </div>
  );
}
export default BunnyCode;
