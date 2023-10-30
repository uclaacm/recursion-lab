import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { HeaderSections } from '../globalTypes';
import Sidebar from '../Sidebar';
import '../../../../src/styles/AppWrapper.scss';

/**
 * We can use our enum as the specified type that our HeaderProps recieves
 * Type our React Element with an interface
 */
export interface HeaderProps {
  section: HeaderSections;
  page: number;
}

export default function Header(props: HeaderProps): JSX.Element {
  const pageColors = ['#282A36', '#C84C0C', '#007da3', '#687B23', '#9D20A0'];
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div id="header" style={{ backgroundColor: pageColors[props.page] }}>
        <div className="menu-bars">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-icon"
            onClick={showSidebar}
            size="xl"
          />
        </div>
        <h1>{props.section}</h1>
        <div className="box"></div>
      </div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}></Sidebar>
    </>
  );
}
