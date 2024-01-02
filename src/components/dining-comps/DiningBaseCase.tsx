import { useState } from 'react';
import Blue from '../shared/Blue';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
import Tab from '../shared/Tab';

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
      Note that in Pythonic syntax, <i>Null</i> is denoted as <i>None</i>
      <KhanCard
        correct="When `Friend` is null, then return 0." //explanation for when user gets answer correct
        incorrect="What happens when `Friend` is null?" //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={[0, 1, 2]} //index for what KhanCard you are referring to
      >
        <div className="left-align">
          <Blue>if </Blue>
          <KhanInput
            size="medium"
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={0} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
            update_answer={setIsCorrect}
          />
          <Blue> is </Blue>
          <KhanInput
            size="medium"
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={1} //index for what KhanCard you are referring to
            answer={answerKey.question2} //the answer from answerkey
            update_answer={setIsCorrect}
          />{' '}
          :
          <br />
          <Tab>
            <>
              <Blue>return </Blue>
              <KhanInput
                size="small"
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={2} //index for what KhanCard you are referring to
                answer={answerKey.question3} //the answer from answerkey
                update_answer={setIsCorrect}
              />
            </>
          </Tab>
        </div>
      </KhanCard>
    </div>
  );
}

export default DiningBaseCase;
