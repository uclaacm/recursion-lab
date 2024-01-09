import { useState } from 'react';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function BinaryFormula(): JSX.Element {
  const [isCorrect1, setIsCorrect1] = useState([false, false]);
  const [isCorrect2, setIsCorrect2] = useState([false, false]);
  const [answerKey] = useState({
    question1: 'mid+1',
    question2: 'high',
    question3: 'low',
    question4: 'mid-1',
  });

  return (
    <>
      <KhanCard
        correct="Since we know the target word is greater than the middle value, we reduce the array to the top half."
        incorrect="What does it mean for our target word to be higher than the middle word? What side of the array do we check now?"
        correct_answer={isCorrect1}
        index={[0, 1]}
        name="binary-formula-pt1"
      >
        <div>
          if arr[mid] {'<'} target:
          <br />
          <br />
          return binarySearch{'('}arr, target,
          <KhanInput
            correct_answer={isCorrect1}
            index={0}
            answer={answerKey.question1}
            update_answer={setIsCorrect1}
            name="binary-formula-1"
          />
          ,
          <KhanInput
            correct_answer={isCorrect1}
            index={1}
            answer={answerKey.question2}
            update_answer={setIsCorrect1}
            name="binary-formula-2"
          />
          {')'}
        </div>
      </KhanCard>
      <KhanCard
        correct="Since we know the target word is less than the middle value, we reduce the array to the bottom half."
        incorrect="What does it mean for our target word to be lower than the middle word? What side of the array do we check now?"
        correct_answer={isCorrect2}
        index={[0, 1]}
        name="binary-formula-pt2"
      >
        <div>
          if arr[mid] {'>'} target:
          <br />
          <br />
          return binarySearch{'('}arr, target,
          <KhanInput
            correct_answer={isCorrect2}
            index={0}
            answer={answerKey.question3}
            update_answer={setIsCorrect2}
            name="binary-formula-3"
          />
          ,
          <KhanInput
            correct_answer={isCorrect2}
            index={1}
            answer={answerKey.question4}
            update_answer={setIsCorrect2}
            name="binary-formula-4"
          />
          {')'}
        </div>
      </KhanCard>
    </>
  );
}

export default BinaryFormula;
