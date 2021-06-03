import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout1"
import Image from '../components/Image'
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

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
    <Layout>
      <div className="container" style={{textAlign:'center', paddingTop:'2rem'}}>
        <h1 className={intro}>Twilightscapes are print-ready artwork. </h1>
        <p className={callOut}>
          Everything is only $49
        </p>
        <p style={{textAlign:'', margin:'10px 12%'}}>For one low-cost you get the original high-res artfile to do what you want with.*</p>

        
        <p style={{fontSize:'170%', margin:'0 0', padding:'0', lineHeight:'auto'}}>Looking for a great print?</p>


<div style={{display:'flex', gap:'40px',padding:'0 ', margin:'0 0 2rem 0', justifyContent:'center' }}>

    <div style={{width:'100%', maxWidth:'300px'}}><a href="https://www.bayphoto.com" target="_blank" rel="noopener noreferrer nofollow"><Image className="" alt="" filename="bayphoto-logo.png" /></a></div>
    
    <div style={{width:'100%', maxWidth:'300px'}}><a href="https://www.printique.com" target="_blank" rel="noopener noreferrer nofollow"><Image className="" alt="" filename="printique-logo.png" /></a></div>

</div>

{/* <p style={{textAlign:'center', margin:'10px 12%'}}>Want to use it as a desktop wallpaper?<br /> Use it as a background on your TV? <br />Want to print a large metal print for your wall? <br />Want to print it yourself?    
</p>


<p className={callOut}><strong>You Got It!</strong></p> */}

      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}