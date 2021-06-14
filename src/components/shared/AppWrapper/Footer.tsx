import TeachLALogo from '../../../assets/teach-la-logo.svg';
function Footer(): JSX.Element {
  return (
    <div id="footer">
      <h3>
        Made with ❤️ by
        {' '}
        <a
          href="https://teachla.uclaacm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img id="tla-logo" src={TeachLALogo} alt="teach la logo!" />
        </a>
      </h3>
    </div>
  );
}

export default Footer;
