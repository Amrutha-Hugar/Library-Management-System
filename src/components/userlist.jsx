import { useEffect, useState } from "react";
import Navbar from "./navbar";
import '../styles2/user.css'




const Userlist = () => {
    let [user,setuser]=useState([])
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await fetch("http://localhost:7000/Users")
            let data=await response.json()
            setuser(data)

        }
        fetchdata()
    })
    let remove=(id)=>{
        fetch(`http://localhost:7000/Users/${id}`,{
            method:"DELETE"

        })
        alert(`${id} Has been deleted successfully`)
    }


    return ( 

        <div className="Userlist">
            <Navbar/>
            
            <div className="chandru">
                {user.map((x)=>(
                    <div className="hello">
                        

                    <div className="amrutha">
                    <h1>{(x.firstname[0])}</h1>    
                    <h3>FirstName:{x.firstname}</h3>
                    <h3>LastName:{x.lastname}</h3>
                    <h3>Email:{x.email}</h3>
                    <h3>Contact:{x.contact}</h3>
                    <button onClick={()=>remove(x.id)}>delete</button>

                </div>
            
                    </div>
                    
                    
         
                ))}
                </div>
                 
            </div>
        
     );
}
 
export default Userlist;