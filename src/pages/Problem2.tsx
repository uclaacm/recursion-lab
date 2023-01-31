import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';

const Problem2: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM2_TITLE}>
      <>
            <div>
            Problem 2 Goes Here:
            </div>
            <button className="prevButton" onClick={() => navigate('/problem1')}>{"<"}</button>
            <button className="nextButton" onClick={() => navigate('/problem3')}>{">"}</button>
        </>
      </AppWrapper>
    </div>
  );
};

export default Problem2;
