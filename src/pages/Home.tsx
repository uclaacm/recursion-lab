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
          <Button icon="Next" className="next-button" navigation="/intro" />
        </>
      </AppWrapper>
    </div>
  );
};

export default Home;
