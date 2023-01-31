import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';

const Problem1: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM1_TITLE}>
        <>
          <div>Problem 1 Goes Here:</div>
          <button className="prev-button" onClick={() => navigate('/intro')}>
            {'<'}
          </button>
          <button className="next-button" onClick={() => navigate('/problem2')}>
            {'>'}
          </button>
        </>
      </AppWrapper>
    </div>
  );
};

export default Problem1;
