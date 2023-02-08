import { useNavigate } from 'react-router-dom';

const Button = ({
  icon,
  className,
  navigation,
}: {
  icon: string;
  className: string;
  navigation: string;
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate(navigation)}>
      {icon}
    </button>
  );
};

export default Button;
