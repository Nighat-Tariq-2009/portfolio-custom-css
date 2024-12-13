import "../style/services.css";
import { FaLaptopCode, FaHtml5 ,  FaCss3Alt , FaReact, } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";


export default function Services(){
    return(
       <main className="main">
        <div className="ser-container">
            {/* top container */}
            <div className="top-container">
                <h2 className="ser-h2">My Services</h2>
                <p className="ser-des">
                I help people learn web development step by step, from basic HTML to advanced JavaScript. I make coding easy with  exercises. </p>
            </div>
            {/* bottom container */}
            <div className="bottom-container">
                <div className="ser-card">
                <FaLaptopCode className="ser-icon1" />
                <h3>Web Development</h3>
                <p>Blog, Website</p>
                </div>
                <div className="ser-card">
                <FaHtml5 className="ser-icon2" />
                <h3>Html 5</h3>
                <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="ser-card">
                    <FaCss3Alt className="ser-icon3" />
                    <h3>CSS 3</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="ser-card">
                    <FaReact className="ser-icon4" />
                    <h3>React.Js</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="ser-card">
                    <TbBrandJavascript className="ser-icon5" />
                    <h3>JavaScript</h3>
                    <p>Lorem, ipsum dolor.</p>
                    </div>
                <div className="ser-card">
                    <RiNextjsFill className="ser-icon6" />
                    <h3>Next.Js</h3>
                    <p>Lorem, ipsum dolor.</p>
                    </div>

            </div>

        </div>
       </main>
    )
}