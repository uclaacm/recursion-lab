import { useState } from 'react';
import Gold from '../shared/Gold';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function BunnyFormula(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]);
  const [answerKey] = useState({
    question1: 'fib(n-1)',
    question2: 'fib(n-2)',
  });

  return (
    <KhanCard
      correct="The fibonacci sequence depends on both fib(n-1) and fib(n-2)."
      incorrect="Think about what terms you add to get the nth number."
      correct_answer={isCorrect}
      index={[0, 1]}
    >
      <div>
        <Gold>fib</Gold>(n) = <Gold>fib</Gold>
        {'( '}
        <KhanInput
          size="small"
          correct_answer={isCorrect}
          index={0}
          answer={answerKey.question1}
          update_answer={setIsCorrect}
        />
        {' )'} + <Gold>fib</Gold>
        {'( '}
        <KhanInput
          size="small"
          correct_answer={isCorrect}
          index={1}
          answer={answerKey.question2}
          update_answer={setIsCorrect}
        />
        {' )'}
      </div>
    </KhanCard>
  );
}
export default BunnyFormula;
