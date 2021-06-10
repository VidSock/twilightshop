import * as React from "react"
import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

export const Item = () => {

    return (
        <>
          <button className="back" onClick={()=>navigate(-1)}>
        <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
              </span> {" "} Go Back 
              </button>
        </>
    );
};