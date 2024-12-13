import { MdEmail } from "react-icons/md"
import "../style/contact.css"
import "../style/services.css"
import { FaLaptopCode, FaHtml5 ,  FaCss3Alt , FaReact, FaHome, FaPhoneAlt, } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"


export default function Contact(){
    return(
        <main>
            <div className="contact-main">
         {/* top container */}

         <div className="bottom-container">
                <div className="ser-card">
                <FaHome  className="con-icon1" />
                <h3>Home</h3>
                <p>House.No 138, Karachi</p>
                </div>
                <div className="ser-card">
                <FaPhoneAlt className="con-icon2" />
                <h3>Phone number</h3>
                <p>0315-2907886</p>
                </div>
                <div className="ser-card">
                    <MdEmail className="con-icon3" />
                    <h3>Email address</h3>
                    <p>nighattariq1986@gmail.com</p>
                </div>
                <div className="ser-card">
                    <IoLogoWhatsapp className="con-icon4" />
                    <h3>WhatsApp</h3>
                    <p>0315-2907886</p>
                </div>
               

            </div>


            {/* bottom container */}
             <div className="form-container"> 
                <h1 className="con-title">Contact Us</h1>
                  <form action="" className="form">
                    <input type="text" placeholder="Enter your name"/>
                    <input type="text" placeholder="abc@gmail.com"/>
                    <input className="msg" type="text" placeholder="Your message"/>
                </form>
                <button className="btn-sub" >submit</button>
                </div>
            </div>
        </main>

    )
}