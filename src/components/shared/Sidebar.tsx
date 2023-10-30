import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../../../src/styles/AppWrapper.scss';

function Sidebar({ sidebar, setSidebar }: any): JSX.Element {
  const showSidebar = () => setSidebar(!sidebar);
  const sideRef = useRef(null);

  function ClickOutside(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSidebar(false);
        } else {
          setSidebar(true);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  ClickOutside(sideRef);

  return (
    <>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} ref={sideRef}>
        <FontAwesomeIcon
          icon={faX}
          size="xl"
          onClick={showSidebar}
          className="close-btn"
        />

        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icons}
                  <span className="sidebar-titles">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
