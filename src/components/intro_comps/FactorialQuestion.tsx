import { useState } from 'react';
import Latex from 'react-latex-next';
import KhanCard from '../shared/KhanCard';
import KhanInput from '../shared/KhanInput';
/*
How to use the KhanCard and corresponding KhanInput component:
  KhanCard = wrapper box that holds the content that you want displayed
  KhanInput = a styled input box
  NOTE: parent component (MarioBaseCase) holds state that KhanCard and KhanInput will be using
*/
const explanation =
  'We have that n!=n\u{00d7}(n-1)\u{00d7}...\u{00d7}1, but (n-1)\u{00d7}...\u{00d7}1 is exactly (n-1)!';
function FactorialQuestion(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState<(boolean | null | number)[]>([-1]); //state for if questions are correct
  const [answerKey] = useState({
    //you can have multiple "Fill in the Blank" questions
    question1: '(n-1)!',
  });

  return (
    <div>
      <KhanCard
        correct={explanation} //explanation for when user gets answer correct
        incorrect="Look at the above formulas, how can we write the remainder of product succinctly?" //hint when user gets answer incorrect
        correct_answer={isCorrect} //must pass in correctness state from parent
        index={[0]} //index for what KhanCard you are referring to
        name="factorial-question"
      >
        <div>
          <span>
            <Latex>
              {
                'Below is an unfinished equation for $n!$. What should go in the blank so that the equation is correct?'
              }
            </Latex>
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
              <Latex>{'$n! = n \\cdot$ '}</Latex>
              <KhanInput
                size="medium"
                correct_answer={isCorrect} //must pass in correctness state from parent
                index={0} //index for what KhanCard you are referring to
                answer={answerKey.question1} //the answer from answerkey
                update_answer={setIsCorrect}
                name="factorial-question-1"
              />
            </div>
          </span>
        </div>
      </KhanCard>
    </div>
  );
}

export default FactorialQuestion;
