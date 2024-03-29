import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { FC } from 'react';
import './Problem3.scss';

import blueBackground from '../assets/bunnies/blueBackground.png';
import bottomBackground from '../assets/bunnies/bottomBackground.png';
import headerBackground from '../assets/bunnies/headerBackground.png';
import rabitGroup from '../assets/bunnies/rabitGroup.png';
import ProgressBar3 from '../assets/progress_bars/progress3.png';

import BunnyBaseCase from '../components/bunny-comps/BunnyBaseCase';
import BunnyCode from '../components/bunny-comps/BunnyCode';
import BunnyFormula from '../components/bunny-comps/BunnyFormula';
import UnderstandingProblem from '../components/bunny-comps/BunnyUnderstandingProblem';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import ExpandBox from '../components/shared/ExpandBox';
import { HeaderSections } from '../components/shared/globalTypes';

const Problem3: FC = () => {
  return (
    <div className="bunnies">
      <AppWrapper section={HeaderSections.PROBLEM3_TITLE} page={3}>
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
                  growth of rabbits in a closed environment, we can use
                  recursion. Starting with a pair of rabbits, one girl and one
                  boy, after a month, they can give birth to a litter of 2-8
                  offspring. Assuming the rabbits can breed every month and the
                  offspring can start breeding after two months, we can
                  recursively calculate the number of rabbits after each month.
                  However, the population growth will eventually reach a
                  carrying capacity, after which it will stabilize or even
                  decrease due to competition for resources and disease.
                </p>
                <img src={rabitGroup} alt="" style={{ width: '80%' }} />
                <img
                  src={headerBackground}
                  alt=""
                  style={{ width: '125%', margin: '0 -20%' }}
                />
              </div>

              <div style={{ paddingTop: '100px' }}>
                <ExpandBox
                  class="bunnies-title"
                  title="Understand the Problem"
                  component={UnderstandingProblem}
                  icon={EmojiNatureIcon}
                />
                <ExpandBox
                  class="bunnies-title"
                  title="Identify the Base Case"
                  component={BunnyBaseCase}
                  icon={EmojiNatureIcon}
                />
                <ExpandBox
                  class="bunnies-title"
                  title="Generalize the Pattern: Recursive Formula"
                  component={BunnyFormula}
                  icon={EmojiNatureIcon}
                />
                <ExpandBox
                  class="bunnies-title"
                  title="Code the Components Together"
                  component={BunnyCode}
                  icon={EmojiNatureIcon}
                />
              </div>
              <div className="progress-bar" style={{ marginBottom: '0px' }}>
                <img
                  src={ProgressBar3}
                  alt="Progress Bar: You are on the Third Problem!"
                />
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
            <img
              src={bottomBackground}
              alt=""
              style={{ width: '100%', marginBottom: '-7px' }}
            />
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Problem3;
