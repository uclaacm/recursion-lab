import { useState } from 'react';
import { options_array } from '../../types';
import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';

/*
How to use the KhanCard and corresponding KhanInput component:
  KhanCard = wrapper box that holds the content that you want displayed
  KhanInput = a styled input box
  NOTE: parent component (MarioBaseCase) holds state that KhanCard and KhanInput will be using
*/

function MarioBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false]); //state for if questions are correct
  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: 'answer1',
    question2: 'dropdown1',
  });

  const options2: options_array[] = [
    {
      value: 'dropdown1',
      label: 'dropdown1',
    },
    {
      value: 'dropdown2',
      label: 'dropdown2',
    },
    {
      value: 'dropdown3',
      label: 'dropdown3',
    },
  ];

  return (
    <div>
      <KhanCard
        correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
        incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={[0, 1]} //index for what KhanCard you are referring to
      >
        <div>
          <span>
            This is a sample way to use fill in the blank. The answer to
            dropdown is &quot;dropdown1&quot;. The answer for this input is
            &quot;answer1&quot;. Try it out!
          </span>
          .
          <Dropdown
            options={options2}
            correct_answer={isCorrect} //must pass in correctness array from parent
            index={0} //index for what question # you are referring to
            answer={answerKey.question2} //the answer from answerkey
            update_answer={setIsCorrect} //function to update the correctness array
          />
          <KhanInput
            correct_answer={isCorrect} //must pass in correctness array from parent
            index={1} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
            update_answer={setIsCorrect} //function to update the correctness array
          />
        </div>
      </KhanCard>
    </div>
  );
}

export default MarioBaseCase;
