//import { useState } from 'react';
import DropDownSelect from './DropDownSelect';
import { options_array } from '../../types';
import { useLocalStorage } from '../useLocalStorage';

interface DropdownProps {
  size: string;
  options: options_array[];
  correct_answer?: (boolean | null | number)[];
  index: number;
  answer: string;
  update_answer: any;
  name: string;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useLocalStorage<string>(
    props.name + '-dropdown',
    ''
  );
  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.value;
    //console.log("Current value is ");
    //console.log(chosenAnswer);
    if (props.correct_answer === undefined) {
      // Code the Components Together dropdown
      props.update_answer(chosenAnswer);
    } else {
      // KhanCard dropdown

      const newArray = props.correct_answer.map((val, i) => {
        if (chosenAnswer === '' || chosenAnswer === null) {
          //console.log("Returning null...");
          return null;
        }

        if (i == props.index) {
          // console.log("NOT DROP: Returning some valueueueue...");
          return props.answer === chosenAnswer;
        } else {
          // console.log("Returning wtv val");
          // console.log(val);
          return val;
        }
      });

      // console.log("updating...");
      props.update_answer(newArray);
      //console.log(newArray);
    }

    setSelectedValue(chosenAnswer);
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
          value={selectedValue}
        />
      </div>{' '}
    </>
  );
}

export default Dropdown;
