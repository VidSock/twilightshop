
import * as React from "react"
import styled from "styled-components";
import { Link } from 'gatsby'
import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import {  RiArrowRightSLine } from "react-icons/ri"

const CustomBox = styled.div`

.themed{margin-top:20px;}
=

`



// const BackButton = React.forwardRef(
//   ({ children, ...props }, ref) => {
//     const onClick = e => {
//       e.preventDefault()
//       navigate(-1)
//     }
//     return (
//       <a {...props} ref={ref} href="#" onClick={onClick}>
//         {children}
//       </a>
//     )
//   }
// )

// BackButton.displayName = 'BackButton'
// export { BackButton }


   
const GoBack = () => (

<CustomBox style={{}}>

<button className="back" onClick={()=>navigate(-1)}>
        <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
              </span> {" "} Go Back 
              </button>
{/* <Link to="../../../">
<button className="back">
        <span className="icon -left" style={{paddingRight:'1rem'}}>
        <BiLeftArrow />
        </span> {" "} Go Back 
</button>              
</Link> */}


</CustomBox>
  
)

export default GoBack