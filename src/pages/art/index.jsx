import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout1"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo1"
import { MoreButton } from "../../components/more-button"
import { title } from "./index.module.css"

export default function Products({ data: { products } }) {
  return (
    <Layout>
      <Seo title="All Twilightscapes" />
      <h1 className={title}>Print Ready Art </h1>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search#more`}>More Twilightscapes</MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    products: allShopifyProduct(
      sort: { fields: publishedAt, order: ASC }
      limit: 64
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
