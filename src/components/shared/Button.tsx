import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Button = ({
  icon,
  className,
  navigation,
}: {
  icon: IconDefinition;
  className: string;
  navigation: string;
}): JSX.Element => {
  const navigate = useNavigate();

  if (className === 'prev-btn') {
    return (
      <button className={className} onClick={() => navigate(navigation)}>
        <FontAwesomeIcon icon={icon} style={{ color: '#007da3' }} />
        <span> Prev</span>
      </button>
    );
  } else {
    return (
      <button className={className} onClick={() => navigate(navigation)}>
        <span>Next </span>
        <FontAwesomeIcon icon={icon} style={{ color: '#007da3' }} />
      </button>
    );
  }
};

export default Button;
