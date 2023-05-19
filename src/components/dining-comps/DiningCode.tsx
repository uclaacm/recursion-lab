import { useState } from 'react';
import Dropdown from '../../components/shared/Dropdown';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';

function DiningCode(): JSX.Element {
  const [isCorrect] = useState([false, false]);
  const [selectedanswer, setselectedanswer] = useState({
    question1: '',
    question2: '',
  });
  const options0: options_array[] = [
    {
      value: 'dropdown1',
      label: 'n==0',
    },
    {
      value: 'dropdown2',
      label: 'n==1',
    },
    {
      value: 'dropdown3',
      label: 'n==2',
    },
  ];
  const options1: options_array[] = [
    {
      value: 'dropdown1',
      label: '0',
    },
    {
      value: 'dropdown2',
      label: '1',
    },
    {
      value: 'dropdown3',
      label: '2',
    },
  ];

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  function selectedfactorial(n: number, n1: number, n2: number): number {
    if (n === n1) {
      return n2;
    } else {
      return n * selectedfactorial(n - 1, n1, n2);
    }
  }

  // If you're sure the element exists

  const handleUpdateAnswer = (index: number, chosenAnswer: string) => {
    setselectedanswer((prevAnswerKey) => ({
      ...prevAnswerKey,
      [`question${index + 1}`]: chosenAnswer,
    }));
  };
  //const shouldShowOutputDiv = isCorrect[0] && isCorrect[1];

  return (
    <FinishCodeCard
      correct="This is an explanation for when you get the answer correct."
      incorrect="This is a hint for when you get the answer incorrect."
      correct_answer={isCorrect}
      index={0}
    >
      <div className="code-component-container">
        <div className="factorial-text">
          <div>In this example, we will use n = 5.</div>
          <div>factorial(n):</div>
          <span>if</span>
          <Dropdown
            options={options0}
            correct_answer={isCorrect}
            index={0}
            answer={'n==0'}
            update_answer={(chosenAnswer) =>
              handleUpdateAnswer(0, chosenAnswer)
            }
          />
          <div></div>
          <span>return</span>
          <Dropdown
            options={options1}
            correct_answer={isCorrect}
            index={1}
            answer={'1'}
            update_answer={(chosenAnswer) =>
              handleUpdateAnswer(1, chosenAnswer)
            }
          />
          <div>return n * factorial(n-1)</div>
        </div>
        {selectedanswer.question1 !== '' && selectedanswer.question2 !== '' ? (
          <div id="output">
            The correct answer is {factorial(5)}
            <br />
            Your answer is{' '}
            {selectedfactorial(
              5,
              parseInt(selectedanswer.question1[3]),
              parseInt(selectedanswer.question2)
            )}
          </div>
        ) : (
          <div id="output">Factorial of 5 is {factorial(5)}</div>
        )}
      </div>
    </FinishCodeCard>
  );
}

export default DiningCode;
