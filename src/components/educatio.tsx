import "../style/education.css"
export default function Education(){
    return(
        <main className="edu-main">
           <div className="edu-text">
           <h1 className="education-h1" >EDUCATION</h1>
            <p>"My educational journey has provided me with a strong foundation in science, equipping me with analytical and problem-solving skills that I apply in my development projects. Here’s a summary of my academic background:"</p>
           </div>
           <div className="box-con-edu">
            <div>
                <h2 className="edu-h2">University of Karachi</h2>
                <span>Student</span>
            </div>
            <div className="computer">
                <h2>Master of Science (M.Sc.)</h2>
                <p>Specialization: [Specialization in Parasitology]

</p>
            </div>
           </div>

           <div className="box-con-edu">
            <div>
                <h2 className="edu-h2">Sir Syed College</h2>
                <span>Student</span>
            </div>
            <div className="computer">
                <h2>Intermediate in Science</h2>
                <p>Major Subjects: Physics, Chemistry, Biology</p>
            </div>
              </div>
            <div className="box-con-edu">
            <div>
                <h2 className="edu-h2">Helicon School</h2>
                <span>Student</span>
            </div>
            <div className="computer">
                <h2>Matriculation in Science</h2>
                <p>Major Subjects: Physics, Chemistry, Biology/Computer Science</p>
            </div>

    
           </div>
        </main>

    )
}