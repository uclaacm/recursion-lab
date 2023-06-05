import { useState } from 'react';
import { options_array } from '../../types';

import Dropdown from '../shared/Dropdown';
import KhanCard from '../shared/KhanCard';

function DiningCode(): JSX.Element {
  const [isCorrect, setIsCorrect] = useState([false, false, false]);
  const [answerKey] = useState({
    question1: '0',
    question2: 'Friend.left',
    question3: 'Friend.right',
    question4: 'Friend.val',
  });

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

  return (
    <div>
      <KhanCard
        correct="The sum of value for friends in the left and friends in the right and the value for current friend"
        incorrect="Think of a mathematical operation that combines the values of friends on both sides with the value of the current friend."
        correct_answer={isCorrect}
        index={[0, 1]}
      >
        <div>
          def post_order_sum(Friend):
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          if Friend is None
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          return
          <Dropdown
            options={options1}
            correct_answer={isCorrect}
            index={0}
            answer={answerKey.question1}
            update_answer={setIsCorrect}
          />
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; left_sum
          = post_order_sum(
          <Dropdown
            options={options2}
            correct_answer={isCorrect}
            index={1}
            answer={answerKey.question2}
            update_answer={setIsCorrect}
          />
          )
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          right_sum = post_order_sum(
          <Dropdown
            options={options3}
            correct_answer={isCorrect}
            index={2}
            answer={answerKey.question2}
            update_answer={setIsCorrect}
          />
          )
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return
          (left_sum + right_sum +
          <Dropdown
            options={options4}
            correct_answer={isCorrect}
            index={3}
            answer={answerKey.question4}
            update_answer={setIsCorrect}
          />
          )
        </div>
      </KhanCard>
    </div>
  );
}
export default DiningCode;
