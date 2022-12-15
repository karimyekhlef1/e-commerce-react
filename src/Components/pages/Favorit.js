 import React from "react";
 import { Component } from "react";
import { Button } from "react-bootstrap";
 import Product from "../Product";
import ThereIsNoProduct from "../ThereIsNoProduct";
 class Favorit extends Component {
  stats={

  }
    
    render(){
     const favoirtes=this.props.favoirtes;
     const remove=this.props.remove;
     console.log("========this.props.favvorit==========>",this.props)

      return(
        <div className="row "  style={{margin:"20px",justifyContent:"center"}}>
                 { favoirtes.length 
                 
                    ?favoirtes.map((item)=>(
                      <Product 
                      match={this.props.match}

                        singlitem={item}
                        key={item.id}
                        remove={this.props.remove}           
                 // DeleteItem={this.props.DeleteItem} 
                        // addToFavorit={this.props.addToFavorit}

                        
                         
                        //  <Button onClick={()=>remove(item.id)}>remove</Button>

                          />
                       ))
                    :<ThereIsNoProduct/>
                    }
                  

            


        </div>
      )
    
    }
       
    

  }
  export default Favorit;