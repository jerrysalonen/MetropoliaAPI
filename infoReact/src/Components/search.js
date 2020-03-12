import React,{useState, useEffect} from "react"
import Connect from "../InfoConnect"
import { Form,Button,Col,Row } from 'react-bootstrap'
import "../Styles/newInfoStyle.css"
import sorting from "../sortingAlgorythm/sorting"
import { MDBIcon } from "mdbreact";
import Question from "../Components/question"

const Search = ({setData,data,word, setWord}) => {
    const [s, setS] = useState(false)
    
    const HandeChange = (event) =>{
        setWord(event.target.value)
        let clone = [...data]   
        let newdata = sorting(clone,word)
        setData(newdata)

    }
    let a="introductions how to use infosaudddd dddsddddddddddddddr dasdsads a dasdsad s                  -      introductions how to use infosaudddd dddsddddddddddddddr dasdsads a dasdsad sintroductions how to use infosaudddd dddsddddddddddddddr dasdsads a dasdsad s"
    return(
        <div className="search">
            <Form.Group as={Row}>
                <Col sm="11">
                <Form.Control type="text" onChange={HandeChange}  placeholder="Search" />
                </Col>

                <Form.Label column sm="1">
                
                </Form.Label>
        </Form.Group>
        {s === true && <Question infotext={a}/>}
        </div>
        
    )
}
//<MDBIcon far icon="question-circle"  onClick={() => setS(!s)} className=" map fa fa-camera-retro fa-2x" />
export default Search