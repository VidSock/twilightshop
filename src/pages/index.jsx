/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout1"
import Image from '../components/Image'
import { ProductListing } from "../components/product-listing"
import Social from "../components/social"
import Newsignup from "../components/newssign"
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine } from "react-icons/ri"

import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`



// .flexbutt {display:flex; }

// .flexcheek {width:100% !important}
// p{margin-bottom:2rem;}



@media (max-width: 58em) {


  // .flexbutt{flex-direction: column !important;}

}

@media (min-width: 58em) {
  // .flexbutt{display:flex flex-direction: row !important}
}


`


export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "limited-edition-nft-kits" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <CustomBox>
    <Layout>


    <div className="home-banner flexbutt" style={{position:'relative', height:'', overflow:'hidden'}}>




<div className="flexcheek" style={{padding:'20px 3% 0 3%',}}>

  <h1 className="title" style={{fontSize:'50px'}}>Night Photography</h1>
  <p
    className="tagline"
    sx={{
      color: "",
      fontSize:'20px',
      paddingBottom:'1.7rem'
    }}
  >
    Todd Lambert - a pioneer in night photography
  </p>


      <p>Finding obscure locations and unusual subject matter, Todd has excelled at capturing rarely seen moments of time.</p>
      <p>As a location scout and avid urban explorer, Todd learned to photograph what he sees at night.</p>


      <blockquote>
<p>The night is misunderstood and often feared. But the truest colors come out only at night. There is no better time than nighttime.</p>
<div style={{textAlign:'right', marginRight:'20%', marginTop:'10px'}}> – Todd Lambert
</div></blockquote>

<p>Let Todd's award winning work prove to you that the night is indeed beautiful.</p>

<Social />
  <br /> <br />
</div>













<div className="flexcheek" style={{position:'relative',}}>

<div  style={{zIndex:'-1', width:'', height:''}}><Image alt="Todd Lambert hanging with friends" filename="night316.jpg" /></div>


<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0',}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
<h2
  className="boom normal txtshadow-header hit-the-floor"
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
  className="boom narrow txtshadow mobile-txt"
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
  className="boom narrow txtshadow mobile-txt"
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



<ScrollAnimation animateIn="bounceInUp" delay={1750} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', bottom:'-10vh',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center'}}>


  <Newsignup />
</ScrollAnimation>


</div>
</div>








</div>
<br /><br />
<h2 style={{display:'flex', fontSize:'30px', margin:'0 3% 2rem 3%'}}>
      Latest in Galleries<span className="">
        <RiArrowDownLine />
      </span>
    </h2>
      <ProductListing products={data.shopifyCollection.products} />
   </Layout></CustomBox>
    
  )
}