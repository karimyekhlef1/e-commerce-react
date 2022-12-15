import { Component } from "react";
import React from "react";
import "./style/app.css"
import NavBar from "./Components/NavBar";
import Home from "./Components/pages/Home";
import Products from "./Components/pages/Products";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Favorit from "./Components/pages/Favorit"
import Card from "./Components/pages/Card";
import Creatproduct from "./Components/pages/Creatproduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProduct from "./Components/EditProduct"
import Footer from "./Components/Footer"
import Viewproduct from "./Components/Viewproduct";



fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('data',JSON.stringify(data)));

let allitems=JSON.parse(localStorage.getItem('data'))




class App extends Component {
    state={
      products:allitems,
      newname:'',
      newprice:'',
      newdescription:'',
      newimagesrc:'',
      newcategory:'',
      favoirtes:[],
      cardItems:[],
      redirectview:false,
      redirecthome:false,
      redirectProducts:false,
      redirectFavorit:false,
      redirectcard:false,
      redirectedit:false,

    }
    componentDidMount(){
     

      }
            handleChangeInput = (e) =>{
                      this.setState({
                        [e.target.id]: e.target.value
                      });
            }
            addItem =(e)=>{
                          e.preventDefault();
                              this.setState({
                                products:[...this.state.products,
                              {
                                id:this.state.products.length,
                                name:this.state.newname,
                                price:this.state.newprice,
                                description:this.state.newdescription,
                                image:this.state.newimagesrc,
                                category:this.state.newcategory
                              },
                              ],
                          newname:'',
                          newprice:'',
                          description:'',
                          newimagesrc:'',
                          newcategory:'',
                          redirectProducts:false
                        
                          },()=>{
                                  localStorage.setItem('data',JSON.stringify(this.state.products))
                                  this.setState({redirectProducts:true})
                          });

            }
            DeleteItem = (id) => {
                  let products=this.state.products
                  let newProducts = products.filter((product)=> product.id !== id)
                  this.setState({
                    products:newProducts,
                  },()=>{
                    localStorage.setItem('data',JSON.stringify(this.state.products))
                  });
            
            
            }              
             addToFavorit=(item )=>{
                    const {favoirtes}=this.state
                    if(!favoirtes.some( (existedItem)=>existedItem.id === item.id)){
                      this.setState({
                        favoirtes:[...favoirtes,item],
                        redirectFavorit:true
                      },
                      ()=>{
                        this.setState({  redirectFavorit:false})
                      }
                      )
                    }
                    else{
                      window.confirm("This product is in favourites")
                      this.setState({
                        redirectFavorit:true
                      }
                      ,
                      ()=>{
                        this.setState({  redirectFavorit:false})
                      }
                      )
                    }
               }
               removefromfav=(id)=>{
                let favoirtes=[...this.state.favoirtes]
                let newItems=favoirtes.filter((item)=> item.id !==id)
                this.setState({
                  favoirtes:newItems,
                })
               }
               addItemCart = (product) =>{                
                const existedItem=this.state.cardItems.find((i)=>i.id === product.id)
                if(existedItem){
                  let cardItems=this.state.cardItems.map((item)=>
                  item.id === product.id ? {...existedItem,qty:existedItem.qty+1}:item);
                        this.setState(
                          {cardItems,},

                           ()=>{
                              if(window.confirm("This product is in card\n are you sure ?")){

                                this.setState({
                                    redirectcard:true }
                                ,()=>{
                                    this.setState({  redirectcard:false});
                                    }
                                  );
                              }

                            
                             
                      
                              
                            }
                          );
                        }else{
                                  this.setState({
                                  cardItems:[...this.state.cardItems,{...product,qty:1}],
                                  redirectcard:true }
                   ,()=>{
                    this.setState({  redirectcard:false});
                       });
              
                 };
                   
               };
               removeItemCard = (prod)=>{
                 const existedItem=this.state.cardItems.find((i)=>i.id === prod.id)
                  if(existedItem.qty===1){
                     let cardItems =this.state.cardItems.filter((i)=>i.id !=prod.id);
                     this.setState({cardItems});
                  }else{
                    let cardItems=this.state.cardItems.map((item)=>
                    item.id=prod.id?{...existedItem,qty:existedItem.qty-1}:item);
                    this.setState({cardItems})
                  }  }
                  EditItem=(id)=>{
                    localStorage.setItem('productid',id);

                    // localStorage.setItem('productId',id)
                    this.setState({redirectedit:true},()=>{
                      this.setState({redirectedit:false})
                    })

                  }
                  viewproduct=(id)=>{
                    localStorage.setItem('viewproductid',id);

                    // localStorage.setItem('productId',id)
                    this.setState({redirectview:true},()=>{
                      this.setState({redirectview:false})
                    })

                  }
                  saveUpdate=(e,ubdatename,ubdateprice,ubdatedescription,ubdateimage)=>{
                    e.preventDefault();
                    let getData=JSON.parse(localStorage.getItem('data'))
                    let productid=localStorage.getItem('productid')
                    let data=getData.find((item)=>item.id==productid);
                    data.name=ubdatename;
                    data.price=ubdateprice;
                    data.description=ubdatedescription;
                    data.image=ubdateimage
                    console.log(ubdatename,ubdateprice,ubdatedescription,ubdateimage)
                    localStorage.setItem("data",JSON.stringify(getData))
                    this.setState({ products:getData, redirectProducts:true},()=>{
                      this.setState({redirectProducts:false})
                    })
                  }
                 
              
  render(){
      return (
      
            <div className="App">
           <BrowserRouter>
              <NavBar/>     
              {this.state.redirectview && <Redirect to="/viewproduct"/> }

                  {this.state.redirectedit && <Redirect to="/editproduct"/> }
                  {this.state.redirectProducts && <Redirect to="/Products"/>}
                  {this.state.redirectFavorit && <Redirect to="/favorit"/>}
                  {this.state.redirectcard && <Redirect to="/card"/>}
                  {/* {
                    routes.map((route)=>(
                      <Route
                       path={route.path}
                       exact={route.exact}
                       component={route.component}
                       render={(porps)=>route.render(this,this.props)}
                      />
                    ))

                  } */}

                     <Route exact path="/"  component={Home} />

                     <Route exact path="/Products" 
                        render={(props)=>{
                        return <Products 
                        items={this.state.products}
                        {...props} 
                        DeleteItem={this.DeleteItem}
                        addToFavorit={this.addToFavorit}
                        addItemCart={this.addItemCart}
                        removeItemCard={this.removeItemCard}
                        EditItem={this.EditItem}
                        viewproduct={this.viewproduct}
                        />
                        
                        }}
                     />
                     <Route exact  path="/card" 
                       render={(props)=>{
                        return <Card
                        {...props}
                        cardItems={this.state.cardItems}
                        addItemCart={this.addItemCart}
                        removeItemCard={this.removeItemCard}
                        
                        />
                        }}
                        />
                     <Route path="/creatproduct" exact
                            render={(props)=>{
                            return( 
                               <Creatproduct
                                  {...props}
                                  handleChangeInput= {this.handleChangeInput}
                                  addItem={this.addItem}
                                  newname={this.state.newname}
                                  newprice={this.state.newprice}
                                  newdescription={this.state.newdescription}
                  
                                />
                             );
                             }}
                      /> 
                     <Route path="/favorit" exact
                            render={(props)=>{
                              return(<Favorit
                              {...props}
                              favoirtes ={this.state.favoirtes}
                              remove={this.removefromfav}
                              />
                              ) ;
                              }}
                              />
                              <Route path="/editproduct" exact
                            render={(props)=>{
                              return(<EditProduct
                                // {...props}
                                // EditItem= {this}
                                saveUpdate={this.saveUpdate}
                                data={this.state.products} 
                               
                              />
                              ) ;
                              }}
                              />
                               <Route path="/viewproduct" exact
                            render={(props)=>{
                              return(<Viewproduct 
                                viewproduct={this.viewproduct}
                                data={this.state.products} 
                                addToFavorit={this.addToFavorit}
                                addItemCart={this.addItemCart}
                                removeItemCard={this.removeItemCard}

                              />
                              ) ;
                              }}
                              />
                              {/* <Footer/> */}
            </BrowserRouter>
            
            </div>
  );
 }
}

export default App;
