

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





.intro:before{
	content: "A Pioneer In Night Photography";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
align-self:center;
font-size:5vw; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
background-color:#111;

border:0px solid yellow;
padding:2rem 100px;
margin:0 auto;
background-size: 50%;
background-align:center;
background-position:center 50px;
background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDMgNTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+PGc+PHBhdGggZD0iTTc0LjI5OSw2LjY5NWwzLjM1OCwtMC45MTVsMS4xNSwtMy4yODdsMS45MDcsMi45MTNsMy40OCwwLjA3N2wtMi4xNzgsMi43MTVsMS4wMDIsMy4zMzRsLTMuMjU2LC0xLjIzNWwtMi44NjEsMS45ODRsMC4xNjYsLTMuNDc5bC0yLjc2OCwtMi4xMDdaIiBzdHlsZT0iZmlsbDojZjRmNWY2O2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik04Ny44MTQsMTMuOTA4bDMuODM0LC0yLjI0OGwwLjMyLC00LjQzM2wzLjMyMiwyLjk1Mmw0LjMxNSwtMS4wNjRsLTEuNzgxLDQuMDdsMi4zNDcsMy43NzRsLTQuNDIxLC0wLjQzMmwtMi44NjYsMy4zOTZsLTAuOTU0LC00LjM0MmwtNC4xMTYsLTEuNjczWiIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNOTQuNTczLDI0Ljg4N2wzLjExLDEuNTY1bDMuMDUxLC0xLjY3NmwtMC41MjYsMy40NGwyLjUzOCwyLjM4M2wtMy40MzYsMC41NjRsLTEuNDgxLDMuMTQ4bC0xLjYsLTMuMDkybC0zLjQ1MSwtMC40MzdsMi40NDYsLTIuNDc1bC0wLjY1MSwtMy40MloiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTYzLjczMywwbC0yNC4xNTQsMjUuOTg5bC0wLjUwNywtMC41MDdsLTEyLjk1OCwtMTUuNTEybC0yNC4zNDIsMzEuNzc1bDk3LjYwMiwwbC0zNS42NDEsLTQxLjc0NVoiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTcuNTA2LDQ1Ljc4bC0yLjY2MSwwbDAsNi4xMjdsLTIuMTg1LDBsMCwtNi4xMjdsLTIuNjYsMGwwLC0xLjk3bDcuNTA2LDBsMCwxLjk3WiIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMjAuMjc2LDQzLjgxMWwtMy4xNDMsOC4yMDJsLTEuMjY4LDBsLTEuODg2LC00Ljc3MmwtMS45MzMsNC43NzJsLTEuMjc4LDBsLTMuMDgsLTguMjAybDIuMjY5LDBsMS41MDgsNC40ODdsMS43MjksLTQuNDg3bDEuNTY2LDBsMS42OTgsNC40ODdsMS41NzYsLTQuNDg3bDIuMjQyLDBaIiBzdHlsZT0iZmlsbDojZjRmNWY2O2ZpbGwtcnVsZTpub256ZXJvOyIvPjxyZWN0IHg9IjIxLjAyNCIgeT0iNDMuODExIiB3aWR0aD0iMi4xOSIgaGVpZ2h0PSI4LjA5OCIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMzAuMjk2LDUxLjkwOWwtNS41MTYsMGwwLC04LjA5OGwyLjE4OSwwbDAsNi4xNThsMy4zMjcsMGwwLDEuOTRaIiBzdHlsZT0iZmlsbDojZjRmNWY2O2ZpbGwtcnVsZTpub256ZXJvOyIvPjxyZWN0IHg9IjMxLjMxMSIgeT0iNDMuODExIiB3aWR0aD0iMi4xOTEiIGhlaWdodD0iOC4wOTgiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTQxLjkxNCw1MS4zMzVjLTAuMTU4LDAuMDY2IC0wLjI5MiwwLjEyMSAtMC40MDQsMC4xNjRjLTAuMTEyLDAuMDQzIC0wLjIxOCwwLjA4MiAtMC4zMjIsMC4xMTdjLTAuMTAzLDAuMDM1IC0wLjI1MiwwLjA4IC0wLjQ0OCwwLjEzNWMtMC4zMzIsMC4wODQgLTAuNjYzLDAuMTUgLTAuOTkyLDAuMTk1Yy0wLjMzLDAuMDQ1IC0wLjY4LDAuMDY3IC0xLjA0NiwwLjA2N2MtMC43MzcsMCAtMS40MTgsLTAuMTQ5IC0yLjA0MywtMC40NWMtMC42MjUsLTAuMyAtMS4xMjUsLTAuNzY1IC0xLjUsLTEuMzk2Yy0wLjM3NSwtMC42MzEgLTAuNTYzLC0xLjQwNiAtMC41NjMsLTIuMzI0YzAsLTAuNTkyIDAuMDk3LC0xLjE3NCAwLjI5MSwtMS43NDVjMC4xOTUsLTAuNTcxIDAuNDksLTEuMDI3IDAuODg4LC0xLjM3YzAuMzI4LC0wLjI4NCAwLjY2MSwtMC41MDEgMC45OTgsLTAuNjUxYzAuMzM3LC0wLjE1IDAuNjY2LC0wLjI1IDAuOTg3LC0wLjMwMWMwLjMyMiwtMC4wNTEgMC42NzYsLTAuMDc2IDEuMDYzLC0wLjA3NmMwLjYzOSwwIDEuMTY3LDAuMDU1IDEuNTgyLDAuMTYxYzAuNDE2LDAuMTA3IDAuODcyLDAuMjQ5IDEuMzY3LDAuNDI1bDAsMS45MTZjLTAuMzI4LC0wLjIxNSAtMC42NzYsLTAuMzk0IC0xLjA0MiwtMC41MzdjLTAuMzY2LC0wLjE0NSAtMC44MjQsLTAuMjE3IC0xLjM3MywtMC4yMTdjLTAuNjMyLDAgLTEuMTM4LDAuMTMzIC0xLjUxNiwwLjRjLTAuMzc5LDAuMjY4IC0wLjY0MywwLjU4NSAtMC43OTEsMC45NTZjLTAuMTQ5LDAuMzcxIC0wLjIyMiwwLjcyOCAtMC4yMjIsMS4wNzZjMCwwLjQwOCAwLjA4NSwwLjc4NSAwLjI1NiwxLjEyOWMwLjE3LDAuMzQ1IDAuNDI5LDAuNjIzIDAuNzc0LDAuODNjMC4zNDcsMC4yMDkgMC43NjQsMC4zMTMgMS4yNTIsMC4zMTNjMC4yNzksMCAwLjU3NiwtMC4wNDEgMC44OTIsLTAuMTIybDAsLTAuOTUzbC0wLjk4NiwwbDAsLTEuNjI5bDIuODk4LDBsMCwzLjg4N1oiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTUxLjAzOCw1MS45MDlsLTIuMTg1LDBsMCwtMy4xNjJsLTMuMjk1LDBsMCwzLjE2MmwtMi4xOSwwbDAsLTguMDk4bDIuMTksMGwwLDIuOTc1bDMuMjk1LDBsMCwtMi45NzVsMi4xODUsMGwwLDguMDk4WiIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNTkuNTU0LDQ1Ljc4bC0yLjY2MSwwbDAsNi4xMjdsLTIuMTg0LDBsMCwtNi4xMjdsLTIuNjYyLDBsMCwtMS45N2w3LjUwNywwbDAsMS45N1oiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTY1LjY0LDQ5LjU1M2MwLDAuNTA2IC0wLjExNiwwLjk0NiAtMC4zNDgsMS4zMTVjLTAuMjMzLDAuMzY5IC0wLjU1NywwLjY1MiAtMC45NzMsMC44NWMtMC40MTYsMC4xOTcgLTAuODkyLDAuMjk0IC0xLjQzLDAuMjk0Yy0wLjE1LDAgLTAuMzM0LC0wLjAxMSAtMC41NTMsLTAuMDMyYy0wLjIxOCwtMC4wMiAtMC41MDcsLTAuMDgxIC0wLjg3LC0wLjE3OGMtMC4zNjEsLTAuMDk4IC0wLjczOCwtMC4yNDIgLTEuMTI5LC0wLjQzMmwwLC0xLjk4NmMwLjM2OCwwLjI1MiAwLjcyOCwwLjQ2MyAxLjA4MiwwLjYzYzAuMzU0LDAuMTY3IDAuNzM0LDAuMjUxIDEuMTM5LDAuMjUxYzAuMzc0LDAgMC42MTYsLTAuMDY5IDAuNzI2LC0wLjIwOGMwLjExLC0wLjEzOCAwLjE2NSwtMC4yNjcgMC4xNjUsLTAuMzg4YzAsLTAuMjE5IC0wLjA5NCwtMC40MDMgLTAuMjgyLC0wLjU1M2MtMC4xOSwtMC4xNSAtMC40NjMsLTAuMzA1IC0wLjgyNCwtMC40NjRjLTAuMzk4LC0wLjE4NiAtMC43NDcsLTAuMzkxIC0xLjA0NywtMC42MWMtMC4yOTksLTAuMjIxIC0wLjU0NSwtMC40OTYgLTAuNzM2LC0wLjgyOGMtMC4xODksLTAuMzMgLTAuMjg1LC0wLjcyMSAtMC4yODUsLTEuMTc0YzAsLTAuNDM2IDAuMDk3LC0wLjgzIDAuMjg4LC0xLjE4M2MwLjE5MiwtMC4zNTIgMC40ODUsLTAuNjM0IDAuODgsLTAuODQ0YzAuMzk1LC0wLjIxIDAuODc2LC0wLjMxNSAxLjQ0NiwtMC4zMTVjMC40MDUsMCAwLjc4LDAuMDQ1IDEuMTI0LDAuMTMzYzAuMzQ0LDAuMDg2IDAuNjI4LDAuMTg1IDAuODUyLDAuMjk1YzAuMjI0LDAuMTA4IDAuMzc3LDAuMTk0IDAuNDYxLDAuMjU2bDAsMS45Yy0wLjI5NywtMC4yMzggLTAuNjI4LC0wLjQ0OSAtMC45OTIsLTAuNjM3Yy0wLjM2NiwtMC4xODcgLTAuNzU1LC0wLjI4MSAtMS4xNzEsLTAuMjgxYy0wLjI3MywwIC0wLjQ3MSwwLjA1OSAtMC41OTMsMC4xNzZjLTAuMTIzLDAuMTE3IC0wLjE4NCwwLjI2IC0wLjE4NCwwLjQzMmMwLDAuMTYgMC4wNjEsMC4yOTggMC4xODQsMC40MTVjMC4xMjIsMC4xMTggMC4zNCwwLjI1OSAwLjY1NSwwLjQyN2MwLjU1OSwwLjI5MiAxLjAwNiwwLjU1NiAxLjM0MSwwLjc4OWMwLjMzNSwwLjIzNCAwLjU5OSwwLjUwMyAwLjc4OSwwLjgxYzAuMTkxLDAuMzA1IDAuMjg1LDAuNjg1IDAuMjg1LDEuMTRaIiBzdHlsZT0iZmlsbDojZjRmNWY2O2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik03My4zNjEsNTEuM2MtMC4zLDAuMTc1IC0wLjYwOCwwLjMxNiAtMC45MjIsMC40MmMtMC4zMTMsMC4xMDUgLTAuNjMxLDAuMTggLTAuOTUxLDAuMjI1Yy0wLjMxOSwwLjA0NCAtMC42NSwwLjA2NyAtMC45OTIsMC4wNjdjLTAuNjMzLDAgLTEuMiwtMC4wOTcgLTEuNzAxLC0wLjI5MmMtMC41MDEsLTAuMTk1IC0wLjkzNiwtMC40ODEgLTEuMzA0LC0wLjg2MmMtMC4zNjgsLTAuMzc5IC0wLjY0NSwtMC44MjQgLTAuODI3LC0xLjMzMmMtMC4xODQsLTAuNTA4IC0wLjI3NiwtMS4wNjYgLTAuMjc2LC0xLjY3NGMwLC0wLjY5NyAwLjEwOSwtMS4zMDggMC4zMjUsLTEuODMyYzAuMjE3LC0wLjUyMyAwLjUyLC0wLjk1OSAwLjkxLC0xLjMwNmMwLjM4OCwtMC4zNDYgMC44MzMsLTAuNjAzIDEuMzMxLC0wLjc2OGMwLjQ5NywtMC4xNjQgMS4wMjEsLTAuMjQ4IDEuNTczLC0wLjI0OGMwLjgyNCwwIDEuNzU4LDAuMjA0IDIuODAzLDAuNjEzbDAsMi4xNTFjLTAuMzYsLTAuMjUgLTAuNzE2LC0wLjQ1NyAtMS4wNjcsLTAuNjIzYy0wLjM1LC0wLjE2NiAtMC43NjMsLTAuMjQ4IC0xLjIzOSwtMC4yNDhjLTAuNDIzLDAgLTAuODE2LDAuMDkyIC0xLjE4NCwwLjI3OWMtMC4zNjcsMC4xODcgLTAuNjYyLDAuNDU1IC0wLjg4NCwwLjgwMWMtMC4yMjUsMC4zNDYgLTAuMzM1LDAuNzUyIC0wLjMzNSwxLjIxNWMwLDAuNDA4IDAuMDk3LDAuNzgzIDAuMjkzLDEuMTI1YzAuMTk1LDAuMzQgMC40NjYsMC42MTEgMC44MTQsMC44MTJjMC4zNDcsMC4xOTkgMC43MzksMC4zMDEgMS4xNzYsMC4zMDFjMC4zNTMsMCAwLjY4NywtMC4wNDkgMSwtMC4xNDRjMC4zMTQsLTAuMDk2IDAuNTc5LC0wLjIwMiAwLjc5NCwtMC4zMTljMC4yMTYsLTAuMTE3IDAuNDM2LC0wLjI1NCAwLjY2MywtMC40MTRsMCwyLjA1M1oiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTc5LjIwMSw0OC44NThsLTEuMDYzLC0yLjk1NmwtMS4wNzQsMi45NTZsMi4xMzcsMFptMy4zMzgsMy4wNTFsLTIuMjQzLDBsLTAuNTkxLC0xLjY0M2wtMy4xNTQsMGwtMC42MDMsMS42NDNsLTIuMjQxLDBsMy4yMTEsLTguMDk4bDIuNDE5LDBsMy4yMDIsOC4wOThaIiBzdHlsZT0iZmlsbDojZjRmNWY2O2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik04Ny4yODksNDYuMzdjMCwtMC4zODYgLTAuMTA0LC0wLjY1IC0wLjMwOCwtMC43OTNjLTAuMjA0LC0wLjE0MyAtMC41NjksLTAuMjEzIC0xLjA5OCwtMC4yMTNsLTAuNDYxLDBsMCwxLjk1MmwwLjQ3MiwwYzAuMzYzLDAgMC42NDQsLTAuMDI0IDAuODM4LC0wLjA3NWMwLjE5NiwtMC4wNTIgMC4zMzcsLTAuMTQ1IDAuNDI0LC0wLjI4MWMwLjA4OCwtMC4xMzcgMC4xMzMsLTAuMzM0IDAuMTMzLC0wLjU5Wm0yLjIzMSwtMC4wMTNjMCwwLjMgLTAuMDQ2LDAuNTkzIC0wLjEzOSwwLjg3OWMtMC4wOTIsMC4yODYgLTAuMjQyLDAuNTU0IC0wLjQ0OCwwLjhjLTAuMjA2LDAuMjQ4IC0wLjQ4NCwwLjQ0OCAtMC44MzUsMC42MDJjLTAuMzUsMC4xNTQgLTAuNzYzLDAuMjMgLTEuMjM5LDAuMjNsLTEuNDM2LDBsMCwzLjAzOWwtMi4xODksMGwwLC04LjA5OGwzLjYyNCwwYzAuNDc2LDAgMC44ODksMC4wNzggMS4yMzksMC4yMzNjMC4zNTEsMC4xNTYgMC42MjksMC4zNTggMC44MzUsMC42MDhjMC4yMDYsMC4yNDkgMC4zNTYsMC41MjEgMC40NDgsMC44MTJjMC4wOTMsMC4yOTUgMC4xNCwwLjU5MiAwLjE0LDAuODk1WiIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNOTUuOTQxLDUxLjkwOWwtNS40NzQsMGwwLC04LjA5OGw1LjM4NSwwbDAsMS42MjRsLTMuMTk2LDBsMCwxLjQ4NGwzLjA1LDBsMCwxLjYzMWwtMy4wNSwwbDAsMS43MjhsMy4yODUsMGwwLDEuNjMxWiIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMTAyLjIxNyw0OS41NTNjMCwwLjUwNiAtMC4xMTYsMC45NDYgLTAuMzUsMS4zMTVjLTAuMjMxLDAuMzY5IC0wLjU1NSwwLjY1MiAtMC45NzEsMC44NWMtMC40MTcsMC4xOTcgLTAuODkyLDAuMjk0IC0xLjQzMSwwLjI5NGMtMC4xNSwwIC0wLjMzNCwtMC4wMTEgLTAuNTUyLC0wLjAzMmMtMC4yMTksLTAuMDIgLTAuNTA5LC0wLjA4MSAtMC44NywtMC4xNzhjLTAuMzYyLC0wLjA5OCAtMC43MzksLTAuMjQyIC0xLjEyOSwtMC40MzJsMCwtMS45ODZjMC4zNjYsMC4yNTIgMC43MjcsMC40NjMgMS4wODIsMC42M2MwLjM1MywwLjE2NyAwLjczMywwLjI1MSAxLjEzOCwwLjI1MWMwLjM3NCwwIDAuNjE3LC0wLjA2OSAwLjcyNiwtMC4yMDhjMC4xMSwtMC4xMzggMC4xNjUsLTAuMjY3IDAuMTY1LC0wLjM4OGMwLC0wLjIxOSAtMC4wOTQsLTAuNDAzIC0wLjI4MywtMC41NTNjLTAuMTg5LC0wLjE1IC0wLjQ2MywtMC4zMDUgLTAuODIzLC0wLjQ2NGMtMC4zOTgsLTAuMTg2IC0wLjc0NywtMC4zOTEgLTEuMDQ2LC0wLjYxYy0wLjMwMSwtMC4yMjEgLTAuNTQ3LC0wLjQ5NiAtMC43MzcsLTAuODI4Yy0wLjE5LC0wLjMzIC0wLjI4NSwtMC43MjEgLTAuMjg1LC0xLjE3NGMwLC0wLjQzNiAwLjA5NiwtMC44MyAwLjI4OCwtMS4xODNjMC4xOTMsLTAuMzUyIDAuNDg2LC0wLjYzNCAwLjg4LC0wLjg0NGMwLjM5NiwtMC4yMSAwLjg3NiwtMC4zMTUgMS40NDYsLTAuMzE1YzAuNDA2LDAgMC43ODEsMC4wNDUgMS4xMjUsMC4xMzNjMC4zNDQsMC4wODYgMC42MjgsMC4xODUgMC44NTEsMC4yOTVjMC4yMjUsMC4xMDggMC4zNzcsMC4xOTQgMC40NjEsMC4yNTZsMCwxLjljLTAuMjk3LC0wLjIzOCAtMC42MjgsLTAuNDQ5IC0wLjk5MywtMC42MzdjLTAuMzY0LC0wLjE4NyAtMC43NTUsLTAuMjgxIC0xLjE3MSwtMC4yODFjLTAuMjcyLDAgLTAuNDcsMC4wNTkgLTAuNTkyLDAuMTc2Yy0wLjEyMywwLjExNyAtMC4xODQsMC4yNiAtMC4xODQsMC40MzJjMCwwLjE2IDAuMDYxLDAuMjk4IDAuMTg0LDAuNDE1YzAuMTIyLDAuMTE4IDAuMzQsMC4yNTkgMC42NTUsMC40MjdjMC41NTksMC4yOTIgMS4wMDcsMC41NTYgMS4zNDIsMC43ODljMC4zMzUsMC4yMzQgMC41OTcsMC41MDMgMC43ODksMC44MWMwLjE5MSwwLjMwNSAwLjI4NSwwLjY4NSAwLjI4NSwxLjE0WiIgc3R5bGU9ImZpbGw6I2Y0ZjVmNjtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMzkuNzcxLDIzLjkxN2w3LjY3NSwtNy45MjZjLTMuMTUsLTguMjgzIC0xMS43NTUsLTE0LjgwNCAtMjEuNjAyLC0xNC44MDRjLTEyLjU0NCwwIC0yMi43MTIsOS42MTEgLTIyLjcxMiwyMS40NjZjMCw0LjA5OCAxLjIxNSw3LjkyNiAzLjMyNCwxMS4xODRsMTkuNjA3LC0yNi4yNDYiIHN0eWxlPSJmaWxsOiNmNGY1ZjY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg==")
}




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

export default function IndexPage({ data }) {
  return (
<> 


<Seo title={`Welcome`} />
<Seo image={'https://twilightscapes.com/follow-me-into-the-night-promo.jpg'} />


    {/* <Helmet>
<meta name="twitter:image:src" content="https://twilightscapes.com/follow-me-into-the-night-promo.jpg" />
</Helmet> */}

    <CustomBox>
    <Layout>



   

    {/* <TouchUp /> */}
    <div className="home-banner flexbutt" style={{position:'relative', height:'auto', overflow:'hidden'}}>




<div className="flexcheek" style={{padding:'1vh 3% 0 3%',}}>

  <h1 className="title1">Night Photography</h1>

  <p className="tagline1">
   Todd Lambert: a pioneer in night photography
  </p>


      <p>Finding obscure locations and unusual subject matter, Todd has excelled at capturing long exposure photos of rarely seen moments of time.</p>
      <p>As a location scout and avid urban explorer, Todd learned to photograph what he sees and to bring the unique subject matter he finds to light.</p>

<div className="" style={{display:'flex'}}>

      <blockquote className="frontquote" style={{width:'60%'}}>
<p>The night is misunderstood and often feared, but the night can be a world of wonder and an orchestra of colors. Finding yourself at 3am in a graveyard filming flowers; some may see that as weird, but for me, it's pure tranquility. </p>
<div style={{textAlign:'right', marginRight:'20%', marginTop:'10px'}}> – Todd Lambert
</div></blockquote>

<div style={{width:'40%',  padding:'3vw'}}><Image alt="Todd Lambert hanging with friends" filename="todd-profile.jpg" className="" /></div>

</div>

<p>Let Todd's award winning night photography and digital storytelling, prove to you that the night is indeed beautiful.</p>

<Social />
  <br /> <br />




</div>













<div className="flexcheek" style={{position:'relative', overflow:'hidden'}}>

<div className="kenburns-right"  style={{zIndex:'-1', width:'', height:''}}><Image alt="Todd Lambert hanging with friends" filename="night316.jpg" className="featured-image kenburns-right" /></div>


<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0',}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
<h2
  className="letter normal txtshadow-header hit-the-floor"
  style={{
    color: '#fff',
    fontSize: '60px',
   position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
    textAlign: 'right', 
    float: 'none',
    margin:'0',
    padding:'0',
  }}
>
  Follow me
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'40px',
   color: 'white',
   position: 'relative',
    textAlign: 'right', 
    margin:'0',
    padding:'0',
  }}
>
  into the
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'80px',
   color: 'white',
   position: 'relative',
//            top: '230px',
    textAlign: 'right',
    textTransform: 'uppercase', 
    margin:'0',
    padding:'0',
  }}
>
  Night
</h2>
</ScrollAnimation>



<ScrollAnimation animateIn="bounceInUp" delay={1750} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', bottom:'0',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center'}}>


  <Newsignup />
</ScrollAnimation>


</div>

</div>

</div>



<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'#FA02B7', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div>
</div>




<br /><br />
<h2 style={{display:'flex', fontSize:'30px', margin:'0 3% 2rem 3%'}}>
      Latest Twilightscapes<span className=""> <span className="icon -right" style={{padding:'10px 0 0 1rem'}}><RiArrowDownLine /></span>
      </span>
    </h2>
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