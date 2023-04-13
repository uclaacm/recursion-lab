import { useState } from 'react';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function MarioBaseCase(): JSX.Element {
  const [isCorrect] = useState([false, false]); //parent is keeping track of what questions are correct
  const [answerKey] = useState({
    question1: 'answer1',
    question2: 'answer2',
  });

  return (
    <div>
      <KhanCard
        correct="mario stuff correct"
        incorrect="mario stuff incorrect"
        correct_answer={isCorrect}
        index={0}
      >
        <div>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          <KhanInput
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
          />
        </div>
      </KhanCard>
    </div>
  );
}

export default MarioBaseCase;
