import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';

/** import './Problem1.scss'; **/

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
          <p className="setup">
            Imagine you are make a lunch plan with your friends.<br/>
            You decided to call two friends in the friend group to check if they are available. <br/>
            When they get the call from you, they want to see if other people are also available to join!
          </p>
          <div className="wrapper">
            <div className="accordion">
              {data.map((item, i) => (
                <div key={i} className="item">
                  <div className="title" onClick={() => toggle(i)}>
                    <h2>{item.step}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>
                    {item.answer}
                  </div>
                </div>
              ))}
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
      </AppWrapper>
    </div>
  );
};

const data = [
  {
    step: 'step 1',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'step 2',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'step 3',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'step 4',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default Problem1;
