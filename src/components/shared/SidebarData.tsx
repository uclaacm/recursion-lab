import {
  faHouse,
  faClipboard,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mario from '../../assets/mario.png';
import rabbit from '../../assets/rabbit.png';
import telephone from '../../assets/telephone.png';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icons: <FontAwesomeIcon icon={faHouse} size="2x" />,
    cName: 'nav-text',
  },
  {
    title: 'Introduction',
    path: '/intro',
    icons: <FontAwesomeIcon icon={faClipboard} size="2x" />,
    cName: 'nav-text',
  },
  {
    title: 'Problem 1',
    path: '/problem1',
    icons: <img src={mario} width="54" alt="mario-face" />,
    cName: 'nav-text',
  },
  {
    title: 'Problem 2',
    path: '/problem2',
    icons: <img src={telephone} width="54" alt="telephone-lady" />,
    cName: 'nav-text',
  },
  {
    title: 'Problem 3',
    path: '/problem3',
    icons: <img src={rabbit} width="54" alt="rabbit-face" />,
    cName: 'nav-text',
  },
  {
    title: 'Problem 4',
    path: '/problem4',
    icons: <FontAwesomeIcon icon={faBook} size="2x" />,
    cName: 'nav-text',
  },
];
