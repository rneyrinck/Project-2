import {Link} from 'react-router-dom'
import { Route, Routes } from "react-router";
import Generator from '../generator/generator';
import About from '../about/about';

const Header = () => {
  return (
    <header>
        <Link to="/">GALAXY TRADING CARDS</Link>
      <nav>
        {/* make these links into a hamburger, onclick display */}
        <Link to="/">Generator</Link>
        <Link to="/About">About</Link>
      </nav>
      
    </header>
  );
};
export default Header;
