import React, { useEffect, useContext, useRef } from 'react';
import { KhanCardContext } from './KhanCard'; // Import the context
import AutofillContext from '../../context/AutofillContext';
import { useLocalStorage } from '../useLocalStorage';

interface KhanInputProps {
  size: string;
  correct_answer: (boolean | null | number)[];
  index: number;
  answer: string;
  update_answer: React.Dispatch<
    React.SetStateAction<(boolean | null | number)[]>
  >;
  name: string;
}

function KhanInput(props: KhanInputProps): JSX.Element {
  const { tries, showAnswer, setShowAnswer } = useContext(AutofillContext);
  const [value, setValue] = useLocalStorage(props.name + '-input', '');
  const { correctAnswers, setCorrectAnswers } = useContext(KhanCardContext)!; // Consume the context

  function usePrevious(prevValue: boolean) {
    const ref = useRef<boolean | null>(null);
    useEffect(() => {
      ref.current = prevValue;
    }, [prevValue]);
    return ref.current;
  }

  const prevShowAnswer = usePrevious(showAnswer);

  useEffect(() => {
    if (tries === 0 || showAnswer) {
      setValue(props.answer);
      setShowAnswer(true);
    } else if (prevShowAnswer && !showAnswer) {
      // Show Answer went from True to False
      setValue('');
    }
  }, [tries, showAnswer, prevShowAnswer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strippedAnswer2 = e.target.value.trim();
    const strippedAnswer = e.target.value.replace(/\s/g, '');
    const lowerCaseAnswer = strippedAnswer.toLowerCase();

    const newArray = correctAnswers.map((val, i) => {
      if (i == props.index) {
        if (strippedAnswer2 == '') {
          return null;
        }
        return props.answer === lowerCaseAnswer;
      } else {
        return val;
      }
    });

    setCorrectAnswers(newArray);
    setValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className={`${props.size}-input-field`}
        value={value}
      />
    </>
  );
}

export default KhanInput;
