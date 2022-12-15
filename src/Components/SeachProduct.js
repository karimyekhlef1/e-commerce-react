import React from "react";
import "../style/search.css"

export default function Searchproduct(props){
const Seach = props.handleSearchItem;
    return(
            <div>
              <div class=" height d-flex justify-content-center align-items-center">
                 <div class="col-md-6">            
                     <div class="form">
                       <i class="fa fa-search"></i>
                        <input  onChange={Seach} type="text" class="form-control form-input" placeholder="Search anything..."/>
                         <span class="left-pan"><i class="fa fa-microphone"></i></span>
                        </div>
                 </div>
              </div> 
            </div>
    )


    
    

}