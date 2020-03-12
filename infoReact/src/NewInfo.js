import React,{useState, useEffect} from "react"
import { Form,Button } from 'react-bootstrap'
import "./Styles/newInfoStyle.css"
import Connect from "./InfoConnect"

const NewInfo = ({setData}) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [link, setLink] = useState("");
    const [pic, setPic] = useState(true);

    const postData = async (event) =>{
        event.preventDefault()
        if(title !== "" && category !== "" && text !== ""){
            let data = {
                title,
                category,
                text,
                link,
                pic
            }
            const response = await Connect.create(data)
            const newData = await Connect.getAll()
            setData(newData)
            console.log(response)
        }else{
            console.log("Dont send empty data")
        }
        
    }
 
    return(
        
            <div className="shadowBackground center effect6">
                
                <Form onSubmit={postData}>
                <Form.Group >
                    <Form.Label>Title:</Form.Label>
                    <Form.Control onChange={event => setTitle(event.target.value)} type="text" placeholder="Enter the title of info" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Category:</Form.Label>
                    <Form.Control onChange={event => setCategory(event.target.value)} type="text" placeholder="Enter the Category ex.Factory" />
                </Form.Group>
                
                <Form.Group >
                    <Form.Label>Write the info conserning the title</Form.Label>
                    <Form.Control onChange={event => setText(event.target.value)} as="textarea" rows="7" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>add a link to a picture (optional)</Form.Label>
                    <Form.Control onChange={event => setLink(event.target.value)} type="text" placeholder="Link here"/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
                Show as photo
                <input type="radio" onClick={() => setPic(false)} name="gender" value="male"></input>
                add as a Link
                <input type="radio" onClick={() => setPic(true)} name="gender" value="male"></input>
                </Form>
                
                
            </div>
        
    )
}

export default NewInfo;