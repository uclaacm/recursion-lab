import book from '../../assets/book.png';
import hill from '../../assets/hill.png';
import mario from '../../assets/mario.png';
import question from '../../assets/question.png';
import rabbit from '../../assets/rabbit.png';
import telephone from '../../assets/telephone.png';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icons: <img src={hill} width="54" alt="a hill" />,
    cName: 'nav-text',
  },
  {
    title: 'Introduction',
    path: '/intro',
    icons: <img src={question} width="54" alt="question-mark" />,
    cName: 'nav-text',
  },
  {
    title: 'Mario Stairs',
    path: '/problem1',
    icons: <img src={mario} width="54" alt="mario-face" />,
    cName: 'nav-text',
  },
  {
    title: 'Dining Out',
    path: '/problem2',
    icons: <img src={telephone} width="54" alt="telephone-lady" />,
    cName: 'nav-text',
  },
  {
    title: 'Rabbit Growth',
    path: '/problem3',
    icons: <img src={rabbit} width="54" alt="rabbit-face" />,
    cName: 'nav-text',
  },
  {
    title: 'Word Search',
    path: '/problem4',
    icons: <img src={book} width="54" alt="books" />,
    cName: 'nav-text',
  },
];
