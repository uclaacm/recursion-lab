import { useLocalStorage } from '../useLocalStorage';

interface KhanInputProps {
  size: string;
  correct_answer: boolean[];
  index: number;
  answer: string;
  update_answer: React.Dispatch<React.SetStateAction<boolean[]>>;
  name: string;
}

function KhanInput(props: KhanInputProps): JSX.Element {
  const [value, setValue] = useLocalStorage(props.name + '-input', '');
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
