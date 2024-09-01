import './NavBar.css'
import logo from '../../../assets/logo.svg'
import nav_comet from '../../../assets/nav-comet.svg'
import { useState } from 'react'
import { Link } from "react-scroll";

export default function NavBar() {
   const [mobileMenu, setMobileMenu] = useState(false);

   const toggleMenu = () => {
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }

   const closeToggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : '';
   }

  return (
    <nav className="nav container">
   <Link onClick={closeToggleMenu} to='home' smooth={true} offset={0} duration={500} className="nav_logo"><img src={logo} alt="logo" /> Planet</Link>

    <div className={`nav_menu ${mobileMenu ? 'show-menu' : ''}`} id="nav-menu">
       <ul className="nav_list">
          <li><Link onClick={closeToggleMenu} to='home' smooth={true} offset={0} duration={500} className="nav_link">Home</Link></li>

          <li><Link onClick={closeToggleMenu} to='travel' smooth={true} offset={0} duration={500} className="nav_link">Travel</Link></li>

          <li><Link onClick={closeToggleMenu} to='explore' smooth={true} offset={0} duration={500} className="nav_link">Exploration</Link></li>

          <li><Link onClick={closeToggleMenu} to='history' smooth={true} offset={0} duration={500} className="nav_link">History</Link></li>
       </ul>

       {/* <!-- Close button start --> */}
       <div className="nav_close" id="nav-close">
         <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"></path></svg>
      </div>

        <img src={nav_comet} alt="image" className="nav_img" /> 
       {/* <!-- Close button end --> */}
    </div>

    {/* <!-- Toggle button start --> */}
    <div className="nav_toggle" id="nav-toggle">
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z"></path></svg>
    </div>
    {/* <!-- Toggle button end --> */}
 </nav>
  )
}
