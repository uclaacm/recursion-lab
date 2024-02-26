import React, { useEffect, useContext } from 'react';
import { KhanCardContext } from './KhanCard'; // Import the context
import { useLocalStorage } from '../useLocalStorage';
import AutofillContext from '../../context/AutofillContext';

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
  const { tries, showAnswer } = useContext(AutofillContext);
  const [value, setValue] = useLocalStorage(props.name + '-input', '');
  const { correctAnswers, setCorrectAnswers } = useContext(KhanCardContext)!; // Consume the context

  useEffect(() => {
    if (tries === 0 || showAnswer) {
      setValue(props.answer);
    } else if (!showAnswer) {
      setValue('');
    }
  }, [tries, showAnswer]);
  
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
