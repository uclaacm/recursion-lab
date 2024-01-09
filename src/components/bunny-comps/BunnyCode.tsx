import { useState } from 'react';
import BunnyCodeDropdown from '../../components/intro_comps/intro_dropdown';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';

function BunnyCode(): JSX.Element {
  const [isCorrect] = useState([false, false, false]);
  const [selectedanswer, setselectedanswer] = useState({
    question1: 'n > 1',
    question2: '0',
    question3: 'n * fib(n-1)',
  });
  const [answerKey] = useState({
    question1: 'n <= 1',
    question2: 'n',
    question3: 'fib(n-1) + fib(n-2)',
  });

  function recurFib(n: number): number {
    if (n <= 1) {
      return n;
    }
    return recurFib(n - 2) + recurFib(n - 1);
  }

  function selectedRecurFib(
    startValue: number,
    ifStatement: string,
    ifReturnVal: string,
    functionReturnVal: string
  ): number {
    if (ifStatement == 'n > 1') {
      return startValue;
    } else if (
      ifStatement == 'n <= 1' &&
      ifReturnVal == 'n' &&
      functionReturnVal == 'fib(n-1) + fib(n-2)'
    ) {
      return nLess1NFib(startValue);
    } else if (
      ifStatement == 'n <= 1' &&
      ifReturnVal == '0' &&
      functionReturnVal == 'fib(n-1) + fib(n-2)'
    ) {
      return nLess10Fib(startValue);
    } else if (
      ifStatement == 'n <= 1' &&
      ifReturnVal == '1' &&
      functionReturnVal == 'fib(n-1) + fib(n-2)'
    ) {
      return nLess11Fib(startValue);
    } else if (
      ifStatement == 'n <= 1' &&
      ifReturnVal == 'n' &&
      functionReturnVal == 'n + fib(n-1)'
    ) {
      return nLess1NSum(startValue);
    } else if (
      ifStatement == 'n <= 1' &&
      ifReturnVal == '0' &&
      functionReturnVal == 'n + fib(n-1)'
    ) {
      return nLess10Sum(startValue);
    } else if (
      ifStatement == 'n <= 1' &&
      ifReturnVal == '1' &&
      functionReturnVal == 'n + fib(n-1)'
    ) {
      return nLess11Sum(startValue);
    }

    return 0;
  }

  function nLess1NFib(n: number): number {
    if (n <= 1) {
      return n;
    }
    return nLess1NFib(n - 2) + nLess1NFib(n - 1);
  }
  function nLess10Fib(n: number): number {
    if (n <= 1) {
      return 0;
    }
    return nLess10Fib(n - 2) + nLess10Fib(n - 1);
  }
  function nLess11Fib(n: number): number {
    if (n <= 1) {
      return 1;
    }
    return nLess11Fib(n - 2) + nLess11Fib(n - 1);
  }

  function nLess1NSum(n: number): number {
    if (n <= 1) {
      return n;
    }
    return n + nLess1NSum(n - 1);
  }
  function nLess10Sum(n: number): number {
    if (n <= 1) {
      return 0;
    }
    return n + nLess10Sum(n - 1);
  }
  function nLess11Sum(n: number): number {
    if (n <= 1) {
      return 1;
    }
    return n + nLess11Sum(n - 1);
  }

  const options1: options_array[] = [
    {
      value: 'n <= 1',
      label: 'n <= 1',
    },
    {
      value: 'n > 1',
      label: 'n > 1',
    },
  ];
  const options2: options_array[] = [
    {
      value: '0',
      label: '0',
    },
    {
      value: '1',
      label: '1',
    },
    {
      value: 'n',
      label: 'n',
    },
  ];

  const options3: options_array[] = [
    {
      value: 'n + fib(n-1)',
      label: 'n + fib(n-1)',
    },
    {
      value: 'fib(n-1) + fib(n-2)',
      label: 'fib(n-1) + fib(n-2)',
    },
  ];

  const handleUpdateAnswer = (index: number, chosenAnswer: string) => {
    setselectedanswer((prevAnswerKey) => ({
      ...prevAnswerKey,
      [`question${index + 1}`]: chosenAnswer,
    }));
  };

  return (
    <div>
      <FinishCodeCard
        // correct="Put the base case and calculate fib(n) by adding fib(n-1) and fib(n-2)"
        // incorrect="Combine the 2 code from `base case` and `recursive formula` into your answer."
        correct_answer={[
          recurFib(7) ==
            selectedRecurFib(
              7,
              selectedanswer.question1,
              selectedanswer.question2,
              selectedanswer.question3
            ),
        ]}
        index={0}
        given_function={() => recurFib(7)}
        chosen_function={() =>
          selectedRecurFib(
            7,
            selectedanswer.question1,
            selectedanswer.question2,
            selectedanswer.question3
          )
        }
        answer_key={answerKey}
        name="bunny"
      >
        <div>
          <span style={{ color: 'purple' }}> def fib(n): </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <b style={{ color: 'purple' }}> if </b>
          <BunnyCodeDropdown
            options={options1}
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(0, chosenAnswer)
            }
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b style={{ color: 'purple' }}>return </b>
          <BunnyCodeDropdown
            options={options2}
            correct_answer={isCorrect}
            index={1}
            answer={answerKey.question2}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(1, chosenAnswer)
            }
          />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b style={{ color: 'purple' }}>return</b>
          <BunnyCodeDropdown
            options={options3}
            correct_answer={isCorrect}
            index={2}
            answer={answerKey.question3}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(2, chosenAnswer)
            }
          />
        </div>
      </FinishCodeCard>
    </div>
  );
}
export default BunnyCode;
