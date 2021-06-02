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
export default function nftPage({ data }) {
  return (
    <Layout>
      <div className="" style={{textAlign:'center'}}>
        <h1 className={intro}>Special limited edition NFTs</h1>
        <p className={callOut}>
          Exclusive NFTs with complete media kit included. 
        </p>
       

      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}