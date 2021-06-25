

import * as React from "react"
import { SkipNavContent, SkipNavLink } from "../components/skip-nav"
// import { Header } from "./header"
import { Footer } from "../components/footer"
import { Seo } from "../components/seo"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
import twLogo from "../icons/tw-logo-white.svg"
import { StoreContext } from "../context/store-context"
import { Toast } from "../components/toast"
import { ImArrowRight } from "react-icons/im"
import { CartButton } from "../components/cart-button"
import SearchIcon from "../icons/search"
import Consent from '../components/Consent'
import Install from '../components/install-discount'
import { graphql } from "gatsby"
import Social from "../components/social"
import Image from '../components/Image'
import Newsignup from "../components/newssign"
import { ProductListing } from "../components/product-listing"
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`
.intro:before{
	content: "A Pioneer In Night Photography";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:5vw; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

@media (min-width: 58em) {

}


`


export const query = graphql`
query {
  shopifyCollection(handle: { eq: "frontpage" }) {
    products {
      ...ProductCard
    }
  }
}
`

export default function IndexPage({ data }) {

  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)


  return (
<>
    {/* <Helmet>
<meta name="twitter:image:src" content="https://twilightscapes.com/follow-me-into-the-night-promo.jpg" />
</Helmet> */}



<title data-react-helmet="true">Twilightscapes - Unique night photography of abandoned urban exploration</title>
    <link data-react-helmet="true" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link data-react-helmet="true" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link data-react-helmet="true" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link data-react-helmet="true" rel="apple-touch-icon" sizes="180x180" href="/siteimages/apple-splashapple-icon-180.png"/>
    <link data-react-helmet="true" rel="apple-touch-icon" sizes="167x167" href="/siteimages/apple-splashapple-icon-167.png"/>
    <link data-react-helmet="true" rel="apple-touch-icon" sizes="152x152" href="/siteimages/apple-splashapple-icon-152.png"/>
    <link data-react-helmet="true" rel="apple-touch-icon" sizes="120x120" href="/siteimages/apple-splashapple-icon-120.png"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2048-2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2732-2048.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1668-2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2388-1668.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1668-2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2224-1668.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1536-2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2048-1536.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1242-2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2688-1242.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1125-2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2436-1125.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-828-1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1792-828.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1242-2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-2208-1242.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1334-750.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-640-1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
    <link data-react-helmet="true" rel="apple-touch-startup-image" href="/siteimages/apple-splash-1136-640.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
    <meta data-react-helmet="true" name="description" content="Night long exposure photography in remote abandoned locations urban exploration"/>
    <meta data-react-helmet="true" name="image" content="https://twilightscapes.com/default-og-image.jpg"/>
    <meta data-react-helmet="true" property="og:title" content="Twilightscapes - Unique night photography of abandoned urban exploration"/>
    <meta data-react-helmet="true" property="og:url"/>
    <meta data-react-helmet="true" property="og:description" content="Night long exposure photography in remote abandoned locations urban exploration"/>
    <meta data-react-helmet="true" property="og:image" content="https://twilightscapes.com/default-og-image.jpg"/>
    <meta data-react-helmet="true" property="og:type" content="website"/>
    <meta data-react-helmet="true" name="twitter:card" content="summary_large_image"/>
    <meta data-react-helmet="true" name="twitter:title" content="Twilightscapes - Unique night photography of abandoned urban exploration"/>
    <meta data-react-helmet="true" name="twitter:url"/>
    <meta data-react-helmet="true" name="twitter:description" content="Night long exposure photography in remote abandoned locations urban exploration"/>
    <meta data-react-helmet="true" name="twitter:creator" content="toddlambert"/>
    <meta data-react-helmet="true" name="twitter:image" content="https://twilightscapes.com/default-og-image.jpg"/>
    <meta data-react-helmet="true" name="apple-mobile-web-app-capable" content="yes"/>
    <link rel="sitemap" type="application/xml" href="/sitemap/sitemap-index.xml"/>
    <link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous"/>
    <meta name="theme-color" content="#111"/>
    <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png"/>
    <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png"/>
    <link rel="preconnect" href="https://www.google-analytics.com"/>
    <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
 


<SkipNavLink>

</SkipNavLink>





<header>

<Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link>







      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


  <div className="backdrop1" ></div>


   <div id="sidebarMenu">
  

   
   <div style={{display:'flex', justifyContent:'flex-start', color:'#fff', paddingLeft:'20px'}}>
   
   <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div>
     </div>

    <ul className="sidebarMenuInner">

    {/* <li>
              <a className="navbar-item txtshadow" href="https://twilightscapes.com/">
                Home <span>Return to home</span>
              </a>
      </li> */}

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
      <Link to="/search" >
          <span>Search Catalog <SearchIcon /></span>
        </Link>
        </li> */}

    

    </ul>

 <div className="has-app promocode">
30% OFF CODE: <span style={{color:'#FA02B7', fontWeight:'bold'}}>LoveTheNight</span>
</div>


  </div>










      <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast>
 



      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     


     

</header>



<div className="toppad" style={{display:'block', height:'70px', border:'0px solid yellow'}}></div>



<SkipNavContent className="intro">
    <CustomBox>


    <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <>
          <div style={{position:'fixed', right:'6vw', padding:'10px', fontSize:'40px', background:'#111 !important', filter:'none', opacity:'1 !important'}}>
          <Link state={{noScroll: true }} to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
<></>
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>

    {/* <Seo title={`Welcome`} /> */}
    {/* <Seo image={'/default-og-image.jpg'} /> */}

    {/* <TouchUp /> */}
    <div className="home-banner flexbutt" style={{position:'relative', height:'auto', overflow:'hidden'}}>




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

<Social />
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



<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

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
            </Link>
</CustomBox>
   </SkipNavContent>
   
   <br /><br />
      <Consent />
     <Install />
      <Footer />
    </>
  )
}