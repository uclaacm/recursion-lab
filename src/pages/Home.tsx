import { FC } from 'react';
import '../styles/Home.scss';
import '../styles/Mario.scss';
import '../styles/Rabbits.scss';
import { useNavigate } from 'react-router-dom';
import meadows from '../assets/hill-background.png';
import homepageTitle from '../assets/homepage_newtitle.png';
import homepageBacklayer from '../assets/homepageBacklayer.png';
import marioHomepage from '../assets/mario_homepage.png';

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homepageBacklayer})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="start-button-container">
        <button className="start-button" onClick={() => navigate('/intro')}>
          start
        </button>
        <div className="reset-button-container">
          <button
            className="start-button reset-button"
            onClick={() => {
              localStorage.clear();
            }}
          >
            restart
          </button>
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
