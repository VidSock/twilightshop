require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Twilightscapes - Unique night photography of abandoned urban exploration",
    siteTitleDefault: "Twilightscapes - Unique night photography of abandoned urban exploration",
    siteUrl: "https://twilightscapes.com/",
    hrefLang: "en",
    siteDescription:
      "Night long exposure photography in remote abandoned locations urban exploration",
    siteImage: "/default-og-image.jpg",
    twitter: "toddlambert",
  },
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
  },

  plugins: [
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     apiKey: process.env.SHOPIFY_API_KEY,
    //     password: process.env.SHOPIFY_SHOP_PASSWORD,
    //     storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
    //     shopifyConnections: ["collections"],
    //     shopName: ["sales.twilightscapes.com"],
    //   },
    // },
    {
      resolve: `gatsby-plugin-modal-routing-3`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: /assets/ 
          include: /\.svg$/
        }
      }
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Twilightscapes`,
        short_name: `Twilightscapes`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#111`,
        display: `standalone`,
        start_url: `/?user_mode=app`,

        
        // icon: "static" + settings.meta.iconimage,
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: `img`,
      },
    },
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}

