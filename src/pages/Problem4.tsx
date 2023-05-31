import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { FC, useState, useEffect } from 'react';
import BookShelf from '../assets/books.png';
import Magnifying from '../assets/magnifying.png';
import OpenBook from '../assets/open-book.png';
import ProgressBar4 from '../assets/progress_bar4.png';
import BinaryBaseCase from '../components/binary-comps/BinaryBaseCase';
import BinaryCode from '../components/binary-comps/BinaryCode';
import BinaryFormula from '../components/binary-comps/BinaryFormula';
import BinaryUnderstandPart1 from '../components/binary-comps/BinaryUnderstandPart1';
import BinaryUnderstandPart2 from '../components/binary-comps/BinaryUnderstandPart2';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import ExpandBox from '../components/shared/ExpandBox';
import { HeaderSections } from '../components/shared/globalTypes';
import './Problem4.scss';

const Problem4: FC = () => {
  const [passedIntro, setPassedIntro] = useState(false);
  const [displayRest, setDisplayRest] = useState(false);
  const [index, setIndex] = useState(0);
  const wordList = [
    'aa',
    'aah',
    'Aalenian',
    'aaliis',
    'aardvark',
    'aardwolves',
    'Aaron',
    'Arronite',
    'aasvoel',
    'ab',
    'Ababda',
    'abaca',
  ];
  const [topDisplacement, setTopDisplacement] = useState(50);
  const [rightDisplacement, setRightDisplacement] = useState(465);

  useEffect(() => {
    if (index > 0 && index < 12) {
      setTopDisplacement(topDisplacement + 35);
    }
    if (index === 12) {
      setPassedIntro(true);
    }
    if (index === 6) {
      setTopDisplacement(50);
      setRightDisplacement(-200);
    }
  }, [index]);

  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM4_TITLE}>
        <div className="body">
          <div
            className="content-container"
            style={{
              backgroundImage: `url(${BookShelf})`,
            }}
          >
            <img src={OpenBook} className="open-book"></img>
            <img
              src={Magnifying}
              style={{
                right: rightDisplacement + 'px',
                left: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
                position: 'absolute',
                top: topDisplacement + 'px',
              }}
            ></img>
            <div className="word-list">
              {wordList.map((value, i) => {
                return (
                  /* style={{ flex: '0 0 50%' }} */
                  <div key={i}>
                    <div style={{ paddingBottom: '10px' }}>{value}</div>
                  </div>
                );
              })}
            </div>

            <div className="problem-body">
              <p style={{ padding: '10px' }}>Current word: {wordList[index]}</p>

              <button
                style={{ margin: '10px' }}
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                Next
              </button>
              {passedIntro && (
                <div>
                  <h2> {'Too slow? Learn Binary Search'} </h2>
                  <button
                    style={{ margin: '10px' }}
                    onClick={() => {
                      setDisplayRest(true);
                    }}
                  >
                    Go!
                  </button>
                </div>
              )}
              {displayRest && (
                <>
                  <ExpandBox
                    class="binary-title"
                    title="Understanding the Problem Part 1"
                    component={BinaryUnderstandPart1}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Identifying the Base Case Part 1"
                    component={BinaryBaseCase}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Understanding the Problem Part 2"
                    component={BinaryUnderstandPart2}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Identifying the Base Case Part 2"
                    component={BinaryBaseCase}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Generalize the Pattern: Recursive Formula"
                    component={BinaryFormula}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Code the Components Together"
                    component={BinaryCode}
                    icon={AutoStoriesIcon}
                  />
                </>
              )}
            </div>

            <div id="bottom-bar">
              <Button
                icon={faLessThan}
                className="prev-btn"
                navigation="/problem3"
              />
              <div className="progress-bar4">
                <img
                  src={ProgressBar4}
                  alt="Progress Bar: You are on the Fourth Problem!"
                />
              </div>
              <Button
                icon={faGreaterThan}
                className="next-btn"
                navigation="/"
              />
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Problem4;
