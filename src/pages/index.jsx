import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout1"
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
      <div className="container" style={{textAlign:'center'}}>
        <h1 className={intro}>Twilightscapes are print-ready artwork. </h1>
        <p className={callOut}>
          Everything is only $99
        </p>
        <p style={{textAlign:'', margin:'10px 12%'}}>For one low-cost you get the original high-res artfile to do what you want with.*</p>

<p style={{textAlign:'center', margin:'10px 12%'}}>Want to use it as a desktop wallpaper?<br /> Use it as a background on your TV? <br />Want to print a large metal print for your wall? <br />Want to print it yourself?    
</p>


<p className={callOut}><strong>You Got It!</strong></p>

      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}