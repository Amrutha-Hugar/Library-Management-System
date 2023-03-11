import Navbar from "./navbar";
import '../Styles/admin.css'
// import '../styles2/admin1.css'


const Admin = () => {
    return (
        <div className="admin">

              
            <div className="mm">
            <div className="hh">
                <div className="logo">
                    <img src="images/green.jpg" alt="" />
                </div>
                <div className="j1">
                    <ul>
                        <li><a href="">Donate</a></li>
                        <li><a href="">Library Card</a></li>
                        <li><a href="">Acoount</a></li>
                        <li><a href="">Search</a></li>
                    </ul>



                </div>
            </div>
            <div className="aa">
                <h1>Where the Crawdads Sing</h1>
                <p>On Friday, March 10 at 7:00 pm, come see the adaptation of the bestselling novel about a girl raising herself in the marshlands of North Carolina.</p>
            </div>
            
            </div>
            <div className="kk">
            <Navbar/>
            </div>
            
            </div>

        
    );
}

export default Admin;