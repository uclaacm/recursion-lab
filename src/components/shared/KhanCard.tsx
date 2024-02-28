import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState, useEffect, createContext, useMemo } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import AutofillContext from '../../context/AutofillContext';
import { useLocalStorage } from '../useLocalStorage';

interface KhanCardProps {
  children?: JSX.Element;
  correct: string;
  incorrect: string;
  correct_answer: (boolean | null | number)[];
  index: number[];
  name: string;
}

interface KhanCardContextType {
  correctAnswers: (boolean | null | number)[];
  setCorrectAnswers: React.Dispatch<
    React.SetStateAction<(boolean | null | number)[]>
  >;
}

export const KhanCardContext = createContext<KhanCardContextType>({
  correctAnswers: [],
  setCorrectAnswers: () => {},
});

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
  const [tries, setTries] = useLocalStorage(props.name + '-tries', 3);
  const [correct, setCorrect] = useLocalStorage(props.name + '-correct', false);
  const [expand, setExpand] = useLocalStorage(props.name + '-expand', false);
  const [showAnswer, setShowAnswer] = useLocalStorage(
    props.name + '-showAnswer',
    false
  );
  const [correctAnswers, setCorrectAnswers] = useLocalStorage<
    (boolean | null | number)[]
  >(props.name + '-correct_answers', props.correct_answer);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const contextValue = useMemo(
    () => ({
      tries,
      showAnswer,
      setShowAnswer,
    }),
    [tries, showAnswer]
  );

  let correctness = correctAnswers;

  useEffect(() => {
    correctness = correctAnswers;

    const blankQuestions = correctness.some(
      (answer) => answer === null || answer === -1
    );
    setIsButtonDisabled(blankQuestions);
  }, [correctAnswers]);

  const handleClick = () => {
    if (tries <= 0) {
      return;
    }
    setShowAnswer(false);

    let isCorrect = true;
    const indexArray = props.index;
    for (let i = 0; i < indexArray.length; i++) {
      if (!correctAnswers[indexArray[i]]) {
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
    if (!showAnswer) {
      setIsButtonDisabled(true);
    }
  };

  return (
    <KhanCardContext.Provider value={{ correctAnswers, setCorrectAnswers }}>
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
        <AutofillContext.Provider value={contextValue}>
          <div className="khan-content">{props.children}</div>
        </AutofillContext.Provider>
        <br></br>
        <div className="khan-horizontal-line"></div>
        <div className="khan-footer">
          <button
            className="show-answer"
            onClick={handleShowAnswer}
            style={{ cursor: tries === 0 ? 'default' : 'pointer' }}
          >
            {showAnswer
              ? tries === 0
                ? 'The Answer'
                : 'Hide Answer'
              : 'Show Answer'}
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
              disabled={
                isButtonDisabled || tries === 0 || showAnswer || correct
                  ? true
                  : false
              }
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
        <div>{(showAnswer || tries === 0) && <p>{props.correct}</p>}</div>
      </div>
    </KhanCardContext.Provider>
  );
}

export default KhanCard;
