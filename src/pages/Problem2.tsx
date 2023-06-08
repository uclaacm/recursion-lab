import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import CallIcon from '@mui/icons-material/Call';
import { FC } from 'react';
import CircularDiagram from '../assets/Circular_Loop_Diagram_with_name.png';
import FoodBackground from '../assets/newFoodBackground.png';
import ProgressBar2 from '../assets/progress_bars/progress2.png';
import DiningBaseCase from '../components/dining-comps/DiningBaseCase';
import DiningCode from '../components/dining-comps/DiningCode';
import DiningFormula from '../components/dining-comps/DiningFormula';
import DiningUnderstand from '../components/dining-comps/DiningUnderstand';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import ExpandBox from '../components/shared/ExpandBox';
import { HeaderSections } from '../components/shared/globalTypes';
import '../styles/Problem2.scss';

const Problem2: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM2_TITLE} page={2}>
        <div className="body">
          <div
            className="content-container"
            style={{
              backgroundImage: `url(${FoodBackground})`,
              backgroundColor: 'white',
            }}
          >
            <div className="problem2-title">Dining Out</div>
            <p className="dining-setup">
              Ring Ring! It&apos;s lunch time. You live in a world where
              everyone is always on the phone, so you need to take into account
              the total time it will take to call your friend, especially if
              your friend is on a phone call with his friend and his friend is
              on a call with his friend, and so on. Assume each person can be on
              the phone with at most two friends and you know how long each
              direct phone call will be. Sounds like a binary tree, doesn&apos;t
              it...
            </p>
            <div className="circular-diagram">
              <img src={CircularDiagram} alt="Circular Diagram with names" />
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
