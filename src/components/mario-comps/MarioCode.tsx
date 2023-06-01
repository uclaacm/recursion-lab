import { useState } from 'react';
import MarioDropdown from '../../components/intro_comps/intro_dropdown';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';

function MarioCode(): JSX.Element {
  const [isCorrect] = useState(false);
  const [selectedanswer, setselectedanswer] = useState({
    question1: 'n==1',
    question2: '0',
    question3: '0',
    question4: 'recurSum(n-1)',
  });

  const [answerKey] = useState({
    question1: 'n<=1',
    question2: '1',
    question3: 'n',
    question4: 'recurSum(n-1)',
  });

  const options1: options_array[] = [
    {
      value: 'n==1',
      label: 'n==1',
    },
    {
      value: 'n==2',
      label: 'n==2',
    },
    {
      value: 'n<=1',
      label: 'n<=1',
    },
    {
      value: 'n<=0',
      label: 'n<=0',
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
      value: '2',
      label: '2',
    },
  ];

  const options3: options_array[] = [
    {
      value: 'n-1',
      label: 'n-1',
    },
    {
      value: 'n',
      label: 'n',
    },
    {
      value: 'n+1',
      label: 'n+1',
    },
  ];

  const options4: options_array[] = [
    {
      value: 'recurSum(n-3)',
      label: 'recurSum(n-3)',
    },
    {
      value: 'recurSum(n-2)',
      label: 'recurSum(n-2)',
    },
    {
      value: 'recurSum(n-1)',
      label: 'recurSum(n-1)',
    },
  ];

  function recurSum(n: number): number {
    if (n <= 1) {
      return n;
    }
    return n + recurSum(n - 1);
  }

  function selectedRecurSum(
    startValue: number,
    ifStatement: string,
    ifReturnVal: number,
    functionReturnVal: string,
    recursiveFunc: string
  ): number {
    if (ifStatement == 'n<=0' || ifStatement == 'n<=1') {
      if (recursiveFunc == 'recurSum(n-1)') {
        if (functionReturnVal == 'n-1') {
          return lessThanMinusOneNMinusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else if (functionReturnVal == 'n') {
          return lessThanMinusOneNRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else {
          //n+1
          return lessThanMinusOneNPlusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        }
      } else if (recursiveFunc == 'recurSum(n-2)') {
        if (functionReturnVal == 'n-1') {
          return lessThanMinusTwoNMinusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else if (functionReturnVal == 'n') {
          return lessThanMinusTwoNRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else {
          //n+1
          return lessThanMinusTwoNPlusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        }
      } else {
        if (functionReturnVal == 'n-1') {
          return lessThanMinusThreeNMinusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else if (functionReturnVal == 'n') {
          return lessThanMinusThreeNRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else {
          //n+1
          return lessThanMinusThreeNPlusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        }
      }
    } else {
      if (recursiveFunc == 'recurSum(n-1)') {
        if (functionReturnVal == 'n-1') {
          return equalMinusOneNMinusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else if (functionReturnVal == 'n') {
          return equalMinusOneNRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else {
          return equalMinusOneNPlusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        }
      } else if (recursiveFunc == 'recurSum(n-2)') {
        if (functionReturnVal == 'n-1') {
          return equalMinusTwoNMinusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else if (functionReturnVal == 'n') {
          return equalMinusTwoNRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else {
          return equalMinusTwoNPlusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        }
      } else {
        if (functionReturnVal == 'n-1') {
          return equalMinusThreeNMinusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else if (functionReturnVal == 'n') {
          return equalMinusThreeNRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        } else {
          return equalMinusThreeNPlusOneRecurSum(
            startValue,
            parseInt(ifStatement[3]),
            ifReturnVal
          );
        }
      }
    }
  }

  function lessThanMinusOneNMinusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue -
      1 +
      lessThanMinusOneNMinusOneRecurSum(
        startValue - 1,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusOneNRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      lessThanMinusOneNRecurSum(startValue - 1, ifStatementVal, ifReturnVal)
    );
  }

  function lessThanMinusOneNPlusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      1 +
      lessThanMinusOneNPlusOneRecurSum(
        startValue - 1,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusTwoNMinusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue -
      1 +
      lessThanMinusTwoNMinusOneRecurSum(
        startValue - 2,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusTwoNRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      lessThanMinusTwoNMinusOneRecurSum(
        startValue - 2,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusTwoNPlusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      1 +
      lessThanMinusTwoNMinusOneRecurSum(
        startValue - 2,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusThreeNMinusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue -
      1 +
      lessThanMinusThreeNMinusOneRecurSum(
        startValue - 3,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusThreeNRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      lessThanMinusThreeNMinusOneRecurSum(
        startValue - 3,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function lessThanMinusThreeNPlusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue <= ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      1 +
      lessThanMinusThreeNMinusOneRecurSum(
        startValue - 3,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function equalMinusOneNMinusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue -
      1 +
      equalMinusOneNMinusOneRecurSum(
        startValue - 1,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function equalMinusOneNRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      equalMinusOneNRecurSum(startValue - 1, ifStatementVal, ifReturnVal)
    );
  }

  function equalMinusOneNPlusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      1 +
      equalMinusOneNPlusOneRecurSum(startValue - 1, ifStatementVal, ifReturnVal)
    );
  }

  function equalMinusTwoNMinusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue -
      1 +
      equalMinusTwoNMinusOneRecurSum(
        startValue - 2,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function equalMinusTwoNRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      equalMinusTwoNRecurSum(startValue - 2, ifStatementVal, ifReturnVal)
    );
  }

  function equalMinusTwoNPlusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      1 +
      equalMinusTwoNPlusOneRecurSum(startValue - 2, ifStatementVal, ifReturnVal)
    );
  }

  function equalMinusThreeNMinusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue -
      1 +
      equalMinusThreeNMinusOneRecurSum(
        startValue - 3,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function equalMinusThreeNRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      equalMinusThreeNMinusOneRecurSum(
        startValue - 3,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  function equalMinusThreeNPlusOneRecurSum(
    startValue: number,
    ifStatementVal: number,
    ifReturnVal: number
  ): number {
    if (startValue == ifStatementVal) {
      return ifReturnVal;
    }
    return (
      startValue +
      1 +
      equalMinusThreeNPlusOneRecurSum(
        startValue - 3,
        ifStatementVal,
        ifReturnVal
      )
    );
  }

  const handleUpdateAnswer = (index: number, chosenAnswer: string) => {
    setselectedanswer((prevAnswerKey) => ({
      ...prevAnswerKey,
      [`question${index + 1}`]: chosenAnswer,
    }));
  };

  return (
    <FinishCodeCard
      correct_answer={[
        recurSum(5) ==
          selectedRecurSum(
            5,
            selectedanswer.question1,
            parseInt(selectedanswer.question2),
            selectedanswer.question3,
            selectedanswer.question4
          ),
      ]}
      index={0}
      chosen_function={() =>
        selectedRecurSum(
          5,
          selectedanswer.question1,
          parseInt(selectedanswer.question2),
          selectedanswer.question3,
          selectedanswer.question4
        )
      }
      given_function={() => recurSum(5)}
      answer_key={answerKey}
    >
      <div className="code-component-container">
        <div className="factorial-text">
          <div>In this example, we will use n = 5.</div>
          <div>recurSum(n):</div>
          <br></br>
          <span style={{ marginLeft: '-25px' }}>if</span>
          <MarioDropdown
            options={options1}
            correct_answer={[isCorrect]}
            index={0}
            answer={'n<=1'}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(0, chosenAnswer)
            }
          />{' '}
          :
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return
          <MarioDropdown
            options={options2}
            correct_answer={[isCorrect]}
            index={1}
            answer={'1'}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(1, chosenAnswer)
            }
          />
          <br />
          <br />
          return
          <MarioDropdown
            options={options3}
            correct_answer={[isCorrect]}
            index={2}
            answer={'n'}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(2, chosenAnswer)
            }
          />
          <br />
          +
          <br />
          <MarioDropdown
            options={options4}
            correct_answer={[isCorrect]}
            index={3}
            answer={'recurSum(n-1)'}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(3, chosenAnswer)
            }
          />
        </div>
      </div>
    </FinishCodeCard>
  );
}

export default MarioCode;
