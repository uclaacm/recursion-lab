import { useState } from 'react';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function DiningFormula(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]);

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
      >
        <div>
          <div>
            <p>
              left_sum = post_order_sum(
              <KhanInput
                correct_answer={isCorrect}
                index={0}
                answer={answerKey.question1}
                update_answer={setIsCorrect}
              />
              )
              <br />
              <br />
              right_sum = post_order_sum(
              <KhanInput
                correct_answer={isCorrect}
                index={1}
                answer={answerKey.question2}
                update_answer={setIsCorrect}
              />
              )
            </p>
          </div>
        </div>
      </KhanCard>
    </div>
  );
}

export default DiningFormula;
