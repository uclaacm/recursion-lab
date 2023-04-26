import { useState } from 'react';
import './StylesBunny.scss';
import UnderstandingQuestion from '../../assets/bunnies/UnderstandingQuestion.png';

import KhanCard from '../shared/KhanCard';
function UnderstandingProblem(): JSX.Element {
  const [isCorrect] = useState([false, false]);

  return (
    <KhanCard
      correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
      incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
      correct_answer={isCorrect} //must pass in correctness state from parent
      index={0} //index for what KhanCard you are referring to
    >
      <div className="understanding-problem">
        <div className="question">
          <p>
            What is the nth number of rabbits?
            <input />
          </p>
        </div>
        <div className="questionImage">
          <img src={UnderstandingQuestion} alt="" style={{ width: '100%' }} />
        </div>
        <br />
        <button className="submit-button"> Submit </button>
      </div>
    </KhanCard>
  );
}
export default UnderstandingProblem;
