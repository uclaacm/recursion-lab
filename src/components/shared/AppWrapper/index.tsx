import Header from './Header';
import { HeaderSections } from '../globalTypes';
import '../../../styles/AppWrapper.scss';

export interface AppWrapperProps {
  section: HeaderSections;
  children?: JSX.Element | string;
}

export default function AppWrapper(props: AppWrapperProps): JSX.Element {
  return (
    <div id="app-wrapper">
      <Header section={props.section} />
      {props.children}
    </div>
  );
}
