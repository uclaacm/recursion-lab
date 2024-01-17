import { ReactElement } from 'react';

const Tab = ({ children }: { children: ReactElement }): JSX.Element => {
  return <div style={{ marginLeft: '8px' }}>{children}</div>;
};

export default Tab;
