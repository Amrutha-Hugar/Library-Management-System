
import Navbar from "./navbar";

import '../Styles/adduser.css'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
    let Firstname = useRef(null)
    let lastname = useRef(null)
    let email = useRef(null)
    let contact = useRef(null)

    let navigate = useNavigate()

    let Adduser = (e) => {
        e.preventDefault()
        let data = {
            firstname: Firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            contact: contact.current.value

        }
        fetch("http://localhost:5000/Users", {
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(data)
        })
        alert("add successfull")
        navigate('/add-user')
    }



    return (
        <div className="adduser">
            <Navbar />
            <div className="g1">
                <div className="g2">

                    <form action="" onSubmit={Adduser}>
                        <div className="g3">
                            <h1>User-Details</h1>
                            <input ref={Firstname} type="text" placeholder="Enter the Firstname" />
                            <input ref={lastname} type="text" placeholder="Enter the Lastname" />


                            <div className="g4">
                                <input ref={email} type="text" placeholder="Enter the Email" />
                                <input ref={contact} type="text" placeholder="Contact" />
                                <button type="submit">submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Adduser;