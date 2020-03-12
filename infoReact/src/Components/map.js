import React,{useState, useEffect} from "react"
import { Form,Button,Col,Row,Modal } from 'react-bootstrap'
import Connect from "../InfoConnect"
import "../Styles/newInfoStyle.css"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

const Map = ({handleClose,show}) =>{

    return(
      <div className="kk" onClick={() => handleClose(!show)}>
        <div className="kuva">
          <Button variant="danger" className="nappi2" onClick={() => handleClose(!show)}>Exit</Button>
        </div>
      </div>
  )
    
}
//
export default Map;
    