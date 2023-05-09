import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { FC } from 'react';
import './Problem3.scss';
import blueBackground from '../assets/bunnies/blueBackground.png';
import bottomBackground from '../assets/bunnies/bottomBackground.png';
import headerBackground from '../assets/bunnies/headerBackground.png';
import rabitGroup from '../assets/bunnies/rabitGroup.png';
import ProgressBar3 from '../assets/progress_bar3.png';
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

              <div style={{ paddingTop: '100px' }}>
                <ExpandBox
                  class="bunnies-title"
                  title="Understanding the Problem"
                  component={UnderstandingProblem}
                  icon={EmojiNatureIcon}
                />
                <ExpandBox
                  class="bunnies-title"
                  title="Identifying the Base Case"
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

              <div className="buttons">
                <Button
                  icon={faLessThan}
                  className="prev-btn"
                  navigation="/problem2"
                />
                <div className="progress-bar3">
                  <img
                    src={ProgressBar3}
                    alt="Progress Bar: You are on the Third Problem!"
                  />
                </div>
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

export default Problem3;
