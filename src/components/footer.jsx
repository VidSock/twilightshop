import * as React from "react"
// import Logo from "../icons/logo"
import Social from "../components/social"
import { Link } from "gatsby"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle} style={{paddingTop:'10px', marginTop:'0', position:'',}}>
      <div className={blurb}>
        <div className={logos}>
        <Social />
        </div>
      </div>
      <nav className={links} aria-label="footer">
      <div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: ''}}><a href="https://twilightscapes.com/disclaimer/">Disclaimer</a>  |  <a href="https://twilightscapes.com/privacy/">Privacy Policy</a>  |  <a href="/terms/">Terms of Service</a></div>
  
  
  
  <div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '80%'}}>Copyright &copy; {(new Date().getFullYear())} Todd Lambert - hand crafted with Gatsby on Netlify</div>
      </nav>
   
    </footer>
  )
}
