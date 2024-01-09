import { useState } from 'react';
import { codeOptions1, codeOptions2, codeOptions3 } from './dropdown_imports';
import FinishCodeCard from '../../components/shared/FinishCode';
import Blue from '../shared/Blue';
import BunnyCodeDropdown from '../shared/Dropdown';
import Gold from '../shared/Gold';
import Tab from '../shared/Tab';

function BunnyCode(): JSX.Element {
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
      // CORRECT
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
      // CORRECT
      ifStatement == 'n <= 1' &&
      ifReturnVal == '1' &&
      functionReturnVal == 'fib(n-1) + fib(n-2)'
    ) {
      return nLess1NFib(startValue);
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
        description="Your answer will be tested with the case n = 7."
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
        <div className="left-align">
          <Blue>def</Blue>
          <Gold> fib</Gold>(n):
          <br />
          <Tab>
            <>
              <Blue> if </Blue>
              <BunnyCodeDropdown
                size="medium"
                options={codeOptions1}
                index={0}
                answer={answerKey.question1}
                update_answer={(chosenAnswer: string) =>
                  handleUpdateAnswer(0, chosenAnswer)
                }
              />
              <br />
              <Tab>
                <>
                  <Blue>return </Blue>
                  <BunnyCodeDropdown
                    size="small"
                    options={codeOptions2}
                    index={1}
                    answer={answerKey.question2}
                    update_answer={(chosenAnswer: string) =>
                      handleUpdateAnswer(1, chosenAnswer)
                    }
                  />
                </>
              </Tab>
              <Blue>return</Blue>
              <BunnyCodeDropdown
                size="large"
                options={codeOptions3}
                index={2}
                answer={answerKey.question3}
                update_answer={(chosenAnswer: string) =>
                  handleUpdateAnswer(2, chosenAnswer)
                }
              />
            </>
          </Tab>
        </div>
      </FinishCodeCard>
    </div>
  );
}
export default BunnyCode;
