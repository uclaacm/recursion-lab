import { useState } from 'react';
import Select from 'react-select';
import { options_array } from '../../types';

interface DropdownProps {
  options: options_array[];
  correct_answer: boolean[];
  index: number;
  answer: string;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const [, setVal] = useState<string>('');
  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.value;
    if (chosenAnswer === props.answer) {
      props.correct_answer[props.index] = true;
    } else {
      props.correct_answer[props.index] = false;
    }
    setVal(chosenAnswer);
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
