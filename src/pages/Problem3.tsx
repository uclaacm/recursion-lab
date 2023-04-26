import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import './Problem3.scss';
import blueBackground from '../assets/bunnies/blueBackground.png';
import bottomBackground from '../assets/bunnies/bottomBackground.png';
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
                <h1 className="title"> Rabbit </h1>
                <p className="setup">
                  Setup: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Sem viverra aliquet eget sit. Feugiat nibh sed
                  pulvinar proin gravida hendrerit lectus. Eget velit aliquet
                  sagittis id consectetur. In nibh mauris cursus mattis molestie
                  a iaculis at erat. Id aliquet lectus proin nibh nisl
                  condimentum. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames. Lectus arcu bibendum at varius vel
                  pharetra. Non quam lacus suspendisse faucibus interdum posuere
                  lorem ipsum dolor. Malesuada proin libero nunc consequat
                  interdum varius.
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
                          <h2>{item.step}</h2>
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
    step: '🗹 Understanding the problem',
    answer: UnderstandingProblem,
  },
  {
    step: '🗹 Identifying the Base Case',
    answer: BunnyBaseCase,
  },
  {
    step: '🗹 Generalize the Pattern: Recursive Formula',
    answer: BunnyFormula,
  },
  {
    step: '🗹 Code the Components Together',
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
