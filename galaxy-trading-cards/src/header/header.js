import {Link} from 'react-router-dom'
import { Route, Routes } from "react-router";
import Generator from '../generator/generator';
import About from '../about/about';
import './header.css'
import GeneratorBtn from '../generatorbtn/generatorBtn';
const Header = () => {
  return (
    <header>
      <nav>
        {/* make these links into a hamburger, onclick display */}
        <Link to="/" className='gtc-title'>GALAXY TRADING CARDS</Link>
        <Link to="/About" className='nav about-link'>About</Link>
        <Link to="/" className='nav gen-link'><GeneratorBtn/></Link>
      </nav>
      
    </header>
  );
};
export default Header;
