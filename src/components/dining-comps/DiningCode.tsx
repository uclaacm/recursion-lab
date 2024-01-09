import { useState } from 'react';
import DiningDropDown from '../../components/intro_comps/intro_dropdown';
import FinishCodeCard from '../../components/shared/FinishCode';
import { options_array } from '../../types';

function DiningCode(): JSX.Element {
  const [isCorrect] = useState([false]);

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

  // const Friends: number[] = [10, 20, 30, 40, 50];

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
      value: '-1',
      label: '-1',
    },
  ];
  const options2: options_array[] = [
    {
      value: 'Friend.left',
      label: 'Friend.left',
    },
    {
      value: 'Friend.right',
      label: 'Friend.right',
    },
  ];

  const options3: options_array[] = [
    {
      value: 'Friend.left',
      label: 'Friend.left',
    },
    {
      value: 'Friend.right',
      label: 'Friend.right',
    },
  ];

  const options4: options_array[] = [
    {
      value: 'Friend.left.val',
      label: 'Friend.left.val',
    },
    {
      value: 'Friend.right.val',
      label: 'Friend.right.val',
    },
    {
      value: 'Friend.val',
      label: 'Friend.val',
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
        correct_answer={[
          postOrderSum([10, 20, 30, 40, 50]) ==
            selectPostOrderSum(
              [10, 20, 30, 40, 50],
              selectedanswer.question1,
              selectedanswer.question2,
              selectedanswer.question3,
              selectedanswer.question4
            ),
        ]}
        index={0}
        given_function={() => postOrderSum([10, 20, 30, 40, 50])}
        chosen_function={() =>
          selectPostOrderSum(
            [10, 20, 30, 40, 50],
            selectedanswer.question1,
            selectedanswer.question2,
            selectedanswer.question3,
            selectedanswer.question4
          )
        }
        answer_key={answerKey}
        name="dining"
      >
        <div>
          <span style={{ color: 'purple' }}> def post_order_sum (Friend):</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <b style={{ color: 'purple' }}> if </b>{' '}
          <span style={{ color: 'purple' }}> Friend is None </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <b style={{ color: 'purple' }}> return </b>
          <DiningDropDown
            options={options1}
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(0, chosenAnswer)
            }
          />
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; left_sum
          = <span style={{ color: 'purple' }}>post_order_sum</span>(
          <DiningDropDown
            options={options2}
            correct_answer={isCorrect}
            index={1}
            answer={answerKey.question2}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(1, chosenAnswer)
            }
          />
          )
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          right_sum = <span style={{ color: 'purple' }}>post_order_sum</span>(
          <DiningDropDown
            options={options3}
            correct_answer={isCorrect}
            index={2}
            answer={answerKey.question2}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(2, chosenAnswer)
            }
          />
          )
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b style={{ color: 'purple' }}> return </b>
          <span style={{ color: 'purple' }}> (left_sum + right_sum + </span>
          <DiningDropDown
            options={options4}
            correct_answer={isCorrect}
            index={3}
            answer={answerKey.question4}
            update_answer={(chosenAnswer: string) =>
              handleUpdateAnswer(3, chosenAnswer)
            }
          />
          )
        </div>
      </FinishCodeCard>
    </div>
  );
}
export default DiningCode;
