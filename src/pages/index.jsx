
import * as React from "react"
import { Footer } from "../components/footer"
import { Seo } from "../components/seo"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby-plugin-modal-routing-3'
import Consent from '../components/Consent'

import Image from '../components/Image'
import Menu from '../components/Menu'

import Newsignup from "../components/newssign"

import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
import { Helmet } from "react-helmet"
import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`










@media (min-width: 58em) {

}


`




export default function IndexPage() {
  return (
<> 
<Helmet>
  
    <body className="homepage" />






<meta charSet="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


<meta name="generator" content="Gatsby 3.7.0" />

<title>Twilightscapes - Unique night photography of abandoned urban exploration</title>

<link rel="sitemap" type="application/xml" href="/sitemap/sitemap-index.xml" />
<link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous" />
<meta name="theme-color" content="#111" />
<link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
<link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />

<noscript>&lt;meta http-equiv="refresh" content="0;url=/.gatsby-plugin-offline:api=disableOfflineShell&amp;amp;redirect=true"/&gt;</noscript>

<link rel="preconnect" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />



<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" data-react-helmet="true" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" data-react-helmet="true" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" data-react-helmet="true" />
<link rel="apple-touch-icon" sizes="180x180" href="/siteimages/apple-splashapple-icon-180.png" data-react-helmet="true" />
<link rel="apple-touch-icon" sizes="167x167" href="/siteimages/apple-splashapple-icon-167.png" data-react-helmet="true" />
<link rel="apple-touch-icon" sizes="152x152" href="/siteimages/apple-splashapple-icon-152.png" data-react-helmet="true" />
<link rel="apple-touch-icon" sizes="120x120" href="/siteimages/apple-splashapple-icon-120.png" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2048-2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2732-2048.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1668-2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2388-1668.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1668-2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2224-1668.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1536-2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2048-1536.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1242-2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2688-1242.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1125-2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2436-1125.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-828-1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1792-828.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1242-2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-2208-1242.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1334-750.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-640-1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" data-react-helmet="true" />
<link rel="apple-touch-startup-image" href="/siteimages/apple-splash-1136-640.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" data-react-helmet="true" />

<meta name="apple-mobile-web-app-capable" content="yes" data-react-helmet="true" />


<meta property="og:type" content="website" data-react-helmet="true" />

<meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
<meta name="twitter:creator" content="toddlambert" data-react-helmet="true" />


<meta name="description" content="Night long exposure photography in remote abandoned locations urban exploration" data-react-helmet="true" />

<meta name="image" content="https://twilightscapes.com/default-og-image-blank.jpg" data-react-helmet="true" />

<meta property="og:title" content="Homepage of Twilightscapes - Unique night photography of abandoned urban exploration" data-react-helmet="true" />
<meta property="og:url" content="https://twilightscapes.com/" data-react-helmet="true" />

<meta property="og:description" content="Home of the Night long exposure photography in remote abandoned locations urban exploration" data-react-helmet="true" />

<meta property="og:image" content="https://twilightscapes.com/default-og-image-blank.jpg" data-react-helmet="true" />


<meta name="twitter:title" content="Home of Twilightscapes - Unique night photography of abandoned urban exploration" data-react-helmet="true" />
<meta name="twitter:url" content="https://twilightscapes.com/" data-react-helmet="true" />
<meta name="twitter:description" content="Homepage of Night long exposure photography in remote abandoned locations urban exploration" data-react-helmet="true" />
<meta name="twitter:image:src" content="https://twilightscapes.com/default-og-image-blank.jpg" data-react-helmet="true" />
<meta property="twitter:image:src" content="https://github.githubassets.com/images/modules/open_graph/github-logo.png"></meta>
</Helmet>




    <CustomBox>

<Menu />


   

    {/* <TouchUp /> */}
    <div className="home-banner flexbutt intro" style={{position:'relative', height:'auto', overflow:'hidden'}}>




<div className="flexcheek" style={{padding:'1vh 3% 0 3%',}}>

  <h1 className="title1">Night Photography</h1>

  <p className="tagline1">
   Todd Lambert: a pioneer in night photography
  </p>


      <p>Finding obscure locations and unusual subject matter, Todd has excelled at capturing long exposure photos of rarely seen moments of time.</p>
      <p>As a location scout and avid urban explorer, Todd learned to photograph what he sees and to bring the unique subject matter he finds to light.</p>

<div className="" style={{display:'flex'}}>

      <blockquote className="frontquote" style={{width:'60%'}}>
<p>The night is misunderstood and often feared, but the night can be a world of wonder and an orchestra of colors. Finding yourself at 3am in a graveyard filming flowers; some may see that as weird, but for me, it's pure tranquility. </p>
<div style={{textAlign:'right', marginRight:'20%', marginTop:'10px'}}> – Todd Lambert
</div></blockquote>

<div style={{width:'40%',  padding:'3vw'}}><Image alt="Todd Lambert hanging with friends" filename="todd-profile.jpg" className="" /></div>

</div>

<p>Let Todd's award winning night photography and digital storytelling, prove to you that the night is indeed beautiful.</p>

<Link
              className="moreButton"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              to="/art"
            >
              View Photos {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link>

{/* <Social /> */}
  <br /> <br />

  


</div>













<div className="flexcheek" style={{position:'relative', overflow:'hidden'}}>

<div className="kenburns-right"  style={{zIndex:'-1', width:'', height:''}}><Image alt="Todd Lambert hanging with friends" filename="night316.jpg" className="featured-image kenburns-right" /></div>


<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0',}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
<h2
  className="letter normal txtshadow-header hit-the-floor"
  style={{
    color: '#fff',
    fontSize: '60px',
   position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
    textAlign: 'right', 
    float: 'none',
    margin:'0',
    padding:'0',
  }}
>
  Follow me
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'40px',
   color: 'white',
   position: 'relative',
    textAlign: 'right', 
    margin:'0',
    padding:'0',
  }}
>
  into the
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'80px',
   color: 'white',
   position: 'relative',
//            top: '230px',
    textAlign: 'right',
    textTransform: 'uppercase', 
    margin:'0',
    padding:'0',
  }}
>
  Night
</h2>
</ScrollAnimation>



<ScrollAnimation animateIn="bounceInUp" delay={1750} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', bottom:'0',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center'}}>


  <Newsignup />
</ScrollAnimation>


</div>

</div>

</div>



{/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'#FA02B7', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div>
</div>




<br /><br />
<h2 style={{display:'flex', fontSize:'30px', margin:'0 3% 2rem 3%'}}>
      Latest Twilightscapes<span className=""> <span className="icon -right" style={{padding:'10px 0 0 1rem'}}><RiArrowDownLine /></span>
      </span>
    </h2>
    <a id="photos" />
    <div className="frontprod">
      <ProductListing products={data.shopifyCollection.products} className="frontprod" />
</div>
      <Link
              className="moreButton"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              to="/vault/favorites/"
            >
              View More {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link> */}


<Consent />

      <Footer />


</CustomBox>
    </>
  )
}