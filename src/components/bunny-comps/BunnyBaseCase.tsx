import { useState } from 'react';
import Dropdown from "../shared/Dropdown";
import KhanCard from "../shared/KhanCard";
import KhanInput from "../shared/KhanInput";

function BunnyBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false]); // state for if the question is correct

  const options = [
    { value: 'option1', label: 'n >= 1' },
  ];
  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: 'n',
  });

  return (
    <div>
      <KhanCard
      correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
      incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
      correct_answer={isCorrect} //must pass in correctness state from parent
      index={[0]} //index for what KhanCard you are referring to
      >
        <div >
          <div>
            <p>
              If
              <Dropdown options={options}
                  correct_answer={[true]}
                  index={0}
                  answer={options[0].value}/>
              <br/><br/>
              Return
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question1} //the answer from answerkey
              />
            </p>
          </div>
         
        </div>
      </KhanCard>
      
    </div>
  );
}

export default BunnyBaseCase;
