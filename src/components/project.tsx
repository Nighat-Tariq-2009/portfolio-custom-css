
import Link from "next/link"
import "../style/project.css"
import "../style/services.css";


// project section
export default function Project (){
    return(
     

        
       <main className="main">
        <div className="ser-container">
            {/* top container */}
            <div className="top-container">
                <h2 className="ser-h2">My Projects</h2>
                <p className="ser-des">
                I help people learn web development step by step, from basic HTML to advanced JavaScript. I make coding easy with  exercises. </p>
            </div>
            {/* bottom container */}
            <div className="bottom-container">
                <div className="ser-card">
                <Link href=" https://nighat-tariq-2009.github.io/bulb-on-off-project/"><img src="img1.png"  width="100" alt="" /></Link>
                <h3>Bulb turn on/off</h3>
                
                </div>
                <div className="ser-card">
                <Link href="https://nighat-tariq-2009.github.io/signup-form/"><img src="img2.png"  width="100" alt="" /></Link>
                <h3>Sign-Up Form</h3>
                
                </div>
                <div className="ser-card">
                <Link href="https://nighat-tariq-2009.github.io/mySimple-calculator/"><img src="img3.png"  width="100" alt="" /></Link>
                    <h3>Simple Calculator</h3>
                </div>
                <div className="ser-card">
                <Link href="https://nighat-tariq-2009.github.io/post-application/"><img src="img4.png"  width="100" alt="" /></Link>
                    <h3>Post Application</h3>
                    
                </div>
                <div className="ser-card">
                <Link href="https://nighat-tariq-2009.github.io/quiz-application/"><img src="img5.png"  width="200" alt="" /></Link>
                    <h3>Quiz Application</h3>
                  
                    </div>
                <div className="ser-card">
                <Link href="https://nighat-tariq-2009.github.io/todo-list/"><img src="img6.png" width="200" alt="" /></Link>
                    <h3>To-Do List</h3>
                   
                    </div>

            </div>

        </div>
       </main>
    )
}