import { useEffect, useContext } from 'react';
import DropDownSelect from './DropDownSelect';
import { KhanCardContext } from './KhanCard'; // Import the context
import AutofillContext from '../../context/AutofillContext';
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
  const { tries, showAnswer } = useContext(AutofillContext);
  const [selectedValue, setSelectedValue] = useLocalStorage<string>(
    props.name + '-dropdown',
    ''
  );

  useEffect(() => {
    if (tries === 0 || showAnswer) {
      setSelectedValue(props.answer);
    } else if (!showAnswer) {
      setSelectedValue('');
    }
  }, [tries, showAnswer]);

  const { correctAnswers, setCorrectAnswers } = useContext(KhanCardContext)!; // Consume the context

  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.value;

    if (correctAnswers === undefined) {
      // Code the Components Together dropdown
      props.update_answer(chosenAnswer);
    } else {
      // KhanCard dropdown

      const newArray = correctAnswers.map((val, i) => {
        if (chosenAnswer === '' || chosenAnswer === null) {
          return null;
        }

        if (i == props.index) {
          return props.answer === chosenAnswer;
        } else {
          return val;
        }
      });

      setCorrectAnswers(newArray);
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
