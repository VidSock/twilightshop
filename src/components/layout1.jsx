import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo1"
import 'fontsource-hammersmith-one'

export function Layout({ children }) {
  return (
    <div style={{background:'#111'}}> 
      <Seo />
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <br /><br />
      <Footer />
    </div>
  )
}
