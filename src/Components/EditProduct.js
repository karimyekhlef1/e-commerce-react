import React from "react";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from "react-router-dom";
class  EditProduct extends Component{
    state={
        dataInrenal:{},
        ubdatename:'',
        ubdateprice:'',
        ubdatedescription:'',
        ubdateimage:'',
    }
    componentDidMount(){
         let productid=localStorage.getItem("productid")
        let dataInrenal =JSON.parse(localStorage.getItem('data')).find(
            (item)=>item.id ==productid);
        this.setState({dataInrenal})

       

    }
    handleChange = (e)=>{
      this.setState({ 
         [e.target.id]: e.target.value,  

      } 
      

      )
console.log("=====>",this.state.ubdatename,this.state.ubdateprice,this.state.ubdatedescription,this.state.ubdateimage)
    }

   render(){ 
    // console.log("saveUpdate=========>",this.props.saveUpdate)
const {dataInrenal, ubdatename,ubdateprice,ubdatedescription,ubdateimage} = this.state
console.log("=====>",ubdatename,ubdateprice,ubdatedescription,ubdateimage)

     return(
<div className="row card mt-4 ml-3" style={{ width: '24rem' ,marginLeft:"18px" }}>
      <Form onSubmit={(e)=>this.props.saveUpdate(e,ubdatename,ubdateprice,ubdatedescription,ubdateimage)}>
      <Form.Group className="mb-3 mt-3 " controlId="formBasicEmail">
        <Form.Control 
            type='text' 
            id= "ubdatename"
            placeholder='new name product'
            value={ubdatename ? ubdatename :  dataInrenal.name}
            onChange={this.handleChange } />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  type='numper'
                id= "ubdateprice"
                value={ubdateprice ? ubdateprice :  dataInrenal.price}
                placeholder='new price product'
                onChange={this.handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control  type='text'
                id= "ubdatedescription"
                value={ ubdatedescription ? ubdatedescription :  dataInrenal.description}
                placeholder='new description product'
                onChange={this.handleChange} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose new image</Form.Label>
        <Form.Control type="file"
               id="ubdateimage"
              //  value={ubdateimage ? ubdateimage : dataInrenal && dataInrenal.ubdateimage}
          // placeholder='description product'
          onChange={this.handleChangeInput} />
      </Form.Group>
      {/* <img src={this.handleChange}  style={{ width: '21rem' }} >

      </img> */}
      

      <Button  type="submit" 
               value="Creat"
               onClick={this.saveUpdate}>
          Edit
      </Button>
    </Form>
</div>


        
    );
   }

   
   

}
export default EditProduct;