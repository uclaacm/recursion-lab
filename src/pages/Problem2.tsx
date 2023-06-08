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
