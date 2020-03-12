import React,{useState, useEffect} from "react"
import "../Styles/newInfoStyle.css"

const Category = ({data,setSort}) =>{
    const [click, setClicked] = useState(false);
    
    const sort = () => {
        console.log(data.key)
        setSort(data.key)
    }

    const byCatgory = data.list.map((data) => 
        <>
            <li onClick={sort}>{data.title}</li>
        </>
    )

    if(click == false){
        return (
            <div>
                <h4  onClick={() => setClicked(!click)}>{data.key}</h4>
            </div>
        )
    }else{
        return(
            <div >
            <h4 onClick={() => setClicked(!click)}>{data.key}</h4>
            <ul>
                {byCatgory}
            </ul>
            </div>
        )
    }
    
}

export default Category