import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import './Problem3.scss';

import blueBackground from '../assets/bunnies/blueBackground.png';
import bottomBackground from '../assets/bunnies/bottomBackground.png';
import greyTick from '../assets/bunnies/greyTick.png';
import headerBackground from '../assets/bunnies/headerBackground.png';
import rabitGroup from '../assets/bunnies/rabitGroup.png';

import BunnyBaseCase from '../components/bunny-comps/BunnyBaseCase';
import BunnyCode from '../components/bunny-comps/BunnyCode';
import BunnyFormula from '../components/bunny-comps/BunnyFormula';
import UnderstandingProblem from '../components/bunny-comps/BunnyUnderstandingProblem';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';

const Problem3: FC = () => {
  const [selected, setSelected] = useState(-1);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    setSelected(i);
  };
  return (
    <div className="bunnies">
      <AppWrapper section={HeaderSections.PROBLEM3_TITLE}>
        <div
          style={{
            backgroundColor: 'white',
            backgroundImage: `url(${blueBackground})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain',
          }}
        >
          <div className="body">
            <div className="content-container">
              <div className="header">
                <h1 className="title-name"> Rabbit </h1>
                <p className="setup">
                Population growth is the natural increase in the number of
                individuals in a given population. Factors like resources,
                predation, disease, and reproductive success influence
                population growth in rabbits. To predict the future population
                growth of rabbits in a closed environment, we can use recursion.
                Starting with a pair of rabbits, one girl and one boy, after
                a month, they can give birth to a litter of 2-8 offspring.
                Assuming the rabbits can breed every month and the offspring
                can start breeding after two months, we can recursively
                calculate the number of rabbits after each month. However,
                the population growth will eventually reach a carrying capacity,
                after which it will stabilize or even decrease due to competition
                for resources and disease.
                </p>
                <img src={rabitGroup} alt="" style={{ width: '80%' }} />
                <img
                  src={headerBackground}
                  alt=""
                  style={{ width: '125%', margin: '0 -20%' }}
                />
              </div>

              <div className="wrapper">
                <div className="accordion">
                  {data.map((item, i) => {
                    const Component = item.answer;
                    return (
                      <div key={i} className="item">
                        <div className="title" onClick={() => toggle(i)}>
                          {item.step}
                          <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div
                          className={
                            selected === i ? 'content show' : 'content'
                          }
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
                  navigation="/problem2"
                />
                <Button
                  icon={faGreaterThan}
                  className="next-btn"
                  navigation="/problem4"
                />
              </div>
            </div>
            <img src={bottomBackground} alt="" style={{ width: '100%' }} />
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

const data = [
  {
    step: <h2> <img src={greyTick} alt="" style={{ width: '15pt' }} /> Understanding the problem </h2>,
    answer: UnderstandingProblem,
  },
  {
    step: <h2> <img src={greyTick} alt="" style={{ width: '15pt' }} /> Identifying the Base Case </h2>,
    answer: BunnyBaseCase,
  },
  {
    step: <h2> <img src={greyTick} alt="" style={{ width: '15pt' }} /> Generalize the Pattern: Recursive Formula </h2>,
    answer: BunnyFormula,
  },
  {
    step: <h2> <img src={greyTick} alt="" style={{ width: '15pt' }} /> Code the Components Together </h2>,
    answer: BunnyCode,
  },
];

export default Problem3;
/*
            <Button
              icon="Prev"
              className="prev-button"
              navigation="/problem2"
            />
            <Button
              icon="Next"
              className="next-button"
              navigation="/problem4"
            />
*/
