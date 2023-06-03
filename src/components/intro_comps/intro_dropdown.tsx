//import { useState } from 'react';
import Select from 'react-select';
import { options_array } from '../../types';

interface MyFunction {
  (str: string): void;
}

interface DropdownProps {
  options: options_array[];
  correct_answer: boolean[];
  index: number;
  answer: string;
  update_answer: MyFunction;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.label;
    props.update_answer(chosenAnswer);
  };

  return (
    <>
      {' '}
      <div style={{ width: '200px', display: 'inline-block' }}>
        <Select options={props.options} onChange={handleChange} />
      </div>{' '}
    </>
  );
}

export default Dropdown;
