import React from "react";
import Card from 'react-bootstrap/Card';
import ReactReadMoreReadLess from "react-read-more-read-less";

class  InformationProduct extends React.Component{
    render(){

        const singlitem=this.props.singlitem
    const {id,title,price,image,qty,description}=singlitem;
    

    return(
        <div>
            {/* <div >
                { images.map((srcitem)=><Card.Img variant="top" src={srcitem.url}/>
                )}
              
              
            </div> */}
            <Card.Img className="card-product-image" variant="top" src={image} style={{ width: '16rem' ,height:"16rem"}}/>
            
                    <Card.Body>
                            <Card.Title><h6>{title}</h6> </Card.Title>
                            <Card.Text style={{texteAline:"center"}}
                             >Price: {price}$</Card.Text>
                            {/* <Card.Text>Description:
                            <p className="discr" 
                               style={{
                                fontSize:"14px",
                                fontWeight:"300",
                                color:"rgb(108,108,115)"
                               
                               }}>
                                       <ReactReadMoreReadLess
                                            charLimit={30}
                                            readMoreText={"Read more ▼"}
                                            readLessText={"Read less ▲"}>
                                        
                                            {description}
                                        </ReactReadMoreReadLess>
                             </p>                                   
                           </Card.Text> */}

                    </Card.Body>
        </div>
    )
    }
   
}
export default InformationProduct; 