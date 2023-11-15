import { FC } from 'react';
import '../styles/Home.scss';
import '../styles/Mario.scss';
import '../styles/Rabbits.scss';
import meadows from '../assets/hill-background.png';
import homepageTitle from '../assets/homepage_newtitle.png';
import homepageBacklayer from '../assets/homepageBacklayer.png';
import marioHomepage from '../assets/mario_homepage.png';
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
      <img className="mario-image" src={marioHomepage} alt="Mario" />
      <div>
        <img
          className="homepage-title"
          src={homepageTitle}
          alt="Homepage Title"
        />
      </div>
      <p className="hp-text">
        {' '}
        Learn the concept of recursion through four guided problems!
        Beginner-friendly and a great refresher to this CS concept.
      </p>

      <img className="meadows" src={meadows} alt="Meadows" />
    </div>
  );
};

export default Home;
