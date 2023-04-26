import { useState } from 'react';
import './StylesBunny.scss';
import UnderstandingQuestion from '../../assets/bunnies/UnderstandingQuestion.png';
import KhanInput from '../shared/KhanInput';
import KhanCard from '../shared/KhanCard';

function UnderstandingProblem(): JSX.Element {
  const [isCorrect] = useState([false, false]);
  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: '8',
  });

  return (
    <KhanCard
      correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
      incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
      correct_answer={isCorrect} //must pass in correctness state from parent
      index={[0]} //index for what KhanCard you are referring to
    >
      <div className="understanding-problem">
        <div className="question">
          <p>
            What is the nth number of rabbits?
            <KhanInput
              correct_answer={isCorrect} //must pass in correctness state from parent
              index={0} //index for what KhanCard you are referring to
              answer={answerKey.question1} //the answer from answerkey
            />
          </p>
        </div>
        <div className="questionImage">
          <img src={UnderstandingQuestion} alt="" style={{ width: '100%' }} />
        </div>
      </div>
    </KhanCard>
  );
}
export default UnderstandingProblem;
