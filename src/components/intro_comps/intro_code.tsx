import { useState } from 'react';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';
import Blue from '../shared/Blue';
import IntroDropdown from '../shared/Dropdown';
import Gold from '../shared/Gold';
import Tab from '../shared/Tab';

function IntroCode(): JSX.Element {
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
      value: 'n==0',
      label: 'n==0',
    },
    {
      value: 'n==1',
      label: 'n==1',
    },
    {
      value: 'n==2',
      label: 'n==2',
    },
  ];
  const options1: options_array[] = [
    {
      value: '0',
      label: '0',
    },
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
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
      <div className="left-align">
        <Blue>def</Blue>
        <Gold> factorial</Gold>(n):
        <Tab>
          <>
            <Blue>if</Blue>
            <IntroDropdown
              options={options0}
              index={0}
              answer={'n==0'}
              update_answer={(chosenAnswer: string) =>
                handleUpdateAnswer(0, chosenAnswer)
              }
              size="medium"
            />
            :
            <br />
            <Tab>
              <>
                <Blue>return</Blue>
                <IntroDropdown
                  options={options1}
                  index={1}
                  answer={'1'}
                  update_answer={(chosenAnswer: string) =>
                    handleUpdateAnswer(1, chosenAnswer)
                  }
                  size="small"
                />
              </>
            </Tab>
            <Blue>return</Blue> n * <Gold>factorial</Gold>(n-1)
          </>
        </Tab>
      </div>
    </FinishCodeCard>
  );
}

export default IntroCode;
