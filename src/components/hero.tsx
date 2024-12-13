import "../style/hero.css";

function Hero(){
    return(
        <div className="header-container">
            <div className="header-box">
                {/* left */}
                <div>
                    <img src="image1.jpg" alt="my-pic" className="hero-image" />
                </div>
                {/* right */}
                <div className="hero-content">
                    <h1 className="hero-title">I'm Nighat Tariq 
                        <div>Front-end Developer</div>
                    </h1>
                    <p className="hero-des">As a web developer in the learning stage, I'm diving into the foundations of front-end and back-end development, exploring HTML, CSS, JavaScript, TypeScript, Firebase and Next.Js .</p>
                 <button className="hero-btn">Hire Me</button>
                </div>


            </div>
        </div>
    )
}
export default Hero