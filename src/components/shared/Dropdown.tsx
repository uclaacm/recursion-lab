import { useEffect, useContext, useRef } from 'react';
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
  finish?: boolean;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const { tries, showAnswer, setShowAnswer } = useContext(AutofillContext);
  const [selectedValue, setSelectedValue] = useLocalStorage<string>(
    props.name + '-dropdown',
    ''
  );

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
      setSelectedValue(props.answer);
      setShowAnswer(true);
    } else if (prevShowAnswer && !showAnswer) {
      // Show Answer went from True to False
      setSelectedValue('');
    }
  }, [tries, showAnswer, prevShowAnswer]);

  const { correctAnswers, setCorrectAnswers } = useContext(KhanCardContext)!; // Consume the context

  const handleChange = (selectedOption: any) => {
    const chosenAnswer = selectedOption.value;

    if (
      (props.finish && props.correct_answer === undefined) ||
      (!props.finish && correctAnswers === undefined)
    ) {
      // Code the Components Together dropdown
      props.update_answer(chosenAnswer);
    } else {
      // KhanCard dropdown
      if (props.finish) {
        const newArray2 = props.correct_answer.map((val, i) => {
          if (i == props.index) return props.answer === chosenAnswer;
          else return val;
        });
        props.update_answer(newArray2);
      } else {
        const newArray = correctAnswers.map((val, i) => {
          if (chosenAnswer === '' || chosenAnswer === null) {
            //return null;
            return false;
          }

          if (i == props.index) {
            return props.answer === chosenAnswer;
          } else {
            return val;
          }
        });
        setCorrectAnswers(newArray);
      }
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
