import { useState } from 'react';
import Blue from '../shared/Blue';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
import Tab from '../shared/Tab';

function DiningBaseCase(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState<(boolean | null | number)[]>([
    -1, -1, -1,
  ]); // state for if the question is correct

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
        name="dining-base-case"
      >
        <div className="left-align">
          <Blue>if </Blue>
          <KhanInput
            size="medium"
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={0} //index for what KhanCard you are referring to
            answer={answerKey.question1} //the answer from answerkey
            update_answer={setIsCorrect}
            name="dining-base-1"
          />
          <Blue> is </Blue>
          <KhanInput
            size="medium"
            correct_answer={isCorrect} //must pass in correctness state from parent
            index={1} //index for what KhanCard you are referring to
            answer={answerKey.question2} //the answer from answerkey
            update_answer={setIsCorrect}
            name="dining-base-2"
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
                name="dining-base-3"
              />
            </>
          </Tab>
        </div>
      </KhanCard>
    </div>
  );
}

export default DiningBaseCase;
