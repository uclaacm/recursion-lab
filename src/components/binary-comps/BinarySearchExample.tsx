import '../../pages/Problem4.scss';
import { useState, useEffect } from 'react';
import SearchableWord from './SearchableWord';
import Goal from '../shared/Goal';

export default function BinarySearchExample({
  answer,
}: {
  answer: string;
}): JSX.Element {
  const WordList = [
    'accurate',
    'action',
    'amusement',
    'bad',
    'bite',
    'carpenter',
    'cloistered',
    'describe',
    'helpful',
    'hollow',
    'pear',
    'reflective',
    'satisfy',
    'scrawny',
    'unhealthy',
  ];
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(WordList.length / 2)
  );
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(WordList.length - 1);
  const [bSearchStatus, setBSearchStatus] = useState('null');

  useEffect(() => {
    const mid = left + Math.floor((right - left) / 2);
    setCurrentIndex(mid);
    if (WordList[mid] === answer) {
      setBSearchStatus('found');
    }
    if (left > right) {
      setBSearchStatus('not found');
    }
  }, [left, right]);

  function handleClick(buttonClicked: string) {
    if (right < left) {
      return;
    }
    if (left === -1) return;
    const rightButton = getRightButton(answer);
    if (rightButton === null) return;
    if (buttonClicked !== rightButton) alert('incorrect choice!');
    else {
      binarySearch(answer);
    }
  }

  function getRightButton(x: string) {
    if (right >= left) {
      const temp = left + Math.floor((right - left) / 2);

      // If the element is present at the middle
      // itself
      if (WordList[temp] === x) {
        return null;
      }

      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (WordList[temp] > x) return 'lower';
      // Else the element can only be present
      // in right subarray
      else return 'higher';
    }
    // We reach here when element is not
    // present in array
    return null;
  }

  function binarySearch(x: string) {
    if (right >= left) {
      const temp = left + Math.floor((right - left) / 2);

      // If the element is present at the middle
      // itself
      if (WordList[temp] === x) setLeft(-1);

      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (WordList[temp] > x) setRight(temp - 1);
      // Else the element can only be present
      // in right subarray
      else setLeft(temp + 1);
    }
    // We reach here when element is not
    // present in array
    return;
  }

  return (
    <>
      <Goal>
        Locate the index of the target &apos;{answer}&apos;. If not found,
        return -1.
      </Goal>
      <br />
      <div>
        {' '}
        Does the target word {answer} appear alphabetically before or after the
        currently highlighted word?
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {WordList.map((value, index) => {
          return (
            <div style={{ flex: '0 0 20%' }} key={index}>
              {' '}
              <SearchableWord
                word={value}
                selected={currentIndex === index && left <= right}
                inRange={left <= index && index <= right}
              />{' '}
            </div>
          );
        })}
      </div>
      <br />
      <button
        className="shared-button binary-red-btn"
        onClick={() => {
          handleClick('lower');
        }}
      >
        Lower
      </button>
      <div style={{ width: '10px', display: 'inline-block' }}></div>
      <button
        className="shared-button binary-green-btn"
        onClick={() => {
          handleClick('higher');
        }}
      >
        Higher
      </button>
      <div>
        {bSearchStatus === 'found' && <p>Word found!</p>}
        {bSearchStatus === 'not found' && <p>Word is not in the list!</p>}
      </div>
    </>
  );
}
