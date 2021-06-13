import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo1"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"



export function Layout({ children }) {
  return (
    <div style={{background:'#111'}}> 
      <Seo />
      <SkipNavLink />
      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <>
          <div style={{position:'fixed', right:'12vw', fontSize:'40px'}}>
          <Link to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
<></>
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <br /><br />
      <Footer />
    </div>
  )
}
