import React, { useState } from 'react';
import '../../styles/Staircase.scss';

interface TriangleProps {
  numColumns: number;
}

interface BlockProps {
  index: number;
  key: number;
}

const Triangle: React.FC<TriangleProps> = ({ numColumns }) => {
  const columns = Array(numColumns).fill(null);
  const triangleColumns = columns.map((_, i) => {
    const column = Array(i + 1)
      .fill(null)
      .map((__, j) => {
        return <Block key={i * numColumns + j} index={i} />;
      });
    return (
      <div key={i} className="column">
        {column}
      </div>
    );
  });
  return <div className="triangle">{triangleColumns}</div>;
};

const Block: React.FC<BlockProps> = ({ index }) => {
  return <div className={`block block-${index}`}></div>;
};

function Staircase(): JSX.Element {
  const [numColumns, setNumColumns] = useState<number>(1);
  const [sumEnumerated, setSumEnumerated] = useState<string>('');
  const sum = (numColumns * (numColumns + 1)) / 2;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    let columns = '';
    for (let i = 1; i < value; i++) {
      columns += i.toString();
      columns += ' + ';
    }
    columns += value.toString();
    setSumEnumerated(columns);
    setNumColumns(value);
  };

  return (
    <div className="staircase-body">
      <p className="mario-step1-subtitle">
        Try to see the big picture and find a way to reduce it into smaller
        problems that reduce into base cases. This interactive staircase should
        help you see all the steps that make up the staircase, so have fun
        playing with it. Don&apos;t forget to see the relationship between one
        step to the next (literally)!
      </p>
      <br />
      <div className="goal-container">
        <div className="goal">Find the sum of the first n natural numbers.</div>
      </div>
      <p>Use the slider to set the value of n: {numColumns}</p>
      <div className="interactive-staircase">
        <div className="n-input-container">
          <input
            type="range"
            min="1"
            max="9"
            value={numColumns}
            step="1"
            onInput={(e) => handleChange(e)}
            className="input-field"
            list="tickmarks"
          />
          <datalist id="tickmarks">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
            <option value="8"></option>
            <option value="9"></option>
          </datalist>
        </div>
        <div className="tickmark-container">
          <div className="tickmark-label">
            {' '}
            {numColumns == 1 ? <b>1</b> : 1}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 2 ? <b>2</b> : 2}{' '}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 3 ? <b>3</b> : 3}{' '}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 4 ? <b>4</b> : 4}{' '}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 5 ? <b>5</b> : 5}{' '}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 6 ? <b>6</b> : 6}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 7 ? <b>7</b> : 7}{' '}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 8 ? <b>8</b> : 8}{' '}
          </div>
          <div className="tickmark-label">
            {' '}
            {numColumns == 9 ? <b>9</b> : 9}{' '}
          </div>
        </div>
        <br />
        <Triangle numColumns={numColumns} />
        <br />
        <span>
          <b>SUM </b>
          {numColumns > 1 ? `= ${sumEnumerated} = ` : '= '}
          <b>{`${sum}`}</b>
        </span>
        <br />
      </div>
    </div>
  );
}

export default Staircase;
