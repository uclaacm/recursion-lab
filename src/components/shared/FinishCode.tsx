import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

interface FinishCodeCardProps {
  children?: JSX.Element;
  description?: string;
  correct_answer: boolean[];
  index: number;
  chosen_function: any;
  given_function: any;
  answer_key: Record<PropertyKey, string>;
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

function FinishCodeCard(props: FinishCodeCardProps): JSX.Element {
  const [isExploding, setIsExploding] = useState(false);
  const [tries, setTries] = useState(3);
  const [correct, setCorrect] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [givenAnswer, setGivenAnswer] = useState(props.given_function());
  const [chosenAnswer, setChosenAnswer] = useState(0);
  let showAnswerResponse = '';
  const someArray = Object.entries(props.answer_key);

  someArray.forEach((element, index) => {
    const value = element[1];
    if (index != someArray.length - 1) {
      showAnswerResponse = showAnswerResponse + value + ', ';
    } else {
      showAnswerResponse = showAnswerResponse + value;
    }
  });

  const handleClick = async () => {
    if (tries <= 0) {
      return;
    }
    setGivenAnswer(props.given_function());
    setChosenAnswer(props.chosen_function());

    setShowAnswer(false);
    if (!props.correct_answer[props.index]) {
      setTries((prevTries) => prevTries - 1);
    } else {
      setIsExploding(true);
    }
    setExpand(true);
    setCorrect(props.correct_answer[props.index]);
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div
      className={`finish-card-container ${
        correct ? 'finish-card-container-correct' : ''
      }`}
    >
      <div className="finish-title">
        {correct ? (
          <CheckCircleIcon sx={{ color: 'green', fontSize: 'inherit' }} />
        ) : (
          <CheckCircleIcon sx={{ color: 'grey', fontSize: 'inherit' }} />
        )}
        &nbsp;&nbsp;Finish the code
      </div>
      <div style={{ margin: 'auto', textAlign: 'center', marginTop: '10px' }}>
        {props.description}
      </div>
      <div className="finish-content">
        <div>{props.children}</div>
        <div className="code-output">
          {expand &&
            !showAnswer &&
            tries != 0 &&
            (correct ? (
              <p className="correct-explanation">{`Correct! The answer is ${givenAnswer}.`}</p>
            ) : (
              <p className="incorrect-explanation">
                Incorrect. <br></br>{' '}
                {`The correct answer is ${givenAnswer}. Your answer was ${
                  chosenAnswer <= -1 ? 'max call stack exceeded' : chosenAnswer
                }`}
              </p>
            ))}
          <div>
            {(showAnswer || tries == 0) && (
              <p>{`One possible answer is ${showAnswerResponse}.`}</p>
            )}
          </div>
        </div>
      </div>
      <div className="finish-horizontal-line"></div>
      <div className="finish-footer">
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
            className="finish-check-button"
            onClick={handleClick}
            disabled={tries == 0 || correct ? true : false}
          >
            {isExploding && <ConfettiExplosion {...smallProps} />}
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishCodeCard;
