import { useState } from 'react';
import {
  codeOptions1,
  codeOptions2,
  codeOptions3,
  codeOptions4,
} from './dropdown_imports';
import FinishCodeCard from '../../components/shared/FinishCode';
import Blue from '../shared/Blue';
import DiningDropDown from '../shared/Dropdown';
import Gold from '../shared/Gold';
import Tab from '../shared/Tab';

function DiningCode(): JSX.Element {
  const [selectedanswer, setselectedanswer] = useState({
    question1: '1',
    question2: 'Friend.left',
    question3: 'Friend.left',
    question4: 'Friend.val.left',
  });

  const [answerKey] = useState({
    question1: '0',
    question2: 'Friend.left',
    question3: 'Friend.right',
    question4: 'Friend.val',
  });

  function postOrderSum(Friends: number[]): number {
    const sum = Friends.reduce((a, b) => a + b, 0);
    return sum;
  }

  function selectPostOrderSum(
    FriendArr: number[],
    baseCase: string,
    leftFriend: string,
    rightFriend: string,
    returnStatement: string
  ): number {
    const sum = FriendArr.reduce((a, b) => a + b, 0);
    if (
      baseCase == '0' &&
      leftFriend == 'Friend.left' &&
      rightFriend == 'Friend.right' &&
      returnStatement == 'Friend.val'
    )
      return sum;
    else if (
      baseCase == '0' &&
      leftFriend == 'Friend.right' &&
      rightFriend == 'Friend.left' &&
      returnStatement == 'Friend.val'
    )
      return sum;
    else if (
      baseCase == '1' &&
      leftFriend == 'Friend.left' &&
      rightFriend == 'Friend.right' &&
      returnStatement == 'Friend.val'
    )
      return sum + FriendArr.length;
    else if (
      baseCase == '1' &&
      leftFriend == 'Friend.right' &&
      rightFriend == 'Friend.left' &&
      returnStatement == 'Friend.val'
    )
      return sum + FriendArr.length;
    else if (
      baseCase == '-1' &&
      leftFriend == 'Friend.left' &&
      rightFriend == 'Friend.right' &&
      returnStatement == 'Friend.val'
    )
      return sum - FriendArr.length;
    else if (
      baseCase == '-1' &&
      leftFriend == 'Friend.right' &&
      rightFriend == 'Friend.left' &&
      returnStatement == 'Friend.val'
    )
      return sum - FriendArr.length;
    else if (
      baseCase == '0' &&
      leftFriend == rightFriend &&
      returnStatement == 'Friend.val'
    )
      return 2 * sum - FriendArr[0];
    else if (
      baseCase == '1' &&
      leftFriend == rightFriend &&
      returnStatement == 'Friend.val'
    )
      return 2 * sum - FriendArr[0] + 2;
    else if (
      baseCase == '-1' &&
      leftFriend == rightFriend &&
      returnStatement == 'Friend.val'
    )
      return 2 * sum - FriendArr[0] - 2;

    return -1;
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
        description="Your answer will be tested with the given data at the start: [10, 7, 15, 5, 12]."
        correct_answer={[
          postOrderSum([10, 7, 15, 5, 12]) ==
            selectPostOrderSum(
              [10, 7, 15, 5, 12],
              selectedanswer.question1,
              selectedanswer.question2,
              selectedanswer.question3,
              selectedanswer.question4
            ),
        ]}
        index={0}
        given_function={() => postOrderSum([10, 7, 15, 5, 12])}
        chosen_function={() =>
          selectPostOrderSum(
            [10, 7, 15, 5, 12],
            selectedanswer.question1,
            selectedanswer.question2,
            selectedanswer.question3,
            selectedanswer.question4
          )
        }
        answer_key={answerKey}
      >
        <div className="left-align">
          <span>
            <Blue>def</Blue>
            <Gold> post_order_sum</Gold>(Friend):
          </span>
          <br />
          <Tab>
            <>
              <Blue>if</Blue>{' '}
              <span>
                Friend is <Blue>None</Blue>:
              </span>
              <br />
              <Tab>
                <>
                  <Blue>return</Blue>
                  <DiningDropDown
                    size="small"
                    options={codeOptions1}
                    index={0}
                    answer={answerKey.question1}
                    update_answer={(chosenAnswer: string) =>
                      handleUpdateAnswer(0, chosenAnswer)
                    }
                  />
                </>
              </Tab>
              left_sum = <Gold>post_order_sum</Gold>(
              <DiningDropDown
                size="large"
                options={codeOptions2}
                index={1}
                answer={answerKey.question2}
                update_answer={(chosenAnswer: string) =>
                  handleUpdateAnswer(1, chosenAnswer)
                }
              />
              )
              <br />
              right_sum = <Gold>post_order_sum</Gold>(
              <DiningDropDown
                size="large"
                options={codeOptions3}
                index={2}
                answer={answerKey.question2}
                update_answer={(chosenAnswer: string) =>
                  handleUpdateAnswer(2, chosenAnswer)
                }
              />
              )
              <br />
              <Blue>return</Blue> left_sum + right_sum +
              <DiningDropDown
                size="large"
                options={codeOptions4}
                index={3}
                answer={answerKey.question4}
                update_answer={(chosenAnswer: string) =>
                  handleUpdateAnswer(3, chosenAnswer)
                }
              />
            </>
          </Tab>
        </div>
      </FinishCodeCard>
    </div>
  );
}
export default DiningCode;
