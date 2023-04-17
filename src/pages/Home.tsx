import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import Button from '../components/shared/Button';
import '../styles/Home.scss';

const Home: FC = () => {
  return (
    <div className="home-container">
      <span>Home Page.</span>
      <Button icon={faGreaterThan} className="next-btn" navigation="/intro" />
    </div>
  );
};

export default Home;
