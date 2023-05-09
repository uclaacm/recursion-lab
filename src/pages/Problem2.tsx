import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import CallIcon from '@mui/icons-material/Call';
import { FC } from 'react';
import CircularDiagram from '../assets/Circular_Loop_Diagram_with_name.png';
import FoodBackground from '../assets/Food_Background.png';
import ProgressBar2 from '../assets/progress_bar2.png';
import DiningBaseCase from '../components/dining-comps/DiningBaseCase';
import DiningCode from '../components/dining-comps/DiningCode';
import DiningFormula from '../components/dining-comps/DiningFormula';
import DiningUnderstand from '../components/dining-comps/DiningUnderstand';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import Dropdown from '../components/shared/Dropdown';
import FinishCodeCard from '../components/shared/FinishCode';
import ExpandBox from '../components/shared/ExpandBox';
import { HeaderSections } from '../components/shared/globalTypes';
import '../styles/Problem2.scss';
import { options_array } from '../types';

const Problem2: FC = () => {
  const [selected, setSelected] = useState(-1);
  const [isCorrect] = useState([false]);
  const [answerKey] = useState({
    question1: 'dropdown2',
  });

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    setSelected(i);
  };


  const options0: options_array[] = [
    {
      value: 'dropdown1',
      label: 'n==0',
    },
    {
      value: 'dropdown2',
      label: 'n==1',
    },
    {
      value: 'dropdown3',
      label: 'n==2',
    },
  ];
  const options1: options_array[] = [
    {
      value: 'dropdown1',
      label: '0',
    },
    {
      value: 'dropdown2',
      label: '1',
    },
    {
      value: 'dropdown3',
      label: '2',
    },
  ];
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
      answer: (
        <FinishCodeCard
          correct="This is an explanation for when you get the answer correct."
          incorrect="This is a hint for when you get the answer incorrect."
          correct_answer={isCorrect}
          index={0}
        >
          <div className="code-component-container">
            <div className="factorial-text">
              <div>In this example, we will use n = 5.</div>
              <div>factorial(n):</div>
              <span>if</span>
              <Dropdown
                options={options0}
                correct_answer={isCorrect}
                index={0}
                answer={answerKey.question1}
              />
              <div></div>
              <span>return</span>
              <Dropdown
                options={options1}
                correct_answer={isCorrect}
                index={0}
                answer={answerKey.question1}
              />
              <div>return n * factorial(n-1)</div>
            </div>
            <div id="output"></div>
          </div>
        </FinishCodeCard>
      ), // Using the FinishCodeCard component inside
    },
  ];


  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  const outputDiv = document.getElementById('output');

  // If you're sure the element exists
  if (outputDiv) {
    const factorialOutput = factorial(5);
    outputDiv.innerHTML = `Factorial of 5 is: ${factorialOutput}`;
  }

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

            <ExpandBox
              class="dining-title"
              title="Understanding the Problem"
              component={DiningUnderstand}
              icon={CallIcon}
            />
            <ExpandBox
              class="dining-title"
              title="Identifying the Base Case"
              component={DiningBaseCase}
              icon={CallIcon}
            />
            <ExpandBox
              class="dining-title"
              title="Generalize the Pattern: Recursive Formula"
              component={DiningFormula}
              icon={CallIcon}
            />
            <ExpandBox
              class="dining-title"
              title="Code the Components Together"
              component={DiningCode}
              icon={CallIcon}
            />

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
export default Problem2;
