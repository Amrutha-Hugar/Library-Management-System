import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Styles/readbook.css'

const ReadBook = () => {
    let params = useParams() //to fetch id from the url or route
    
    let[book,setbook] = useState([])
    useEffect(()=>{
        let fetchdata =async() =>{
            let response = await fetch(`http://localhost:7000/books/${params.id}`)
            let data = await response.json()
            setbook(data)
        }
        fetchdata()
    })
    return ( 
     <div className="readbook">
        <Navbar/>
      
       <div className="l1">
        <img src={book.thumbnailUrl} alt="" />
        <div className="l2">
        <h3>Title:{book.title}</h3>
        <h3>Author:{book.authors}</h3>
        <p><b>Short Description</b>:{book.shortDescription}</p>
        <p><b>Long Description</b>:{book.longDescription}</p>
        </div>
        
            
        </div>
       
     </div>
     );
}
 
export default ReadBook;