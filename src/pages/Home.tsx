import { FC } from 'react';
import '../styles/Home.scss';
import '../styles/Mario.scss';
import '../styles/Rabbits.scss';
import centerRabbit from '../assets/center_rabbit.png';
import centerMeadows from '../assets/centerMeadows.png';
import homepageTitle from '../assets/homepage_title.png';
import homepageBacklayer from '../assets/homepageBacklayer.png';
import leftRabbit from '../assets/leftRabbit.png';
import marioHomepage from '../assets/mario_homepage.png';
import rightRabbit from '../assets/rightRabbit.png';
import sideMeadows from '../assets/sideMeadows.png';
import startButton from '../assets/start_button.png';

const Home: FC = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homepageBacklayer})`,
        backgroundSize: 'cover',
      }}
    >
    <div className="start-button-container">
      <div className="start-button">
        <a href="/intro">
          <img src={startButton} alt="Start Button" />
        </a>
      </div>
    </div>
      <div>
        <img className="mario-image" src={marioHomepage} alt="Mario" />
      </div>
      <div>
        <img
          className="homepage-title"
          src={homepageTitle}
          alt="Homepage Title"
        />
      </div>
      <div>
        <img className="center-rabbit" src={centerRabbit} alt="Center Rabbit" />
      </div>
      <div>
        <img className="left-rabbit" src={leftRabbit} alt="Left Rabbit" />
      </div>
      <div>
        <img className="right-rabbit" src={rightRabbit} alt="Right Rabbit" />
      </div>
      <div>
        <img
          className="center-meadows"
          src={centerMeadows}
          alt="Center Meadows"
        />
      </div>
      <div>
        <img className="side-meadows" src={sideMeadows} alt="Side Meadows" />
      </div>
    </div>
  );
};

export default Home;
