//import { useState } from 'react';
import Select from 'react-select';
import { options_array } from '../../types';

interface DropdownProps {
  size: string;
  options: options_array[];
  correct_answer: boolean[];
  index: number;
  answer: string;
  update_answer: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.value;
    const newArray = props.correct_answer.map((val, i) => {
      if (i == props.index) {
        return props.answer === chosenAnswer;
      } else {
        return val;
      }
    });
    props.update_answer(newArray);
  };

  return (
    <>
      {' '}
      <div
        style={{
          width: props.size == 'medium' ? '200px' : '100px',
          display: 'inline-block',
        }}
      >
        <Select options={props.options} onChange={handleChange} />
      </div>{' '}
    </>
  );
}

export default Dropdown;
