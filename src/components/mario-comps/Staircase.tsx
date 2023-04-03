import React, { useState } from 'react';
import '../../styles/Staircase.scss';

interface TriangleProps {
  numRows: number;
}

interface BlockProps {
  index: number;
  key: number;
}

const Triangle: React.FC<TriangleProps> = ({ numRows }) => {
  const [rows] = useState<Array<null>>(Array(numRows).fill(null));
  const triangleRows = rows.map((_, i) => {
    const row = Array(i + 1)
      .fill(null)
      .map((__, j) => {
        return <Block key={i * numRows + j} index={i} />;
      });
    return (
      <div key={i} className="row">
        {row}
      </div>
    );
  });
  return <div className="triangle">{triangleRows}</div>;
};

const Block: React.FC<BlockProps> = ({ index }) => {
  return <div className={`block block-${index}`}></div>;
};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setNumRows: React.Dispatch<React.SetStateAction<number>>
) => {
  const value = parseInt(e.target.value);
  if (isNaN(value) || value < 1 || value >= 10) {
    setNumRows(0);
    return;
  }
  setNumRows(value);
};

function Staircase(): JSX.Element {
  const [numRows, setNumRows] = useState<number>(0);
  const sum = (numRows * (numRows + 1)) / 2;
  return (
    <div className="staircase-body">
      <h3>
        This stage is meant for you to first see the big picture and find a way
        to reduce it into smaller problems that reduce into base cases. This
        interactive staircase should help you see all the steps that make up the
        staircase, so have fun playing with it. Don&apos;t forget to see the
        relationship between one step to the next literally!
      </h3>
      <h5>Find the sum of the first n natural numbers.</h5>
      <h5>Enter a number n between 1 and 9:</h5>
      <div className="interactive-staircase">
        <div className="n-input-container">
          <span>n = </span>
          <input
            type="text"
            onChange={(e) => handleChange(e, setNumRows)}
            className="input-field"
          />
        </div>
        {numRows > 0 && <Triangle numRows={numRows} />}
        {numRows > 0 && `SUM = ${sum}`}
      </div>
    </div>
  );
}

export default Staircase;
