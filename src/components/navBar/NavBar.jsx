import './navBar.css';
import { faLinkedinIn, faGithub, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Harsh Sharma</span>
        <div className="navIcons">
          <a
            style={{ color: 'grey' }}
            href="https://www.linkedin.com/in/harsh-sharma-01jan2002/ "
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="linkedin" />
          </a>
          <a style={{ color: 'gray' }} href="https://github.com/Harshsharma008" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github" />
          </a>
          {/* <a
            style={{ color: 'gray' }}
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-solid faEnvelope" style={{color: "#ded9d9",}} />
          </a> */}
        </div>
        <div className="navItems">
          <a
            href={require('../../data/harsh.pdf')}
            download="Harsh_Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="neon-button">RESUME</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
