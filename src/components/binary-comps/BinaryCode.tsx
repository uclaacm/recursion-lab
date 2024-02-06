import { useState } from 'react';
import {
  bcOptions1,
  bcOptions2,
  bcOptions3,
  bcOptions4,
} from './dropdown_imports';
import FinishCodeCard from '../../components/shared/FinishCode';
import Blue from '../shared/Blue';
import BinaryCodeDropdown from '../shared/Dropdown';
import Gold from '../shared/Gold';
import Tab from '../shared/Tab';

function BinaryCode(): JSX.Element {
  const [selectedanswer, setselectedanswer] = useState<
    Record<PropertyKey, string>
  >({
    question1: '0',
    question2: 'high',
    question3: 'arr, target, mid+1, high',
    question4: 'arr, target, mid+1, high',
  });

  const [answerKey] = useState<Record<PropertyKey, string>>({
    question1: '-1',
    question2: 'mid',
    question3: 'arr, target, mid+1, high',
    question4: 'arr, target, low, mid-1',
  });

  function givenBinarySearch(
    arr: string[],
    target: string,
    low: number,
    high: number
  ): number {
    if (low > high) return -1;

    const mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) return mid;
    else if (arr[mid] < target)
      return givenBinarySearch(arr, target, mid + 1, high);
    else return givenBinarySearch(arr, target, low, mid - 1);
  }

  const createBinarySearch = (userChoices: Record<PropertyKey, string>) => {
    return function binarySearch(
      arr: string[],
      target: string,
      low: number,
      high: number
    ) {
      if (userChoices.question3 === 'arr, target, low, high-mid') return -100;
      if (low > high) return parseInt(userChoices.question1, 0);

      const mid = Math.floor((low + high) / 2);

      if (target === arr[mid])
        return userChoices.question2 === 'mid'
          ? mid
          : userChoices.question2 === 'high'
          ? high
          : low;
      else if (arr[mid] < target) {
        // Check for user selection and call binarySearch with chosen params
        if (userChoices.question3 === 'arr, target, low, mid-1')
          return binarySearch(arr, target, low, mid - 1);
        else if (userChoices.question3 === 'arr, target, low, high-mid')
          return binarySearch(arr, target, low, high - mid);
        else if (userChoices.question3 === 'arr, target, low+mid, high')
          return binarySearch(arr, target, low + mid, high);
        else return binarySearch(arr, target, mid + 1, high);
      } else {
        // Check for user selection and call binarySearch with chosen params
        if (userChoices.question4 === 'arr, target, low, mid-1')
          return binarySearch(arr, target, low, mid - 1);
        else if (userChoices.question4 === 'arr, target, low, high-mid')
          return binarySearch(arr, target, low, high - mid);
        else if (userChoices.question4 === 'arr, target, low+mid, high')
          return binarySearch(arr, target, low + mid, high);
        else return binarySearch(arr, target, mid + 1, high);
      }
    };
  };

  const arr = [
    'accurate',
    'action',
    'amusement',
    'bad',
    'bite',
    'carpenter',
    'cloistered',
    'describe',
    'helpful',
    'hollow',
    'pear',
    'reflective',
    'satisfy',
    'scrawny',
    'unhealthy',
  ];

  const handleUpdateAnswer = (index: number, chosenAnswer: string) => {
    setselectedanswer((prevAnswerKey) => ({
      ...prevAnswerKey,
      [`question${index + 1}`]: chosenAnswer,
    }));
  };

  return (
    <>
      <FinishCodeCard
        name=""
        description="Your answer will be tested with the given words array at the start with the target word 'pear'."
        correct_answer={[
          givenBinarySearch(arr, 'pear', 0, arr.length - 1) ===
            createBinarySearch(selectedanswer)(arr, 'pear', 0, arr.length - 1),
        ]} //boolean array of possible correct answers
        index={0} //index for answer key
        given_function={() => givenBinarySearch(arr, 'pear', 0, arr.length - 1)}
        chosen_function={() =>
          createBinarySearch(selectedanswer)(arr, 'pear', 0, arr.length - 1)
        } //built function
        answer_key={answerKey} //answer key
      >
        <div className="left-align">
          <span>
            <Blue>def</Blue>
            <Gold> binarySearch</Gold>(arr, target, low, high):
          </span>
          <br />
          <Tab>
            <>
              <Blue>if</Blue> low {'>'} high:
              <br />
              <Tab>
                <>
                  <Blue>return</Blue>
                  <BinaryCodeDropdown
                    size="small"
                    options={bcOptions1}
                    index={0}
                    answer={answerKey.question1}
                    update_answer={(chosenAnswer: string) =>
                      handleUpdateAnswer(0, chosenAnswer)
                    }
                  />
                </>
              </Tab>
              <br />
              mid = (high + low) // 2
              <br />
              <br />
              <Blue>if</Blue> target == arr[mid]:
              <br />
              <Tab>
                <>
                  <Blue>return</Blue>
                  <BinaryCodeDropdown
                    size="medium"
                    options={bcOptions2}
                    index={1}
                    answer={answerKey.question2}
                    update_answer={(chosenAnswer: string) =>
                      handleUpdateAnswer(1, chosenAnswer)
                    }
                  />
                </>
              </Tab>
              <Blue>elif</Blue> arr[mid] {'<'} target:
              <br />
              <Tab>
                <>
                  <Blue>return</Blue>
                  <Gold> binarySearch</Gold>
                  {'('}
                  <BinaryCodeDropdown
                    size="large"
                    options={bcOptions3}
                    index={2}
                    answer={answerKey.question3}
                    update_answer={(chosenAnswer: string) =>
                      handleUpdateAnswer(2, chosenAnswer)
                    }
                  />
                  {')'}
                </>
              </Tab>
              <Blue>else</Blue>:
              <br />
              <Tab>
                <>
                  <Blue>return</Blue>
                  <Gold> binarySearch</Gold>
                  {'('}
                  <BinaryCodeDropdown
                    size="large"
                    options={bcOptions4}
                    index={3}
                    answer={answerKey.question4}
                    update_answer={(chosenAnswer: string) =>
                      handleUpdateAnswer(3, chosenAnswer)
                    }
                  />
                  {')'}
                </>
              </Tab>
            </>
          </Tab>
        </div>
      </FinishCodeCard>
      <br />
      <br />
    </>
  );
}
export default BinaryCode;
