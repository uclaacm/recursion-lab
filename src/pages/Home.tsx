import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';

const Home: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.HOME_TITLE}>
        <>
          <div>Home Page.</div>
          <Button
            icon={faGreaterThan}
            className="next-btn"
            navigation="/intro"
          />
        </>
      </AppWrapper>
    </div>
  );
};

export default Home;
