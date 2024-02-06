//import { useState } from 'react';
import DropDownSelect from './DropDownSelect';
import { options_array } from '../../types';

interface DropdownProps {
  size: string;
  options: options_array[];
  correct_answer?: boolean[];
  index: number;
  answer: string;
  update_answer: any;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.value;
    if (props.correct_answer === undefined) {
      // Code the Components Together dropdown
      props.update_answer(chosenAnswer);
    } else {
      // KhanCard dropdown
      const newArray = props.correct_answer.map((val, i) => {
        if (i == props.index) return props.answer === chosenAnswer;
        else return val;
      });
      props.update_answer(newArray);
    }
  };

  type Size = 'small' | 'medium' | 'large';

  return (
    <>
      {' '}
      <div className={`${props.size}-dropdown-field`}>
        <DropDownSelect
          options={props.options}
          onChange={handleChange}
          placeholder={props.size === 'small' ? '...' : 'Select...'}
          size={props.size as Size}
        />
      </div>{' '}
    </>
  );
}

export default Dropdown;
