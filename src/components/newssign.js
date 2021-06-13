
import * as React from "react"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

// input::placeholder {
//   color: #111;
// }







    @media (max-width: 58em) {


      .signbox input{margin-bottom:10px; margin-right:0;}

    }


}

`


const NewsletterPage = () => (


<CustomBox style={{}}>
<form
          className="news-form"
          action="/signedup/"
          name="ts-news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">

            <div className="newsletter" style={{ margin:'0 10px', padding:'10px 0 10px 0', borderRadius:'12px', textAlign:'center', color:'#fff'}}>

              <div className="blocker" style={{width:'100%', height:'100%'}}></div>

          <input type="hidden" name="form-name" value="news" />

<br />

            
              <strong>Follow Me Into The Night</strong><br /> <span style={{fontSize:'70%'}}>night photography newsletter - (it's free!)</span><br /><br />

             <div className="signbox" style={{display:'',}}>
               <label style={{color:'#fff'}} For="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{marginRight: '1rem', padding:'.5rem', width: '35vw', maxWidth:'100%', border:'2px solid #666', background:'rgb(51, 51, 51)', borderRadius:'8px'}}/></label>
                      
            


  

            <button
              className="button1"
              sx={{
                variant: "variants.button",
                cursor:'pointer',
                width:'',
                background:'#222 !important',
              }}
              type="submit"
      
            >
              Follow Todd {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </button>


            </div>


            <div style={{fontSize: '70%', padding: '0px 3%', margin:'30px 0 10px 0', textAlign: 'center', color:'#ccc'}}>
            <Link to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>privacy policy (NO SPAM!)</Link>
              

                </div>

</div>

        </form>
        <br /><br />
</CustomBox>
  
)

  export default NewsletterPage