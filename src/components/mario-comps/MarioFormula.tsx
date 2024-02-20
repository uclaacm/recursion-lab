import { useState } from 'react';
import { formulaOptions1 } from './dropdown_imports';
import Dropdown from '../shared/Dropdown';
import Gold from '../shared/Gold';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function MarioFormula(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false]);
  const [answerKey] = useState({
    question1: 'n',
    question2: 'n-1',
  });

  return (
    <div>
      <KhanCard
        correct="The total sum depends on the number of blocks in the current row, n, and in the rows above, recurSum(n-1)." //explanation for when user gets answer correct
        incorrect="Think about what terms you add together to get the total sum of the current and above rows." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={[0]} //index for what KhanCard you are referring to
        name="mario-formula"
      >
        <div>
          <Gold>recurSum</Gold>(n) ={' '}
          <KhanInput
            size="medium"
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
            update_answer={setIsCorrect}
            name="mario-formula"
          />{' '}
          +<Gold> recurSum</Gold>(
          <Dropdown
            size="medium"
            options={formulaOptions1}
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={1} //index for what KhanCard you are referring to
            answer={answerKey.question2} //the answer from answerkey
            update_answer={setIsCorrect}
            name="mario-drop5"
          />
          )
        </div>
      </KhanCard>
    </div>
  );
}

export default MarioFormula;
