import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";


const CustomBox = styled.div`
// #installer {
//   animation: cssAnimation 0s 1s forwards;
//   visibility: hidden;
// }

// @keyframes cssAnimation {
//   to   { visibility: visible; }
// }




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`

const InstallDiscount = () => (
<>


<CustomBox style={{}} className="">



<ScrollAnimation animateIn="bounceInDown" initiallyVisible={false} animateOnce={true} animatePreScroll={false} delay={500} style={{ display:'flex', justifyContent:'center', alignContent:'center', position: 'fixed', top:'60px',
left:'0', right:'0', display:'flex', justifyContent:'center', alignItems:'center'}}>




<div className="installer" className="" style={{ }}>



<CookieConsent
	debug={false}
	location="none"
	style={{ color:'inherit', width:'auto', background:'inherit',  alignItems:'inherit',  textAlign:'left', justifyContent:'center', margin:'0 auto', top:'60px', maxWidth:'600px', position:'', border:'0px solid red', }}
    buttonText="OK Got it"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "16px", bottom:'10px', position:'absolute', display:'flex', alignContent:'center', color:'inherit', }}
    expires={1}
    cookieName="twilightscapes.com-install-discount-cookie"
>


<div className="backdrop" style={{left:'0', top:'-60px'}}></div>
<div className="container" style={{padding:'2rem 1rem', border:'1px solid #555', borderRadius:'8px', background:'#111', textAlign:'center'}}>


	
	<p style={{textAlign:'center', fontSize:'23px', padding:'0', margin:'0'}}>Install Twilightscapes App - <strong>Get 30% off</strong></p>
	<br />
	<span style={{fontSize:'100%',}}>This website has app functionality. Add it to your home screen to get added features like exclusive content, fullscreen and more. <br /><br />You'll receive a special coupon code for 30% off your next order!</span>

  <br /><br />
  <div style={{fontSize:'100%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto', padding:' 1rem', border:'2px dotted #FA02B7', borderRadius:'8px',}}>To Get Started:
  <br />1) Simply click the "install" icon in your browser address bar</div>


	<br />
  For Apple iOS users:

    <div style={{fontSize:'100%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto 5px 0', padding:' 1rem', border:'2px dotted #777', borderRadius:'8px',}}>
    
  <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
 <FiShare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
  1) Press the 'Share' button 
</div>

 <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
 <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
 
2) Press 'Add to Home Screen'
 </div>
 
 </div>
 MacOS: please use a Chrome-based browser.
    <br />
    <br />
    </div>
    
</CookieConsent></div>
    </ScrollAnimation>


</CustomBox>
</>
)

export default InstallDiscount