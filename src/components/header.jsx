import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import twLogo from "../icons/tw-logo-white.svg"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import { Toast } from "./toast"
import {
  header,
  container,
  logo as logoCss,
  searchButton,
  nav,
} from "./header.module.css"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div className={container} >
      <header className={header} style={{border:'0px solid red', background:'#222', padding:'10px 3% 15px 3%', boxShadow: '1px 3px 24px 0 #000'
      }}>
        
      <Link to="/"><img id="logo" className="twlogo1 rollIn" src={twLogo} alt="Twilightscapes Logo" style={{margin:'5px 0 0 0', minWidth:'100px', height:'auto', padding:'0', border:'0px solid red'}} /></Link>




        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

   <div id="sidebarMenu">

   <div style={{display:'flex', justifyContent:'flex-start', color:'#fff', paddingLeft:'20px'}}>
   
   <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <CartButton quantity={quantity} /> 
     </div>

    <ul className="sidebarMenuInner">

    <li>
              <a className="navbar-item txtshadow" href="https://twilightscapes.com/">
                Home <span>Return to home</span>
              </a>
      </li>

      <li>
              <a className="navbar-item txtshadow" href="https://twilightscapes.com/galleries/">
                Galleries <span>View Photos</span>
              </a>
      </li>

      <li>
              <a className="navbar-item txtshadow" href="https://twilightscapes.com/about/">
                About Me <span>Learn All About Me</span>
              </a>
      </li>

      <li>
      <a id="portfolio" className="navbar-item txtshadow" href="https://twilightscapes.com/gear/">Gear Talk<span>What tools I use</span></a>
       </li>

       <li>
              <a className="navbar-item txtshadow" href="https://twilightscapes.com/contact/">
                Contact <span>Ask me anything!</span>
              </a>
      </li>

      {/* <li>
      <Link to="/search" >
          <span>Search Catalog <SearchIcon /></span>
        </Link>
        </li> */}

    

    </ul>
  </div>
        {/* <Logo /> */}
        <Navigation className={nav} />
        
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
    </div>
  )
}
