import { Link } from "react-router-dom";
import '../Styles/navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="images/man.jpg" alt=""/>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/admin">Home</Link></li>
                    <li><Link to="/book-list">Book List</Link></li>
                    <li><Link to="/user-list">User List</Link></li>
                    <li><Link to="/add-book">Add Book</Link></li>
                    <li><Link to="/add-user">Add User</Link></li>
            
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;