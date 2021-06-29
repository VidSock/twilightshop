import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
// import { Helmet } from "react-helmet"
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
import { IoLogoVercel } from "react-icons/io5"
import { BsCircleFill } from "react-icons/bs"
import { FaSquareFull } from "react-icons/fa"
import video from "../video/milky-way.mp4"

// import { MoreButton } from "../components/more-button"
// import { title } from "../pages/index.module.css"



// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "./index.module.css"

import Image from '../components/Image'
import ScrollAnimation from 'react-animate-on-scroll'
// import { GiPlainArrow } from 'react-icons/gi'

import styled from 'styled-components'

const CustomBox = styled.div`


a:after{display:none !important;}


// .intro:before{
// 	content: "Twilightscapes NFTs";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// }




.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:8vh;}
.spacer66{height:33vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}





@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.intro:before{font-size:200%;}

}

@media (min-width: 58rem) {
	.outer{padding:0 10% !important; /* width:50%; */}
	.split1{border:2px solid red !important}
	}


       

`






// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "limited-edition-nft-kits" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `

       // export default function nftPage({ data: { products } }) {
              export default function gasstationPage() {

  return (
<>

{/* <Helmet>
<meta name="twitter:image:src" content="https://twilightscapes.com/follow-me-into-the-night-promo.jpg" />
</Helmet> */}

{/* <Seo title={`NFT Collectible Photography Nightscape Photos`} />
<Seo description={`We have the NFT you are looking for - Check it out`} /> */}

<CustomBox>

    <Layout className="gasstations-page" style={{position:''}}>

    
    <div className="vidbox">
    <div style={{position:'absolute', top:'', fontSize:'10vw', color:'white', zIndex:'', display:'flex', justifyContent:'center', alignItems:'center', border:'0px solid blue', width:'100vw'}}>Milky Way
    </div>
<video autoPlay loop muted>
  <source src={video} type="video/mp4" />
</video>
    </div>



{/* <div className="video-background">
    <div className="video-foreground">
      <iframe src="https://www.youtube.com/embed/iH5sjz0nx9o?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1" frameBorder="0" allowFullscreen></iframe>
      
    </div> */}




    {/* <div id="vidtop-content">
<div className="vid-info">
	  <strong>Meet Todd</strong>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of</p>
  </div>
</div> */}
 

 
{/* <div style={{position:'', zIndex:'', width:'90%', display:'flex', justifyContent:'center'}}>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>
</div> */}
    
    </Layout>
     </CustomBox>
     </>

  )
}