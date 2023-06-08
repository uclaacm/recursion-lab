import { useState } from 'react';
import IntroDropdown from './intro_dropdown';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';

function IntroCode(): JSX.Element {
  const [isCorrect] = useState(false);
  const [selectedanswer, setselectedanswer] = useState({
    question1: 'n==0',
    question2: '0',
  });

  const [answerKey] = useState({
    question1: 'n==0',
    question2: '1',
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

  const handleUpdateAnswer = (index: number, chosenAnswer: string) => {
    setselectedanswer((prevAnswerKey) => ({
      ...prevAnswerKey,
      [`question${index + 1}`]: chosenAnswer,
    }));
  };

  return (
    <FinishCodeCard
      description="Finish the code below using the dropdown menus. You answer will be checked for the case where n = 5."
      correct_answer={[
        factorial(5) ==
          selectedfactorial(
            5,
            parseInt(selectedanswer.question1[3]),
            parseInt(selectedanswer.question2)
          ),
      ]}
      index={0}
      chosen_function={() =>
        selectedfactorial(
          5,
          parseInt(selectedanswer.question1[3]),
          parseInt(selectedanswer.question2)
        )
      }
      given_function={() => factorial(5)}
      answer_key={answerKey}
    >
      <div className="code-component-container">
        <div className="factorial-text">
          <div>factorial(n):</div>
          <span>if</span>
          <IntroDropdown
            options={options0}
            correct_answer={[isCorrect]}
            index={0}
            answer={'n==0'}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(0, chosenAnswer)
            }
          />
          <div></div>
          <span>return</span>
          <IntroDropdown
            options={options1}
            correct_answer={[isCorrect]}
            index={1}
            answer={'1'}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(1, chosenAnswer)
            }
          />
          <div>return n * factorial(n-1)</div>
        </div>
      </div>
    </FinishCodeCard>
  );
}

export default IntroCode;
