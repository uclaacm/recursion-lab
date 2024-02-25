import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useLocalStorage } from '../useLocalStorage';

interface KhanCardProps {
  children?: JSX.Element;
  correct: string;
  incorrect: string;
  correct_answer: (boolean | null | number)[];
  index: number[];
  name: string;
}

interface ConfettiProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  particleCount?: number;
  duration?: number;
  colors?: string[];
  particleSize?: number;
  force?: number;
  height?: number | string;
  width?: number;
  zIndex?: number;
  onComplete?: () => void;
}

const smallProps: ConfettiProps = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};

function KhanCard(props: KhanCardProps): JSX.Element {
  const [isExploding, setIsExploding] = useState(false);
  const [tries, setTries] = useState(3);
  const [correct, setCorrect] = useLocalStorage(props.name + '-correct', false);
  const [correctAnswers, setCorrectAnswers] = useLocalStorage<
    (boolean | null | number)[]
  >(props.name + '-correct_answers', props.correct_answer);
  const [expand, setExpand] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useLocalStorage(
    props.name + '-correct_disable',
    true
  );

  let correctness = correctAnswers;
  /*
  useEffect(() => {
    console.log("Here is the value from database: ");
    console.log(correctAnswers);
    const blankQuestions = correctAnswers.some(answer => answer === -1);
    setIsButtonDisabled(blankQuestions);
    console.log
  }, [correctAnswers]);*/

  useEffect(() => {
    correctness = props.correct_answer;

    if (correctness.every((answer) => answer === -1)) {
      return;
    }
    setCorrectAnswers(props.correct_answer);

    const blankQuestions = correctness.some((answer) => answer === null);
    setIsButtonDisabled(blankQuestions);
  }, [props.correct_answer]);

  const handleClick = () => {
    if (tries <= 0) {
      return;
    }
    setShowAnswer(false);

    let isCorrect = true;
    const indexArray = props.index;
    for (let i = 0; i < indexArray.length; i++) {
      if (!props.correct_answer[indexArray[i]]) {
        isCorrect = false;
      }
    }

    if (!isCorrect) {
      setTries((prevTries) => prevTries - 1);
    } else {
      setCorrect(true);
      setIsExploding(true);
    }
    setExpand(true);
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div
      className={`khan-card-container ${
        correct ? 'khan-card-container-correct' : ''
      }`}
    >
      <div
        className="khan-title"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {correct ? (
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        ) : (
          <CheckCircleIcon sx={{ color: 'grey', fontSize: 'inherit' }} />
        )}
        &nbsp;&nbsp; Fill in the Blank
      </div>
      <div className="khan-content">{props.children}</div>
      <br></br>
      <div className="khan-horizontal-line"></div>
      <div className="khan-footer">
        <button className="show-answer" onClick={handleShowAnswer}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        <div className="tries-left-container">
          <div className="tries-left">Tries Left</div>
          <div className="circle-container">
            <div
              className={`circle ${tries == 3 ? 'circle-active' : ''}`}
            ></div>
            <div
              className={`circle ${tries >= 2 ? 'circle-active' : ''}`}
            ></div>
            <div
              className={`circle ${tries >= 1 ? 'circle-active' : ''}`}
            ></div>
          </div>
          <button
            className="khan-check-button"
            onClick={handleClick}
            disabled={isButtonDisabled || tries == 0 || correct ? true : false}
          >
            {isExploding && <ConfettiExplosion {...smallProps} />}
            Check
          </button>
        </div>
      </div>
      <div>
        {expand &&
          !showAnswer &&
          tries != 0 &&
          (correct ? (
            <p className="correct-explanation">{`Correct! ${props.correct}`}</p>
          ) : (
            <p className="incorrect-explanation">{`Incorrect. ${props.incorrect}`}</p>
          ))}
      </div>
      <div>{(showAnswer || tries == 0) && <p>{props.correct}</p>}</div>
    </div>
  );
}

export default KhanCard;
