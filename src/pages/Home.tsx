import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import centerRabbit from '../assets/center_rabbit.png';
import '../styles/Home.scss';
import '../styles/Mario.scss';
import '../styles/Rabbits.scss';
import homeBackground from '../assets/home_page.png';
import marioHomepage from '../assets/mario_homepage.png';
import startButton from '../assets/start_button.png';
import title from '../assets/title.png';
import Button from '../components/shared/Button';

const Home: FC = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${homeBackground})`, backgroundSize: 'cover' }} >
      <Button icon={faGreaterThan} className="next-btn" navigation="/intro" />
      <div className="start-button-container">
        <img className="start-button" src={startButton} alt="Start Button" />
      </div>
      <div>
      <img className="mario-image" src={marioHomepage} alt="Mario" />
      </div>
      <div>
      <img className="title" src={title} alt="Title" />
      </div>
      <div>
      <img className="center-rabbit" src={centerRabbit} alt="Center Rabbit" />
      </div>
    </div>

  );
};

export default Home;
