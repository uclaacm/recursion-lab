import { useState } from 'react';
import { options_array } from '../../types';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

function MarioBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]);
  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: '1',
    question2: 'dropdown1',
  });

  const options2: options_array[] = [
    {
      value: 'dropdown1',
      label: 'n == 1',
    },
    {
      value: 'dropdown2',
      label: 'n > 1',
    },
    {
      value: 'dropdown3',
      label: 'n < 1',
    },
    {
      value: 'dropdown4',
      label: 'n < 0',
    },
  ];

  return (
    <KhanCard
      correct="The staircase should end at the top step with only one block. Thus, we return the value of 1 itself." //explanation for when user gets answer correct
      incorrect="Think about the last number you add when ascending the staircase. That is the base case value. What does it return?" //hint when user gets answer incorrect
      correct_answer={isCorrect} //must pass in correctness state from parent
      index={[0, 1]} //index for what KhanCard you are referring to
    >
      <div>
        if
        <Dropdown
          size="medium"
          options={options2}
          correct_answer={isCorrect} //must pass in correctness array from parent
          index={0} //index for what question # you are referring to
          answer={answerKey.question2} //the answer from answerkey
          update_answer={setIsCorrect} //function to update the correctness array
        />
        <br />
        <br />
        return
        <KhanInput
          size="medium"
          correct_answer={isCorrect} //must pass in correctness array from parent
          index={1} //index for what question # you are referring to
          answer={answerKey.question1} //the answer from answerkey
          update_answer={setIsCorrect} //function to update the correctness array
        />
      </div>
    </KhanCard>
  );
}

export default MarioBaseCase;
