import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/login.css'
const Login = () => {


    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let Navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()
        if (email == "admin@gmail.com" && password == 12345) {
            Navigate('/admin')
        }
        else {
            alert('invalid credentials')
        }

    }
    return (
        <div className="login">
             <div className="image1">
                <img src="images/flower.webp" height={"500px"}  width={"800px"}alt=""/>
            </div>
            <div className="login_form">
                <form action="" onSubmit={submit}>
                    <div className="hi">
                        <h1 className="hi">LOGIN</h1>
                    </div>
                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email address" />
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Enter password" />
                    <button>Login</button>
                </form>
            </div>

           
        </div>
    );
}

export default Login;