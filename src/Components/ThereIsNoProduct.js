import React from "react";
import image from  "../Assets/Thereisnoproduct.png"
import "../style/ThereIsNoProduct.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return (
        <div className=" row justify-content-center " style={{ left:'50%',marginTop:'120px',textAlign:"center" }} >
                       <img className="imageErr" src={image}  alt=""
                           style={{  maxWidth: "8rem",minWidth:" 8rem"}}
                        />
     
            <h5 className="text">No Products Found</h5>
        </div>
    )
} 
