import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../../components/layout1"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import Image from '../../../components/Image'
// import InfoMenu from '../../../components/infomenu'
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo1"
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import { MdBrandingWatermark, MdCropFree } from "react-icons/md"
import { RiSecurePaymentLine } from "react-icons/ri"

import { GiRoyalLove } from "react-icons/gi"
import { FaLockOpen } from "react-icons/fa"
import { HiBan, HiOutlineKey, HiOutlineMap, HiOutlinePhotograph, HiOutlineScale    } from "react-icons/hi"
import { CgInfo, CgRatio  } from "react-icons/cg"
import { FiCameraOff, FiCamera } from "react-icons/fi"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'





import {
  productBox,
  container,
  header,
  productImageWrapper,
  productImageList,
  productImageListItem,
  scrollForMore,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  labelFont,
  breadcrumb,
  tagList,
  addToCartStyle,
  metaSection,
  productDescription,
} from "./product-page.module.css"

import styled from 'styled-components'

const CustomBox = styled.div`

.react-tabs__tab{
	display: inline-block;
	margin-bottom: 10px;
	padding: 12px 5px;
	border: 0px solid #ccc;
	// background: #eee;
	color: #666;
	font-size: 12px; 
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	cursor: pointer;	
  transition: all 0.3s;
  border-radius:0;
}
.react-tabs__tab:hover {
	// border-top-color: #333;
	color: #333;
}

.react-tabs__tab-list {
  border-bottom: 1px solid #aaa;
  margin: 0 0;
  padding: 0;
  clear:both;
  display:flex;
  justify-content:center;
  }

  .react-tabs__tab--selected{
    // background: #ccc;
  }




.iconmenu{
  display:flex;
  justify-content:center;
  padding:15px;
  border-radius:12px;
  background:#333;
  color:#999;
  position:relative;
  font-size:40px;
  overflow:hidden;
}

.react-tabs__tab--selected{background:transparent; overflow:hidden;}

.iconmenu span{display:block; position:absolute; top:0; font-size:12px; background:none; overflow:hidden;}


@media (max-width: 48rem) {
.flexcheek{width:100% !important;}
 }

`






export default function Product({ data: { product, suggestions } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1

  return (

    <Layout>
      <CustomBox>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <div className={container}>
        <div className="dd">
          {hasImages && (
            <div className={productImageWrapper}>
              <div
                role="group"
                aria-label="gallery"
                aria-describedby="instructions"
              >
                <ul className={productImageList}>
                  {images.map((image, index) => (
                    <li
                      key={`product-image-${image.id}`}
                      className={productImageListItem}
                    >
                      <GatsbyImage
                        objectFit="contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        alt={
                          image.altText
                            ? image.altText
                            : `Product Image of ${title} #${index + 1}`
                        }
                        image={image.gatsbyImageData}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {hasMultipleImages && (
                <div className={scrollForMore} id="instructions">
                  <span aria-hidden="true">←</span> scroll for more{" "}
                  <span aria-hidden="true">→</span>
                </div>
              )}
            </div>
          )}
          {!hasImages && (
            <span className={noImagePreview}>No Preview image</span>
          )}



          


<div className="flexbutt" style={{display:'flex', gap:'30px'}}>

<div className="flexcheek" style={{width:'70%'}}>
            <div className={breadcrumb}>
              <Link to={product.productTypeSlug}>{product.productType}</Link>
              {/* <ChevronIcon size={12} /> */}
            </div>
            <h1 className={header}>{title}</h1>
            <p className={productDescription}>{description}</p>
            <h2 className={priceValue}>
             <strong style={{fontSize:'30px'}}>{price}</strong> <br /> High-Res Print Ready Art
            </h2>
            <fieldset className={optionsWrapper}>
              {hasVariants &&
                options.map(({ id, name, values }, index) => (
                  <div className={selectVariant} key={id}>
                    <select
                      aria-label="Variants"
                      onChange={(event) => handleOptionChange(index, event)}
                    >
                      <option value="">{`Select ${name}`}</option>
                      {values.map((value) => (
                        <option value={value} key={`${name}-${value}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </fieldset>
            <div className={addToCartStyle}>
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              />
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
            <div className={metaSection}>
              {/* <span className={labelFont}>Type</span>
              <span className={tagList}>
                <Link to={product.productTypeSlug}>{product.productType}</Link>
              </span> */}


              <span className={labelFont}>Tags</span>
              <span className={tagList}>
                {product.tags.map((tag) => (
                  <Link to={`/search?t=${tag}`}>{tag}</Link>
                ))}
              </span>
            </div>

     


            <Tabs className="infomenu" ß style={{minHeight:'20vh', width:'100%', maxWidth:'1000px',  border:'1px solid #222', borderRadius:'12px', overflow:'hidden', marginTop:'40px'}}>
    <TabList style={{width:'100%', border:'0px solid yellow',}}>
    <Tab><div className="iconmenu"><RiSecurePaymentLine/><span>Secure</span></div></Tab>
      
      <Tab><div className="iconmenu"><CgRatio /><span>Specs</span></div></Tab>
      {/* <Tab><div className="iconmenu"><FiCamera /><span>Tech</span></div></Tab> */}
      <Tab><div className="iconmenu"><CgInfo /><span>FAQ</span></div></Tab>
      <Tab><div className="iconmenu"><HiOutlineScale/><span>Legal</span></div></Tab>
      
    </TabList>
 
    <TabPanel style={{padding:'0 1.5rem', width:'100%',}}>
            <strong>Secure and spam free</strong><br /><br />
            <p>All transactions are secured using the latest 128-bit SSL encryption. <br />
            <br />
            Full PCI Compliance - Payment Card Industry Data Security Standard (PCI DSS)<br /> <br />
            I value your privacy and will always put your security first on all accounts. <br /> <br />
            </p>

    </TabPanel>

<TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
           <strong>Specs</strong><br /><br />
           <p>
           Edited and production output to Tiff file format<br /> <br />
           Typical file size 30-50MB<br /> <br />
           Average dimensions range from 4988×3325 to 5481x3653 or greater<br /> <br />
           All Twilightscapes are shot using the latest state-of-the-art equipment and lenses.
           <br /><br />Canon 5D series, Sony A7R series and Sony A7S series.
           </p>
           
    </TabPanel>




    {/* <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
          <strong>Technology</strong><br /><br />
          <p>
          Twilightscapes were shot using: <br /><br />
          Canon 5D series<br /><br />
          Sony A7S series<br /><br />
          Sony A7R series <br /><br />
          </p>
    </TabPanel> */}



    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
            <strong>FAQ</strong><br /><br />
            <p>
            Do I get the file right away? Yes, upon completion of transaction<br /><br />
            What if I lose the file, can I get another copy? Yes, you can retrieve the original file at any time.<br /><br />
            Is there a watermark? No, it is removed on delivery<br /><br />
            Can I print this for my office? Yes.<br /><br />
            Can I print multiple copies? No. <br /><br />
            Can I post it on Facebook (or any where online)? No.<br /><br />
            Do I own this photo or can I claim it as mine? No.<br /><br />
            </p>

    </TabPanel>


    <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
           <strong>Legal</strong><br /><br />

           <p>
           Twilightscapes offers two types of license models: royalty-free ("RF") and rights-managed ("RM"). Royalty-free does not mean there is no cost for the license. Instead, royalty-free means that the license fee is paid once and there is no need to pay additional royalties if the content is re-used. Royalty-free content is licensed for worldwide, unlimited and perpetual use. Rights-managed content is licensed for specific types of private use, and limits the use of the content to private use only. Rights-managed content is allowed to be printed in any format suited for private display.
           </p>
    </TabPanel>

  </Tabs>





            {/* <div className="infomenu" style={{}}>

<div><CgInfo /><span>FAQ</span></div>
<div><FiCamera /><span>Tech</span></div>
<div><CgRatio /><span>Specs</span></div>
<div><HiOutlineScale/><span>Legal</span></div>
<div><HiOutlinePhotograph/><span>Details</span></div>
<div><FaLockOpen /><span>Royalty free</span></div>
<div><RiGitRepositoryPrivateFill /><span>Private use</span></div>

<MdBrandingWatermark />
<RiGitRepositoryPrivateFill />
<GiRoyalLove />
<MdCropFree />
<FaLockOpen />
<HiBan />
<HiOutlineKey />
<HiOutlineMap />
<HiOutlinePhotograph/>
<HiOutlineScale/>

<FiCameraOff />
<FiCamera />
</div> */}

           {/* <InfoMenu /> */}


</div>

            <div className="flexcheek" style={{border:'0px solid yellow', width:'30%'}}>


            <p style={{fontSize:'100%', margin:'0 0', padding:'0', lineHeight:'auto', textAlign:'center', fontWeight:'bold'}}>Turn this into a great print here:</p>
            
            <div style={{display:'flex', gap:'10px',padding:'0 ', margin:'0 0 2rem 0', justifyContent:'center' }}>

<div style={{width:'100%', maxWidth:'200px'}}><a href="https://www.bayphoto.com" target="_blank" rel="noopener noreferrer nofollow"><Image className="" alt="" filename="bayphoto-logo.png" /></a></div>

<div style={{width:'100%', maxWidth:'200px'}}><a href="https://www.printique.com" target="_blank" rel="noopener noreferrer nofollow"><Image className="" alt="" filename="printique-logo.png" /></a></div>

</div>


<div style={{ border:'0px solid red', overflow:'hidden', position:'relative'}}>
  <h3 style={{fontSize:'130%', fontWeight:'bold', textAlign:'center'}}>About the photographer</h3>
  <div style={{position:'absolute', display:'flex', justifyContent:'center', textAlign:'center', top:'25%', zIndex:'1', width:'100%',}}>
  <Link
        key="All"
        className="button"
        to="/about/"
        style={{
          background:'#111',
          color:'#fff',
          padding:'12px 15px',
          borderRadius:'7px'
        }}
      >
        Meet Todd Lambert
      </Link>
    </div>
  <Image className="" alt="" filename="todd-horizons.jpg" />
</div>

<br />
<br />
<h3 style={{fontSize:'130%', fontWeight:'bold', textAlign:'center'}}>Other projects by Todd</h3>

<a href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit', lineHeight:'1.7rem'}}>
 


 <Image className="slider" alt="Urban Fetish photos" filename="urban-fetish-button.jpg" />
 <br />
 
 Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
 
 <h5 style={{textAlign:'center',}}>Visit UrbanFetish.com</h5></a>


            </div>

            

            


          </div>

        </div>
      </div>
      </CustomBox>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/art/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 2600,)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
