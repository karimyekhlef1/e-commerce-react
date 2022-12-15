import React from "react";
import Button from 'react-bootstrap/Button';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md'; 
import { MdEdit } from 'react-icons/md';
import {MdDelete} from 'react-icons/md';
import InformationProduct from './InformationProduct'
import Card from 'react-bootstrap/Card';
import "../style/product.css"


class Product extends React.Component {
    state={
        props:this.props
    }
    render(){
        console.log("*********",this.props)
    const singlitem=this.props.singlitem
    const {id,name,price,image,qty,description}=singlitem;
    const DeleteItem=this.props.DeleteItem  ;
 
    const favoirtes=this.props.favoirtes;
    const remove=this.props.remove;
    const EditItem=this.props.EditItem;
    const viewproduct=this.props.viewproduct
if(this.props.match.path==="/Products"){
     return (
                    
            <Card className="card-product " style={{ width: '18rem'}} onClick={()=>viewproduct(id)}>
               
               <InformationProduct 
                     singlitem={singlitem}
                     />

                            
            </Card>
            
                )
}

if(this.props.match.path==="/card"){
    return (
    
            <Card className="card-product" style={{ width: '18rem'}}>
               
               <InformationProduct 
                     singlitem={singlitem}
                     />
                
                            
                <Card.Body> 
                    <div className="" >
                        <span> Price : {price}$ </span><br/>
                        <span> Quantity : {qty}</span><br/>
                        <span> Total Price : {qty*price}$ </span>
                        <div>
                        <Button className="btn btn-light" onClick={  ()=> this.props.addItemCart(singlitem) }>+</Button> 
                        <Button className="btn btn-light"  onClick={  ()=> this.props.removeItemCard(singlitem) }>-</Button>
                        </div>

                    </div>
                </Card.Body>
            </Card>

)
}
if(this.props.match.path==="/favorit"){
    return (
    
            <Card className="card-product" style={{ width: '18rem' }}>
                
                <InformationProduct 
                     singlitem={singlitem}
                     />
                
                            
                <Card.Body> 
                    <div className="buttons-card " >
                    <Button className="btn btn-light" onClick={()=>remove(id)}><MdDelete/> </Button>
                    {/* <Button className="btn btn-light"  onClick={ ()=> addItemCart(singlitem)} >   <MdOutlineShoppingCart/>  </Button>     */}
                    </div>
                </Card.Body>
            </Card>
            
)
}

    }

   

}

export default Product ;





