import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface KhanCardProps {
  children?: JSX.Element;
  correct: string;
  incorrect: string;
  correct_answer: boolean[];
  index: number;
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
  const [correct, setCorrect] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    if (tries <= 0) {
      return;
    }
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
      className={`khan-card-container ${
        correct ? 'khan-card-container-correct' : ''
      }`}
    >
      <div className="khan-title">
        {correct ? (
          <CheckCircleIcon sx={{ color: 'green', fontSize: 'inherit' }} />
        ) : (
          <CheckCircleIcon sx={{ color: 'grey', fontSize: 'inherit' }} />
        )}
        &nbsp;&nbsp; Fill in the Blank
      </div>
      <div className="khan-content">{props.children}</div>
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
            disabled={tries == 0 || correct ? true : false}
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
