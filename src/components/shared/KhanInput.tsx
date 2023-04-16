import { useState } from 'react';

interface KhanInputProps {
  correct_answer: boolean[];
  index: number;
  answer: string;
}

function KhanInput(props: KhanInputProps): JSX.Element {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === props.answer) {
      //wanted to use value instead of e.target.value, but race issue
      props.correct_answer[props.index] = true;
    } else {
      props.correct_answer[props.index] = false;
    }
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
