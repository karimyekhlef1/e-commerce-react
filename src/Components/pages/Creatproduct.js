import React from "react";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
// import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


class  Creatproduct extends Component{
  state={
    validated:false
  }

  
     handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      this.setState.validated(true);
    };
   render(){
    console.log(this.props)
     return(
<div className="row card mt-4 ml-3" style={{ width: '24rem' ,marginLeft:"18px" }}>
      <Form noValidate validated={this.state.validated} onSubmit={this.props.addItem}>
      <Form.Group className="mb-3 mt-3 " controlId="formBasicEmail">
        <Form.Control 
            type='text' 
            id= "newname"
            placeholder='name product'
            value={this.props.newname}
            onChange={this.props.handleChangeInput } required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  type='numper'
                id= "newprice"
                value={this.props.newprice}
                placeholder='price product'
                onChange={this.props.handleChangeInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control  type='text'
                id= "newdescription"
                value={this.props.newdescription}
                placeholder='description product'
                onChange={this.props.handleChangeInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control 
                required="required"
                type='text'
                id= "newcategory"
                value={this.props.newcategory}
                placeholder='category product'
                onChange={this.props.handleChangeInput} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose the image</Form.Label>
        <Form.Control type="file"
          id= "newimagesrc"
          value={this.props.newimagesrc}
          required="required"

          // placeholder='description product'
          onChange={this.props.handleChangeInput} />
      </Form.Group>

      <Button  type="submit" 
               value="Creat"
               onClick={this.props.addItem}>
          Creat
      </Button>
    </Form>
</div>
  





         
         
            //  <form onSubmit={this.props.addItem}>
                
            //     <input
            //     type='text' 
            //     id= "newname"
            //     placeholder='name product'
            //     value={this.props.newname}
            //     onChange={this.props.handleChangeInput }
            //     />
            //     <input
            //     type='numper'
            //     id= "newprice"
            //     value={this.props.newprice}

            //     placeholder='price product'
            //     onChange={this.props.handleChangeInput}
            //     />
            //           <Button
            //             type="submit" 
            //             value="Creat"
            //             onClick={this.props.addItem}
            //           >creat</Button>

              
            //  </form>

        
    );
   }

   
   

}
export default Creatproduct;