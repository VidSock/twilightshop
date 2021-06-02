import React from 'react'
import { Link } from 'gatsby'








export function () {
  return (







<>
 
   <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

   <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li>
              <Link className="navbar-item txtshadow" to="/galleries/">
                Galleries <span>View Photos</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/about/">
                About Me <span>Learn All About Me</span>
              </Link>
      </li>

      <li>
      <Link id="portfolio" className="navbar-item txtshadow" to="/gear/">Gear Talk<span>What tools I use</span></Link>
       </li>

       <li>
              <Link className="navbar-item txtshadow" to="/contact/">
                Contact <span>Ask me anything!</span>
              </Link>
      </li>

    </ul>
  </div>

      
</>
      )
    }

export default Navbar2