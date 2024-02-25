import { useLocalStorage } from '../useLocalStorage';

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
  const [value, setValue] = useLocalStorage(props.name + '-input', '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strippedAnswer2 = e.target.value.trim();
    const strippedAnswer = e.target.value.replace(/\s/g, '');
    const lowerCaseAnswer = strippedAnswer.toLowerCase();

    const newArray = props.correct_answer.map((val, i) => {
      if (i == props.index) {
        if (strippedAnswer2 == '') {
          return null;
        }
        return props.answer === lowerCaseAnswer;
      } else {
        return val;
      }
    });

    props.update_answer(newArray);
    //localStorage.setItem(props.name, JSON.stringify(newArray));

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
