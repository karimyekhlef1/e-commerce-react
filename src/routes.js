import Home from "./Components/pages/Home"
import Products from "./Components/pages/Products"
import Creatproduct from "./Components/pages/Creatproduct"
import Favorit from "./Components/pages/Favorit"
import Card from "./Components/pages/Card"
import Product from "./Components/Product"
import { Route } from "react-router-dom"
import { Router } from "react-router-dom"
import { BrowserRouter, Redirect } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default[
    {
        path:"/home",
        component:Home,
        exact:"exact",
    },
    {
        path:"/creatproduct",
        exact:"exact",
        render:(self,props)=>{
            return( 
               <Creatproduct
                  {...props}
                  handleChangeInput= {self.handleChangeInput}
                  addItem={self.addItem}
                  newname={self.state.newname}
                  newprice={self.state.newprice}
                  newdescription={self.state.newdescription}
                />
                )
            }
    },
    {
        path: "/products",
        render: (self,props)=>{
            return (
            <Products 
            {...props} 
            items={self.state.products}
            DeleteItem={self.DeleteItem}
            addToFavorit={self.addToFavorit}
            addItemCart={self.addItemCart}
            removeItemCard={self.removeItemCard}
            />
            )
    }
   }, 
   {
      path:"/card" ,
      exact :"exact",
      render:(self,props)=>{
     return <Card
     {...props}
     cardItems={self.state.cardItems}
     addItemCart={self.addItemCart}
     removeItemCard={self.removeItemCard}
     
     />
   }
},
{
    path:"/favorit",
     exact:"exact",
    render:(self,props)=>{
      return(<Favorit
      {...props}
      favoirtes ={self.state.favoirtes}
      remove={self.removefromfav}
      />
      ) ;
      }
    }

]