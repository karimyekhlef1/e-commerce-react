import React from "react";
import { Redirect } from "react-router-dom";
import Category from "../Category";
import "./style/home.css"
class Home extends React.Component{
    state={
        redirect:false,
    }
    componentDidMount(){
   
                 
    }
    shopNow=()=>{
        this.setState({redirect:true},()=>{
            // this.setState({redirect:false})
        })
    }
    
    render(){
  
    console.log(this.props)
        return ( 
         <div className="home row" style={{width:"100%" ,margin: "0px",padding: "0px"}}>
          {this.state.redirect && <Redirect to="/Products"/>}
          {/* <div class="img-container">
  <img src="http://via.placeholder.com/350x150">
  <button>Click here</button>
</div> */}
            <div className="img-container" style={{width:"100%",padding: "0px"}}>
              <img src="https://m.media-amazon.com/images/I/51x7E2BAaRL._SX1500_.jpg" style={{width:"100%"}}></img>
             <button className="Shop-Now" onClick={()=>this.shopNow()}>Shop Now</button>
            </div> 
         </div> 
)}
}
export default Home ;
