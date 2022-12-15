
import React from "react";
import { Component } from "react";
import Product from "../Product";
import ThereIsNoProduct from "../ThereIsNoProduct";
import Searchproduct from "../SeachProduct";
import "./style/products.css"
import { BrowserRouter, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Category from "../Category"
import Home from "../pages/Home"
let allitems=JSON.parse(localStorage.getItem('data'))

class Products extends Component{
   state={
      serchItem:"",
      newfilteritems:this.props.items,
      serchcategory:"",
      products:this.props.items,
      allcategory:[],
      category:[]
   }



componentDidMount(){
   let allcategory=this.state.products.map((product)=>product.category)
      this.setState({
       allcategory:allcategory
      })
            
}



   
   // static  getDerivedStateFromProps(nextProps){
   //    return {
   //       newfilteritems:nextProps.items,

   //    };

   // }
   productpycategory=(item)=>{ 
      console.log(item)
      this.setState({serchcategory :item},()=>{
         this.setState({newfilteritems : this.handfiltercategory(this.props.items)});
        })
   }
   handfiltercategory=(items)=>{
      return items.filter(
         (item)=>
          item.category.indexOf(this.state.serchcategory) !== -1);
   }


   handleSearchItem =(e)=>{
      this.setState({serchItem :e.target.value},()=>{
       this.setState({newfilteritems : this.handfilter(this.props.items)});
      })
   };

      handfilter=(items)=>{
         return items.filter(
            (item)=>
             item.title 
             .toLowerCase()
             .trim()
             .indexOf(this.state.serchItem.toLowerCase().trim()) !== -1)
         
      }
      viewproduct(item){

      }
    render()
     {   
      console.log(this.props)
      const newfilteritems= this.state.newfilteritems;
      return(  
               <div >
                  
                     <Searchproduct 
                     {...this.state}
                     handleSearchItem={this.handleSearchItem} 
                     handfilter={this.handfilter}/>
                     
                     <Category 
                     products={this.state.products}
                     allcategory={this.state.allcategory}
                     productpycategory={this.productpycategory}/>
                   
                     <div  className="products row justify-content-around " style={{margin:0}}>   
                    { newfilteritems.length ? newfilteritems.map((item)=>(
                       <Product
                        match={this.props.match}
                        singlitem={item}
                        key={item.id} 
                        DeleteItem={this.props.DeleteItem} 
                        addToFavorit={this.props.addToFavorit}
                        addItemCart={this.props.addItemCart}
                        EditItem={this.props.EditItem}
                        viewproduct={this.props.viewproduct}
                        />
                       )):<ThereIsNoProduct/>
                    }
                             
                               

                  </div> 
                  
               </div>
              );  
}}
export default Products