import AppWrapper from './shared/AppWrapper';
import { HeaderSections } from './shared/globalTypes';

function App(): JSX.Element {
  return (
    <div>
      <AppWrapper section={HeaderSections.DEFAULT_SECTION}>
        Your content here! 🥔
      </AppWrapper>
    </div>
  );
}

export default App;
