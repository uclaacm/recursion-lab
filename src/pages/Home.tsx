import { FC } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import { HeaderSections } from '../components/shared/globalTypes';
import Button from '../components/shared/Button';

const Home: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.HOME_TITLE}>
        <>
          <div>Home Page.</div>
          <Button icon=">" className="next-button" navigation="/intro"/>
        </>
      </AppWrapper>
    </div>
  );
};

export default Home;
