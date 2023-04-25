import {useState} from 'react'
import KhanCard from "../shared/KhanCard";
import KhanInput from '../shared/KhanInput';
function DiningBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false]); // state for if the question is correct

  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: 'Friend',
    question2: 'None',
    question3: '0'
  });
  return <div>
    <KhanCard
      correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
      incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
      correct_answer={isCorrect} //must pass in correctness state from parent
      index={[0]} //index for what KhanCard you are referring to
      >
        <div >
          <div>
            <p>
              if
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question1} //the answer from answerkey
              />
              is
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question2} //the answer from answerkey
              />:
              <br/><br/>
              return
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question3} //the answer from answerkey
              />
            </p>
          </div>
         
        </div>
      </KhanCard>
  </div>;
}

export default DiningBaseCase;
