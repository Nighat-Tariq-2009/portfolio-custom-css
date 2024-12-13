import "../style/header.css";
import Link from "next/link";

function Header(){
    return(
        
        <div className="header">
            {/* left */}
            <div>
                <img src="logo.png" alt="logo" width={50} className="logo" />

            </div>
            {/* rightside */}
            <div className="header-right-div">
                <ul className="header-links">
                    <li><Link className="nav-links" href ="/" >Home</Link></li>

                    <li><Link className="nav-links" href ="about" >About</Link></li>
                    
                    <li><Link className="nav-links" href ="services" >Services</Link></li>

                    <li><Link className="nav-links" href ="contact" >Contact</Link></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Header