import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "../style/hero.css";
import "../style/about.css"
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-box">
                {/* left */}
                <div>
                    <img src="image1.jpg" alt="my-pic" className="hero-image" />
                    <div className="social-icons">
                   <Link href= "facebook.com"><FaFacebook className="s-icon1"/></Link>
                   <Link href="" ><FaGithub className="s-icon2"/></Link>
                   <Link href="" ><FaLinkedin className="s-icon3" /></Link>
                 </div>
                </div>
                {/* right */}
                <div className="hero-content">
                    <h1 className="hero-title">About us </h1>
                    <p className="hero-des"> I am learning the essentials of HTML, CSS, and JavaScript. I am starting to understand the basics of front-end design, responsive layouts, and adding interactivity to make sites more engaging. With each new project, I am gaining confidence in my coding skills and looking forward to exploring more advanced topics like frameworks and APIs the essentials of HTML, CSS, and JavaScript. I am starting to understand the basics of front-end design, responsive layouts, and adding interactivity to make sites more engaging. With each new project.</p>
                   
                </div>
                


            </div>
        </div>
    )
}
export default About