import { FC } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';

const Intro: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.INTRO_TITLE}>
        <>
          <div>Intro Page.</div>
          <Button icon="<" className="prev-button" navigation="/"/>
          <Button icon=">" className="next-button" navigation="/problem1"/>
        </>
      </AppWrapper>
    </div>
  );
};

export default Intro;
