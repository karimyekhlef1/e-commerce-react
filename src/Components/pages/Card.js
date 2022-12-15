import React from "react";
import { Button } from "react-bootstrap";
import Product from "../Product";
import ThereIsNoProduct from "../ThereIsNoProduct";
import './style/card.css';


class Card extends React.Component {


  render(){

    let cardItems=this.props.cardItems;
  
     let total=cardItems.reduce((a,c)=>a + c.price*c.qty,0)
     let itemsCount=cardItems.reduce((a,c)=>a + c.qty,0)
  

  return( 
      <div  className="big-card row" style={{margin:"20px"}}>
       {cardItems.length>0 ? 
       <div  className="card-order " >
               <div className="order ">
                   <div>
                     <h3>{cardItems.length ? `Items count :  ${itemsCount}`:'' }</h3>
                   </div>

                   <div>
                     <h6>{ total>0 ? `Totale Price : ${total} $`:""}</h6>
                   </div>
                
                <div className="card-btn">
                    {total>0 ?  <Button> Bay now</Button>:""}  
                </div> 
                </div>               
            </div>

         :""}

       

        {  cardItems.length ?cardItems.map((item)=> 
        
        <Product 
            match={this.props.match}
            singlitem={item}
            key={item.id}
            cardItems={this.props.cardItems} 
            addItemCart={this.props.addItemCart}
            removeItemCard={this.props.removeItemCard}
            />
        

     
          )
               
          :<ThereIsNoProduct/>

        }
          
                  
       

      </div>
  )
  }


}
export default Card;