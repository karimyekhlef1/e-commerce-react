import React from "react";
 import { Component } from "react";
 import "../style/viewproduct.css"
 import { MdFavoriteBorder } from 'react-icons/md';
 import { MdOutlineShoppingCart } from 'react-icons/md'; 
 import { MdEdit } from 'react-icons/md';


class Viewproduct extends Component{
   
    render(){
        let viewproductid=JSON.parse(localStorage.getItem('viewproductid'))
        let product=this.props.data.find((item)=>item.id==viewproductid);
        console.log(product)

        const addToFavorit=this.props.addToFavorit;
        const addItemCart=this.props.addItemCart;
        // const singlitem=this.props.singlitem

        return(
         <div>
                        
                           
    <div class="container-product">
        <div class="imgBx">
            <img src= {product.image}/>
        </div>
        <div class="details">
            <div class="content">
                <h2>{product.title} <br/>
                    <span>{product.category}</span>
                </h2>
                <h3>Description:</h3> 
                <p> {product.description}</p>
            
                <h3> {product.price} EUR </h3> <br/>
                <div className="all-btn">
                <button onClick={ ()=> addItemCart(product)}> <MdOutlineShoppingCart/> Add To Card</button>
                <button onClick={ ()=> addToFavorit(product)}><MdFavoriteBorder/> Add to Favorit</button>
                </div>
                
            </div>
        </div>
    </div>

            </div>
        )
    }
} 
export default Viewproduct;