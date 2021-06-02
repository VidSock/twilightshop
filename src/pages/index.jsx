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
      <div className={container}>
        <h1 className={intro}>Welcome to the Twilightscapes Store.</h1>
        <p className={callOut}>
          You can buy high-res digital copies or special limited edition NFTs. 
        </p>
       

      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}