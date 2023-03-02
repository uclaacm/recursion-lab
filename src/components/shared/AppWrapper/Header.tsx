import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderSections } from '../globalTypes';
import { SidebarData } from '../SidebarData';
import '../../../../src/styles/AppWrapper.scss';

/**
 * We can use our enum as the specified type that our HeaderProps recieves
 * Type our React Element with an interface
 */
export interface HeaderProps {
  section: HeaderSections;
}

export default function Header(props: HeaderProps): JSX.Element {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div id="header">
        <div className="menu-bars">
          {sidebar ? (
            <FontAwesomeIcon
              icon={faX}
              size="xl"
              className="menu-icon"
              onClick={showSidebar}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="menu-icon"
              onClick={showSidebar}
            />
          )}
        </div>
        <h1>{props.section}</h1>
        <div className="box"></div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
