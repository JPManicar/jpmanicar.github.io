import React from "react";
import './styles/project-styles.css';

function Projects () {
    const project1 = "https://github.com/JPManicar/Alexandria";
    const project2 = "https://github.com/JPManicar/Smart-Duck-Library-Borrowing-System";
    const project3 = "https://github.com/JPManicar/EverEco3d";

    const redirectToExternalLink = (externalLink) => {
        window.open(externalLink, '_blank'); // Opens the link in a new tab
      };


    return <div className="project-container">
        <h1 className="section-title">Featured Projects</h1>
        <div className="project-1 project">
            
            <div className="project-description">
                <div className="project-name">Alexandria</div>
                <p>A Web-based Application for Smart Book Classification based on Book Summaries
                <br/>
                <ul>Roles:

                <li>UI/UX Design of the website using Figma</li>
                <li>Implemented the UI Design in the frontend using HTML, CSS, and Bootstrap.</li>
                <li>Collaborated with a backend developer to implement the use of Flask.</li></ul></p>
                <div className="button button-fill fill-left" onClick={() => redirectToExternalLink(project1)}>View on GitHub</div>
            </div>

            <div className="samples">
                <img className = 'vertical' src= {require("./images/alexandria-0.png")} alt = "sample" height="500px" width= "auto" max-width = "500px"/>
                <img className = 'horizontal' src= {require("./images/alexandria-1.png")} alt = "sample" height="250px" width= "auto" max-width = "500px"/>
                <img className = 'horizontal' src= {require("./images/alexandria-2.png")} alt = "sample" height="250px" width= "auto" max-width = "500px"/>
            </div>
            
        </div>

        <div className="project-2 project">
                
        <div className="project-description">
                <div className="project-name">SmartDuck</div>
                <p> A Smart Library Book Borrowing Management System
                <br/>
                <ul>Roles:

                <li>UI/UX Design of the website using Figma</li>
                <li>Implemented the UI Design in the frontend using HTML, CSS, and Bootstrap.</li>
                <li>Collaborated with a backend developer to implement the use of Flask.</li></ul>
                </p>
                <div className="button button-fill fill-left" onClick={() => redirectToExternalLink(project2)}>View on GitHub</div>
            </div>


                <div className="samples">
                <img className = 'vertical' src= {require("./images/smartDuck-0.png")} alt = "sample" height="400px" width= "auto" />
                <img className = 'horizontal' src= {require("./images/smartDuck-1.png")} alt = "sample" height="auto" width= "350px"/>
                <img className= "horizontal" src= {require("./images/smartDuck-2.png")} alt = "sample" height="auto" width= "350px" />
            </div>
        </div>

        <div className="project-3 project">

        <div className="project-description">
                <div className="project-name">Alexandria</div>
                <p>A Web-based Application for Smart Book Classification based on Book Summaries
                <br/>
                <ul>Roles:

                <li>UI/UX Design of the website using Figma</li>
                <li>Implemented the UI Design in the frontend using HTML, CSS, and Bootstrap.</li>
                <li>Collaborated with a backend developer to implement the use of Flask.</li></ul></p>
                <div className="button button-fill fill-left" onClick={() => redirectToExternalLink(project3)}>View on GitHub</div>
            </div>

                <div className="samples">
                <img className = 'vertical' src= {require("./images/sample-0-0.png")} alt = "sample" height="500px" width= "auto" max-width = "500px"/>
                <img className = 'horizontal' src= {require("./images/sample-1-1.png")} alt = "sample" height="250px" width= "auto" max-width = "500px"/>
                <img className = 'horizontal' src= {require("./images/sample-1-2.png")} alt = "sample" height="250px" width= "auto" max-width = "500px"/>
                </div>
                
                
        </div>
        
        
    </div>;
} export default Projects;

