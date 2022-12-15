import React from "react";
import { Button } from "react-bootstrap";

class ShopNow extends React.Component{
    state={
        ardItems:this.props.cardItems,
        total:this.props.total,
       itemsCount:this.props.itemsCount
    }
         
     
    render(){
      
        console.log("total=====>",this.state.total)
   

        return(
            
            <div className=" bg " style={{ width: '18rem'}}>
                <div>
                 
               <h2>{this.cardItems.length ? `Items count :  ${this.itemsCount}`:'' }</h2>
               <h4>{ this.total>0 ? `Totale Price : ${this.total}`:""}</h4>
          
                </div>
                    <div>
                        <Button> shop now</Button>
                    </div>                
            </div>
        )
    }
}
export default ShopNow;