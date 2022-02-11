import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Link to="/Generator">GALAXY TRADING CARDS</Link>
      <nav>
        {/* make these links into a hamburger, onclick display */}
        <Link to="/Generator">Generator</Link>
        <Link to="/About">About</Link>
      </nav>
    </header>
  );
};
export default Header;
