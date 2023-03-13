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
                <Navbar />
            </div>
            <div className="couple">
               <div className="nn">
               <h1>Café at Greenwich Lbrary</h1>
                <p>There’s no need to stroll down the Ave for a meal when you’re at the Library! Visit our lower level to get coffee, drinks, snacks, and lunch options, locally sourced from favorites like Happiness Is and Shearwater Coffee.</p>
               </div>
            </div>
            <div className="vv">
                <h1>March Events</h1>
                <p>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</p>
            </div>
           <div className="main">
           <div className="lcm1">
                <h1>Tax Help</h1>
                <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</p>
            </div>
            <div className="lcm2">
                <h1>Sea Glass Frames</h1>
                <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</p>
            </div>
            <div className="lcm3">
                <h1>Protect Yourself Online</h1>
                <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</p>
            </div>
            <div className="lcm4">
                <h1>Adopt-a-Shelf</h1>
                <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</p>
            </div>
           </div>

        </div>


    );
}

export default Admin;