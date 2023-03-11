import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import '../Styles/addbook.css'

const Addbook = () => {
    

    let[title,settitle] =useState("")
    let[pagecount,setpagecount] =useState("")
    let[author,setauthor] =useState("")
    let[category,setcategory] =useState("")
    let[description,setdescription] =useState("")
    
    let[ImageUrl,setimageurl] =useState("")
    

    let Navigate = useNavigate()

let handlesubmit =(d)=>{
    d.preventDefault()
    let data={title,pagecount,author,category,description,ImageUrl}
      fetch("http://localhost:5000/books",{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(data)
      })
    Navigate('/book-list')
    alert("successfuly adding the books")
}

    return ( 
        <div className="addbook">
            <Navbar/>
            <div className="c1">
            <div className="c2">
                <h1>Add Books</h1>
            </div>

            <div className="c3">
                <div>
                <form action="" onSubmit={handlesubmit}>
                <input value={title} onChange={(d) => settitle(d.target.value)} type="text" placeholder="Enter the Title" />

                <input value={pagecount} onChange={(d) => setpagecount(d.target.value)} type="text" placeholder="Enter the page count" />
                <input value={author} onChange={(d) => setauthor(d.target.value)} type="text" placeholder="Enter the Author name" />
                <input value={category} onChange={(d) => setcategory(d.target.value)} type="text" placeholder="Enter the category" />
                <input value={description} onChange={(d) => setdescription(d.target.value)} type="text" placeholder="Enter the Description" />
                <input value={ImageUrl} onChange={(d) => setimageurl(d.target.value)} type="url" placeholder="Enter the image" />
                <button type="submit">submit</button>
            
                </form>
                </div>
            </div>
            </div>
        </div>

     );
}
 
export default Addbook;