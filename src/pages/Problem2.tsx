import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import CircularDiagram from '../assets/Circular_Loop_Diagram_with_name.png';
import FoodBackground from '../assets/Food_Background.png';
import ProgressBar2 from '../assets/progress_bar2.png';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';
import '../styles/Problem2.scss';

const Problem2: FC = () => {
  const [selected, setSelected] = useState(-1);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    setSelected(i);
  };
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM2_TITLE}>
        <div className="body">
          <div
            className="content-container"
            style={{ backgroundImage: `url(${FoodBackground})` }}
          >
            <div className="main-title">Dining Out</div>
            <p className="setup">
              Setup: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sem viverra aliquet eget sit. Feugiat nibh sed pulvinar proin
              gravida hendrerit lectus. Eget velit aliquet sagittis id
              consectetur. In nibh mauris cursus mattis molestie a iaculis at
              erat. Id aliquet lectus proin nibh nisl condimentum. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames.
              Lectus arcu bibendum at varius vel pharetra. Non quam lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor. Malesuada
              proin libero nunc consequat interdum varius.
            </p>
            <div className="circular-diagram">
              <img src={CircularDiagram} alt="Circular Diagram with names" />
            </div>

            <div className="wrapper">
              <div className="accordion">
                {data.map((item, i) => (
                  <div key={i} className="item">
                    <div className="title" onClick={() => toggle(i)}>
                      <h2>{item.step}</h2>
                      <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div
                      className={selected === i ? 'content show' : 'content'}
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="progress-bar">
              <img
                src={ProgressBar2}
                alt="Progress Bar: You are on the Second Problem!"
              />
            </div>

            <div className="buttons">
              <Button
                icon={faLessThan}
                className="prev-btn"
                navigation="/problem1"
              />
              <Button
                icon={faGreaterThan}
                className="next-btn"
                navigation="/problem3"
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
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'Identifying the Base Case',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'Generalize the Pattern: Recursive Formula',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'Code the Components Together',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default Problem2;

/*
            <Button
              icon="Prev"
              className="prev-button"
              navigation="/problem1"
            />
            <Button
              icon="Next"
              className="next-button"
              navigation="/problem3"
            />
*/
