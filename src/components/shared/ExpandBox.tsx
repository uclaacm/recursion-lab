import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

import '../../styles/ExpandBox.scss';

interface ExpandBoxProps {
  class: string;
  title: string;
  component: React.FC;
  icon: any;
}

//let data = [1, 2];

function ExpandBox(props: ExpandBoxProps): JSX.Element {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((prev) => !prev);
  }
  const Component = props.component;
  return (
    <div className="expandbox-container">
      <div className="title" onClick={() => toggle()}>
        <div className="accordion-title">
          <props.icon fontSize="large" className="icon" />
          <div style={{ width: '20px' }}></div>
          <h2 className={props.class}>{props.title}</h2>
        </div>
        <span>
          {open ? (
            <ExpandLessIcon fontSize="large" style={{ cursor: 'pointer' }} />
          ) : (
            <ExpandMoreIcon fontSize="large" style={{ cursor: 'pointer' }} />
          )}
        </span>
      </div>
      <div className={open ? 'content show' : 'content'}>
        <Component />
      </div>
    </div>
  );
}

export default ExpandBox;

//data.size = # of expandable boxes
//each element is an object
//step = title
//answer = component
