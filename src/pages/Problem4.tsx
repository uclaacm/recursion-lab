import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';

const Problem4: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM4_TITLE}>
      <>
            <div>
            Problem 4 Goes Here:
            </div>
            <button className="prevButton" onClick={() => navigate('/problem3')}>{"<"}</button>
            <button className="nextButton" onClick={() => navigate('/')}>{">"}</button>
        </>
      </AppWrapper>
    </div>
  );
};

export default Problem4;
