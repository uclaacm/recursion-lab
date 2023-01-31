import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';

const Intro: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppWrapper section={HeaderSections.INTRO_TITLE}>
        <>
          <div>Intro Page.</div>
          <button className="prev-button" onClick={() => navigate('/')}>
            {'<'}
          </button>
          <button className="next-button" onClick={() => navigate('/problem1')}>
            {'>'}
          </button>
        </>
      </AppWrapper>
    </div>
  );
};

export default Intro;
