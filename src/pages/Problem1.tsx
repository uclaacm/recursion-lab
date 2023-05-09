import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { FC } from 'react';
import BricksBackground from '../assets/bricksBackground.png';
import MarioBackground from '../assets/marioBackground.png';
import ProgressBar1 from '../assets/progress_bar1.png';
import MarioBaseCase from '../components/mario-comps/MarioBaseCase';
import MarioCode from '../components/mario-comps/MarioCode';
import MarioFormula from '../components/mario-comps/MarioFormula';
import Staircase from '../components/mario-comps/Staircase';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import ExpandBox from '../components/shared/ExpandBox';
import { HeaderSections } from '../components/shared/globalTypes';
//import YardIcon from '@mui/icons-material/Yard';
import '../styles/Problem1.scss';

const Problem1: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM1_TITLE}>
        <div className="body">
          <div
            className="mario-background"
            style={{ backgroundImage: `url(${MarioBackground})` }}
          >
            <div className="mario-title-container">
              <h2 className="problem1-title">Staircases</h2>
              <p className="new-setup">
                It&apos;s-a-Me, Mario! You are so close to the gold coin! You
                really want to get up those steps and do your signature flag
                jump, but you just narrowly escaped Bowser for the 100th time
                and are super tired. You don&apos;t know if you have enough
                energy to complete the level and get up the stairs. Counting the
                total number of steps will help you know if you can make it!
              </p>
            </div>
          </div>
          <div
            className="content-container"
            style={{ backgroundImage: `url(${BricksBackground})` }}
          >
            <ExpandBox
              class="mario-title-new"
              title="Understanding the Problem"
              component={Staircase}
              icon={FlagCircleIcon}
            />
            <ExpandBox
              class="mario-title-new"
              title="Identifying the Base Case"
              component={MarioBaseCase}
              icon={FlagCircleIcon}
            />
            <ExpandBox
              class="mario-title-new"
              title="Generalize the Pattern: Recursive Formula"
              component={MarioFormula}
              icon={FlagCircleIcon}
            />
            <ExpandBox
              class="mario-title-new"
              title="Code the Components Together"
              component={MarioCode}
              icon={FlagCircleIcon}
            />

            <div className="progress-bar">
              <img
                src={ProgressBar1}
                alt="Progress Bar: You are on the First Problem!"
              />
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

export default Problem1;
