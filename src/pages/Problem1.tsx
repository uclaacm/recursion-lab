import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import MarioBaseCase from '../components/mario-comps/MarioBaseCase';
import MarioCode from '../components/mario-comps/MarioCode';
import MarioFormula from '../components/mario-comps/MarioFormula';
import Staircase from '../components/mario-comps/Staircase';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import MarioBackground from '../assets/marioBackground.png';
import { HeaderSections } from '../components/shared/globalTypes';

import '../styles/Problem1.scss';

const Problem1: FC = () => {
  const [selected, setSelected] = useState(-1);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    setSelected(i);
  };
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM1_TITLE}>
        <div className="body">
          <div
            className="mario-background"
            style={{ backgroundImage: `url(${MarioBackground})` }}
          >
            <h2 className="problem1-title">Staircases</h2>
          </div>
          <div className="content-container">
            <p className="setup">
              It&apos;s-a-Me, Mario! You are so close to the finish flag! You
              really want to get up those steps and do your signature flag jump,
              but you just narrowly escaped Bowser for the 100th time and are
              super tired. You don&apos;t know if you have enough energy to
              complete the level and get up the stairs. Counting the total
              number of steps will help you know if you can make it!
            </p>
            <div className="wrapper">
              <div className="accordion">
                {data.map((item, i) => {
                  const Component = item.answer;
                  return (
                    <div key={i} className="item">
                      <div
                        className="title mario-title"
                        onClick={() => toggle(i)}
                      >
                        <h2>{item.step}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                      </div>
                      <div
                        className={selected === i ? 'content show' : 'content'}
                      >
                        {Component()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="buttons">
              <Button
                icon={faLessThan}
                className="prev-btn"
                navigation="/intro"
              />
              <Button
                icon={faGreaterThan}
                className="next-btn"
                navigation="/problem2"
              />
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

const data = [
  {
    step: 'Understanding the Problem',
    answer: Staircase,
  },
  {
    step: 'Identifying the Base Case',
    answer: MarioBaseCase,
  },
  {
    step: 'Generalize the Pattern: Recursive Formula',
    answer: MarioFormula,
  },
  {
    step: 'Code the Components Together',
    answer: MarioCode,
  },
];

export default Problem1;
