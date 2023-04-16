import { useState } from 'react';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

/*
How to use the KhanCard and corresponding KhanInput component:
  KhanCard = wrapper box that holds the content that you want displayed
  KhanInput = a styled input box
  NOTE: parent component (MarioBaseCase) holds state that KhanCard and KhanInput will be using
*/

function MarioBaseCase(): JSX.Element {
  const [isCorrect] = useState([false, false]); //state for if questions are correct
  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: 'answer1',
    question2: 'answer2',
  });

  return (
    <div>
      <KhanCard
        correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
        incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={0} //index for what KhanCard you are referring to
      >
        <div>
          <span>
            This is a sample way to use fill in the blank. The answer for this
            input is &quot;answer1&quot;. Try it out! The answer for this input
            is
          </span>
          <KhanInput
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={0} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
          />
          .
        </div>
      </KhanCard>
    </div>
  );
}

export default MarioBaseCase;
