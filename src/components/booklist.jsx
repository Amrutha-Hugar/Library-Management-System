import { useEffect, useState } from "react";
import Navbar from "./navbar";
import '../Styles/booklist.css'
import { Link } from "react-router-dom";

const BookList = () => {

    let[books, setbooks] = useState([])
    useEffect(()=>{
        let fetchdata= async()=>{
        let response =await fetch("http://localhost:5000/books")
        
        let data=await response.json()
        setbooks(data)
        }
        fetchdata()
        
    })
    let remove=(id,title)=>{
        fetch(`http://localhost:5000/books${id}`,{
            method:'DELETE'
        })
        alert(`${title} Has been deleted permanently`)
    }
    return ( 
        <div className="BookList">
            <Navbar/>
            
         <div className="book-list">
            
         {books.map((data)=>(
           <div className="d1">
            <div className="d3">
                <img src={data.thumbnailUrl} alt="" />
                </div>
             <div className="d2">
                <h2>Title:{data.title}</h2>
                <h2>Pagecount:{data.pageCount}</h2>
                <h2>Authors:{data.authors}</h2>
                <h2>Category:{data.categories}</h2>
                {/* <h2>Description(x.)</h2> */}

                <div className="d4">
                    <Link to={`/book-list/${data.id}`}>Readmore</Link>
                    <button onClick={()=>remove(data.id,data.title)}>Delete</button>
                    
                </div>
                
                
                
            
            </div>
           </div>
           
         ))}

         </div>
        </div>
     );
}
 
export default BookList;