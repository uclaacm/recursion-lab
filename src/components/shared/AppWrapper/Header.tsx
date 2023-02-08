import { HeaderSections } from '../globalTypes';

/**
 * We can use our enum as the specified type that our HeaderProps recieves
 * Type our React Element with an interface
 */
export interface HeaderProps {
  section: HeaderSections;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <div id="header">
      <nav id="nav-title">
        <h1>{props.section}</h1>
        {/* This is an example of using interfaces and enums! */}
      </nav>
    </div>
  );
}
