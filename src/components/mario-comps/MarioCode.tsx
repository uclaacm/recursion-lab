import { useState } from 'react';
import {
  codeOptions1,
  codeOptions2,
  codeOptions3,
  codeOptions4,
} from './dropdown_imports';
import FinishCodeCard from '../../components/shared/FinishCode';
import Blue from '../shared/Blue';
import MarioDropdown from '../shared/Dropdown';
import Gold from '../shared/Gold';
import Tab from '../shared/Tab';

function MarioCode(): JSX.Element {
  const [selectedanswer, setselectedanswer] = useState({
    question1: 'n==1',
    question2: '0',
    question3: '0',
    question4: 'n-1',
  });

  const [answerKey] = useState({
    question1: 'n<=1',
    question2: '1',
    question3: 'n',
    question4: 'n-1',
  });

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
      if (recursiveFunc == 'n-1') {
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
      } else if (recursiveFunc == 'n-2') {
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
      if (recursiveFunc == 'n-1') {
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
      } else if (recursiveFunc == 'n-2') {
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
    if (startValue < 0) {
      return -100;
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
      description="Your answer will be checked for the case where n = 5."
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
      name="mario"
    >
      <div className="left-align">
        <Blue>def</Blue>
        <Gold> recurSum</Gold>(n):
        <br />
        <Tab>
          <>
            <Blue>if</Blue>
            <MarioDropdown
              size="medium"
              options={codeOptions1}
              index={0}
              answer={'n<=1'}
              update_answer={(chosenAnswer: string) =>
                handleUpdateAnswer(0, chosenAnswer)
              }
            />{' '}
            :
            <Tab>
              <>
                <Blue>return</Blue>
                <MarioDropdown
                  size="small"
                  options={codeOptions2}
                  index={1}
                  answer={'1'}
                  update_answer={(chosenAnswer: string) =>
                    handleUpdateAnswer(1, chosenAnswer)
                  }
                />
              </>
            </Tab>
            <Blue>return</Blue>
            <MarioDropdown
              size="medium"
              options={codeOptions3}
              index={2}
              answer={'n'}
              update_answer={(chosenAnswer: string) =>
                handleUpdateAnswer(2, chosenAnswer)
              }
            />
            + <Gold>recurSum</Gold>(
            <MarioDropdown
              size="medium"
              options={codeOptions4}
              index={3}
              answer={'n-1'}
              update_answer={(chosenAnswer: string) =>
                handleUpdateAnswer(3, chosenAnswer)
              }
            />
            )
          </>
        </Tab>
      </div>
    </FinishCodeCard>
  );
}

export default MarioCode;
