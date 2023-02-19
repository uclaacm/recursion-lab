import { FC, useState } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';
/** import './Problem3.scss'; **/

const Problem3: FC = () => {
  const [selected, setSelected] = useState(-1);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    setSelected(i);
  };
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM3_TITLE}>
        <div className="body">
          <p className="setup">
            Setup: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
            viverra aliquet eget sit. Feugiat nibh sed pulvinar proin gravida
            hendrerit lectus. Eget velit aliquet sagittis id consectetur. In
            nibh mauris cursus mattis molestie a iaculis at erat. Id aliquet
            lectus proin nibh nisl condimentum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames. Lectus arcu bibendum
            at varius vel pharetra. Non quam lacus suspendisse faucibus interdum
            posuere lorem ipsum dolor. Malesuada proin libero nunc consequat
            interdum varius.
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
            <Button icon="<" className="prev-button" navigation="/problem2" />
            <Button icon=">" className="next-button" navigation="/problem4" />
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

export default Problem3;
