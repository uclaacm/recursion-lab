import { useState } from 'react';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
function DiningBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false, false]); // state for if the question is correct

  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: 'friend',
    question2: 'none',
    question3: '0',
  });

  return (
    <div>
      <KhanCard
        correct="When `Friend` is null, then return 0." //explanation for when user gets answer correct
        incorrect="What happens when `Friend` is null?" //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={[0, 1, 2]} //index for what KhanCard you are referring to
      >
        <div>
          <div>
            <p>
              if
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question1} //the answer from answerkey
                update_answer={setIsCorrect}
              />
              is
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={1} //index for what KhanCard you are referring to
                answer={answerKey.question2} //the answer from answerkey
                update_answer={setIsCorrect}
              />
              :
              <br />
              <br />
              return
              <KhanInput
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={2} //index for what KhanCard you are referring to
                answer={answerKey.question3} //the answer from answerkey
                update_answer={setIsCorrect}
              />
            </p>
          </div>
        </div>
      </KhanCard>
    </div>
  );
}

export default DiningBaseCase;
