import React,{useState, useEffect} from "react"
import { Form,Button } from 'react-bootstrap'
import Connect from "../InfoConnect"
import "../Styles/newInfoStyle.css"
import Highlighter from "react-highlight-words";

const Question = ({infotext}) => {
    return(
        <div>
            <div className="kk2">
                <div className="kuva">
                <pre className="te pre"> {infotext}</pre>
                </div>
            </div>
        </div>
    )
}

export default Question