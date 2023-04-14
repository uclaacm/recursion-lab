import { useState } from 'react';

interface KhanCardProps {
  children?: JSX.Element;
  correct: string;
  incorrect: string;
  correct_answer: boolean[];
  index: number;
}

function KhanCard(props: KhanCardProps): JSX.Element {
  const [tries, setTries] = useState(3);
  const [correct, setCorrect] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  let display = '';
  let displayClassName = '';

  const handleClick = () => {
    if (tries <= 0) {
      return;
    }

    if (!props.correct_answer[props.index]) {
      setTries((prevTries) => prevTries - 1);
    }
    setExpand(true);
    setCorrect(props.correct_answer[props.index]);
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  if (correct || showAnswer || tries == 0) {
    display = props.correct;
    if (correct && !showAnswer) {
      display = 'Correct! ' + display;
      displayClassName = 'correct-explanation';
    }
  } else {
    if (!showAnswer) {
      display = 'Incorrect. ' + props.incorrect;
      displayClassName = 'incorrect-explanation';
    }
  }

  if (correct || showAnswer || tries == 0) {
    display = props.correct;
    if (correct && !showAnswer) {
      display = 'Correct! ' + display;
      displayClassName = 'correct-explanation';
    }
  } else {
    if (!showAnswer) {
      display = 'Incorrect. ' + props.incorrect;
      displayClassName = 'incorrect-explanation';
    }
  }

  return (
    <div
      className={`khan-card-container ${
        correct ? 'khan-card-container-correct' : ''
      }`}
    >
      <div className="khan-title">Fill in the Blank</div>
      <div className="khan-content">{props.children}</div>
      <div className="khan-horizontal-line"></div>
      <div className="khan-footer">
        <button className="show-answer" onClick={handleShowAnswer}>
          Show Answer
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
            disabled={tries == 0 ? true : false}
          >
            Check
          </button>
        </div>
      </div>
      <div>{expand && <p className={displayClassName}>{display}</p>}</div>
    </div>
  );
}

export default KhanCard;
