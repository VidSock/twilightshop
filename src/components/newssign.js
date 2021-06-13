
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

            <div className="newsletter" style={{ margin:'0 0 0 0', padding:'10px', borderRadius:'12px', textAlign:'center', color:'#fff', width:'100%',  maxWidth:'80%', margin:'0 auto'}}>

              <div className="blocker" style={{width:'100%', height:'100%'}}></div>

          <input type="hidden" name="form-name" value="news" />

<br />

            
              <span style={{fontSize:'120%'}}><strong>Follow Me Into The Night</strong></span><br />
              
              <span style={{fontSize:'85%'}}>night photography newsletter - (it's free!)</span><br /><br />

             <div className="signbox" style={{display:'',}}>

               <label style={{color:'#fff'}} For="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{marginRight: '0rem', marginLeft:'1rem', padding:'.5rem', width: '', maxWidth:'90%', borderRadius:'8px',   background: 'rgba(0,0,0,0.40) !important',}}/></label>
                      
            


  

            <button
              className="button"
              sx={{
                // variant: "variants.button",
                cursor:'pointer',
                width:'',
                background:'#222 !important',
                padding:'.5rem',
                display:'flex',
                
              }}
              type="submit"
      
            >
              <span style={{ textDecoration: 'underline',}}>Follow Todd</span> {" "}
              <span className="icon -right" style={{paddingLeft:'.5rem'}}>
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