import { useState } from 'react';
import Gold from '../shared/Gold';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function DiningFormula(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState<(boolean | null | number)[]>([
    -1, -1,
  ]);

  const [answerKey] = useState({
    question1: 'friend.left',
    question2: 'friend.right',
  });

  return (
    <div>
      <KhanCard
        correct="This determines the time taken from both the left and right Friends"
        incorrect="Think about the Friend data structure. What are we traversing?"
        correct_answer={isCorrect}
        index={[0, 1]}
        name="dining-formula"
      >
        <div>
          <div>
            <p>
              left_sum = <Gold>post_order_sum</Gold>
              {'( '}
              <KhanInput
                size="large"
                correct_answer={isCorrect}
                index={0}
                answer={answerKey.question1}
                update_answer={setIsCorrect}
                name="dining-formula-1"
              />
              {' )'}
              <br />
              right_sum = <Gold>post_order_sum</Gold>
              {'( '}
              <KhanInput
                size="large"
                correct_answer={isCorrect}
                index={1}
                answer={answerKey.question2}
                update_answer={setIsCorrect}
                name="dining-formula-2"
              />
              {' )'}
            </p>
          </div>
        </div>
      </KhanCard>
    </div>
  );
}

export default DiningFormula;
