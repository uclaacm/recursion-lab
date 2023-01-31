import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';

const Problem3: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM3_TITLE}>
      <>
            <div>
            Problem 3 Goes Here:
            </div>
            <button className="prevButton" onClick={() => navigate('/problem2')}>{"<"}</button>
            <button className="nextButton" onClick={() => navigate('/problem4')}>{">"}</button>
        </>
      </AppWrapper>
    </div>
  );
};

export default Problem3;
