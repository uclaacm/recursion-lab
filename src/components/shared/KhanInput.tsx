import { useState } from 'react';

interface KhanInputProps {
  correct_answer: boolean[];
  index: number;
  answer: string;
  update_answer: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function KhanInput(props: KhanInputProps): JSX.Element {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCaseAnswer = e.target.value.toLowerCase();

    const newArray = props.correct_answer.map((val, i) => {
      if (i == props.index) {
        return props.answer === lowerCaseAnswer;
      } else {
        return val;
      }
    });
    props.update_answer(newArray);
    setValue(e.target.value);
  };

  return (
    <>
      {' '}
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="input-field"
        value={value}
      />{' '}
    </>
  );
}

export default KhanInput;
