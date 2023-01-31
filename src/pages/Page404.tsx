import { FC } from 'react';
import { Link } from 'react-router-dom';

const Page404: FC = () => {
  return (
    <div>
      Page Not Found.
      <Link to="/">Go to home page.</Link>
    </div>
  );
};

export default Page404;
