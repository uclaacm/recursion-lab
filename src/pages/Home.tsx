import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppWrapper section={HeaderSections.HOME_TITLE}>
        <>
            <div>
            Home Page.
            </div>
            <button className="nextButton" onClick={() => navigate('/intro')}>{">"}</button>
        </>
      </AppWrapper>
    </div>
  );
};

export default Home;
