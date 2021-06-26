
import * as React from "react"
import { Link } from 'gatsby-plugin-modal-routing-3'
import styled from "styled-components";
import { StoreContext } from "../context/store-context"
import { Toast } from "./toast"
import { ImArrowRight } from "react-icons/im"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import Image from './Image'

const CustomBox = styled.div`
#installer {
  animation: cssAnimation 0s 1s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`



const Menu = () => (



  
 

    <CustomBox style={{}} className="menu">


<header>

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


  <div className="backdrop1" ></div>


   <div id="sidebarMenu">
  

   <div className="promocode1" style={{textAlign:'center', padding:'10px 35px', }}>
<Link className="navbar-item txtshadow" to="/">
<Image alt="Todd Lambert hanging with friends" filename="tw-logo-white.png" className="" />
</Link>
</div>


    <ul className="sidebarMenuInner">

      <li>
              <Link className="navbar-item txtshadow" to="/nft/">
                NFT Collectibles <span>Limited Editions</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/vault/favorites/">
                The Vault <span>View the full archives</span>
              </Link>
      </li>


      <li>
              <Link className="navbar-item txtshadow" to="/about/">
                About Me <span>Learn All About Me</span>
              </Link>
      </li>

      <li>
      <Link className="navbar-item txtshadow" to="/gear/">Gear Talk<span>What tools I use</span></Link>
       </li>

       <li>
              <Link className="navbar-item txtshadow" to="/contact/">
                Contact <span>Ask me anything!</span>
              </Link>
      </li>
      {/* <li>
              <Link className="navbar-item txtshadow" to="/">
      
                Home <span>Return to home</span>
              </Link>
      </li>  */}

      <li style={{border:'none'}}>
      <div style={{display:'flex', justifyContent:'flex-start', color:'#fff', paddingLeft:'0px'}}>
   <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>
  <div style={{marginTop:'5px'}}><CartButton /></div>
  </div>
        </li>

    

    </ul>

 <div className="has-app promocode">
30% OFF CODE: <span style={{color:'#FA02B7', fontWeight:'bold'}}>LoveTheNight</span>
</div>




  </div>











 




     


     

</header>

</CustomBox>
)

export default Menu