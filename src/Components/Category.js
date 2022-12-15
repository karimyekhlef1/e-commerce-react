import React from "react";
import "../style/category.css"
class Category extends React.Component{

    render(){
        console.log("==========",this.props)
        let category=this.props.allcategory.filter((item,index) => this.props.allcategory.indexOf(item) === index)      

        return(
          <div  style={{width:"90%"}}>

       
        <div style={{width:"90%"}}>
          <h3 style={{marginButtom:"1px"}}> Category :</h3>
             <div className="categorys  " >
                
                    {category.map((item)=>
                    <div onClick={()=>this.props.productpycategory(item) }  className="category ">
                       {item}
                    </div>
                      )}
               </div>       
        </div>
        </div>
        )
    }
}
export default Category;