import { useState } from 'react';
import Blue from '../shared/Blue';
import Gold from '../shared/Gold';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
import Tab from '../shared/Tab';

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
      >
        <div className="left-align">
          <div>
            <Blue>if</Blue> arr[mid] {'<'} target:
          </div>
          <Tab>
            <>
              <Blue>return</Blue>
              <Gold> binarySearch</Gold>
              {'('}arr, target,{' '}
              <KhanInput
                size="medium"
                correct_answer={isCorrect1}
                index={0}
                answer={answerKey.question1}
                update_answer={setIsCorrect1}
              />
              ,{' '}
              <KhanInput
                size="medium"
                correct_answer={isCorrect1}
                index={1}
                answer={answerKey.question2}
                update_answer={setIsCorrect1}
              />
              {' )'}
            </>
          </Tab>
        </div>
      </KhanCard>
      <KhanCard
        correct="Since we know the target word is less than the middle value, we reduce the array to the bottom half."
        incorrect="What does it mean for our target word to be lower than the middle word? What side of the array do we check now?"
        correct_answer={isCorrect2}
        index={[0, 1]}
      >
        <div className="left-align">
          <Blue>if</Blue> arr[mid] {'>'} target:
          <Tab>
            <>
              <Blue>return</Blue>
              <Gold> binarySearch</Gold>
              {'('}arr, target,{' '}
              <KhanInput
                size="medium"
                correct_answer={isCorrect2}
                index={0}
                answer={answerKey.question3}
                update_answer={setIsCorrect2}
              />
              ,{' '}
              <KhanInput
                size="medium"
                correct_answer={isCorrect2}
                index={1}
                answer={answerKey.question4}
                update_answer={setIsCorrect2}
              />
              {' )'}
            </>
          </Tab>
        </div>
      </KhanCard>
    </>
  );
}

export default BinaryFormula;
