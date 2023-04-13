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

  const handleClick = () => {
    if (tries <= 0) {
      return; //maybe disable the button
    }

    if (!props.correct_answer[props.index]) {
      setTries((prevTries) => prevTries - 1);
    }
    setExpand(true);
    setCorrect(props.correct_answer[props.index]);
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
    setExpand((prev) => !prev);
  };

  return (
    <div className="khan-card-container">
      <div className="khan-title">Fill in the Blank</div>
      <div className="khan-content">{props.children}</div>
      <div className="khan-horizontal-line"></div>
      <div className="khan-footer">
        <button className="show-answer" onClick={handleShowAnswer}>
          {`${expand ? 'Hide' : 'Show'} Answer`}
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
          <button onClick={handleClick}>Check</button>
        </div>
      </div>
      <div>
        {expand &&
          (correct || showAnswer ? (
            <p>
              {' '}
              {correct && 'Correct!'} {props.correct}
            </p>
          ) : (
            <p>Incorrect! {props.incorrect}</p>
          ))}
      </div>
    </div>
  );
}

export default KhanCard;
