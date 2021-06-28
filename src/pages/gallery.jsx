

import * as React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import Image from '../components/Image'
import { ProductListing } from "../components/product-listing"
import Social from "../components/social"
import Newsignup from "../components/newssign"
// import { Helmet } from "react-helmet"
// import TouchUp from '../components/TouchUp'
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
import { Helmet } from "react-helmet"

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

export default function GalleryPage({ data }) {
  return (
<> 
<Helmet>
    <body className="gallery" />
    <meta property="twitter:image" content="https://twilightscapes.com/default-og-image-blank.jpg" />
</Helmet>

<Seo title={`Photo Gallery`} />
<Seo image={'https://twilightscapes.com/follow-me-into-the-night-promo.jpg'} />


    {/* <Helmet>
<meta name="twitter:image:src" content="https://twilightscapes.com/follow-me-into-the-night-promo.jpg" />
</Helmet> */}

    <CustomBox>
    <Layout>


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


   </Layout></CustomBox>
    </>
  )
}