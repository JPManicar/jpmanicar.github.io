import {useRef} from "react";
import React from "react";
import Projects from "./Projects";

function Home() {

     const downloadResume = () => {
          const resumeUrl = 'https://drive.google.com/file/d/1VWCkxXAhkSgafbhJHEq4noHjLbQ4xFa0/view?usp=drive_link';
          window.open(resumeUrl, '_blank');
     };

     const redirectToExternalLink = (externalLink) => {
          window.open(externalLink, '_blank'); // Opens the link in a new tab
        };

     //sections
     const about = useRef(null);
     const projects = useRef(null);
     const contacts = useRef(null);
     
     
     // When the user clicks on the button, scroll to the top of the document
     // const backToTop = () => {
     //      window.scrollTo({top: 0, behavior: 'smooth'});
     // };
     
    // When the user scrolls down 20px from the top of the document, show the button
     
     // //goToSection Method
     // const scrollToSection = (targetRef) =>{
     // window.scrollTo({
     //      top: targetRef.current.offsetTop,
     //      behavior: 'smooth'
     // });
     // };
        return <div className = "container">
         
         <div className = "profile-card" id="hero-section">
               
               <div class = "profile-content">
                    <p>
                    {/* <div class = "nav-links" > 
                         <ul>
                              <li className='nav-links' > Home </li>
                              <li className='nav-links' onClick={() => scrollToSection(about)}>About Me</li>
                              <li className='nav-links' onClick={() => scrollToSection(projects)}>Projects</li>
                              <li className='nav-links' onClick={() => scrollToSection(contacts)}>Contacts</li>
                         </ul> 
                    </div> */}
                         <div className="greet">
                         <div className="line"></div>Hi!<div className="line"></div><br/></div>
                         <h2>I'm <em>Juan Paolo B. Manicar</em></h2><br/>
                         
                    </p>
                    <h4>A <em>Programmer</em>, <em>Graphics Designer</em>, and <em>Illustrator</em></h4>
                    <li className="cv-link button-fill" onClick={downloadResume}> Download CV</li>
                    
               </div>

               <div className = "profile-image">
                    <img id = 'profile-photo' src= {require("./images/profile-photo.jpg")} alt = "profile of the owner of the page" height="480" width= "auto"/>
               </div>
         </div>

     
         <div ref = {about} className = "about-section" id="about-section">
               <h1 className="section-title">About Me</h1>
               <div className = "introduction">
                    <h4>
                    I am a graduate of <em>Bachelor of Science in Computer Science </em>
                     from Polytechnic University of the Philippines.  
                    <br />
                    <br />
                    A <em>Proactive, Analytical,</em> and <em>Cooperative</em> contributor on collaborative group projects.
                    <br/>
                    I am very <em>Passionate about Art, Design,</em>  and <em>Programming. </em>
                    I have played significant role in <em> Illustration, User Interface/User Experience Design, and Front-end Development </em> while assuring project requirements and functionalities are met.
                    
                    <br />
                    I always look for ways to apply both my skills in Art and Programming in the projects I am involved with. 
                    <br />
                    </h4>

                    <img id = 'photo' src = {require("./images/art-photo.JPG")} alt="myself holding a pen tablet" />
               </div>
               
               <div className="skills-section">
               <h1 className="section-title"><img id="icon" src= {require("./images/coding-icon.png")} alt="pc-icon" />My Skills</h1>
                    <div className="techs">
                         <div className="tech-section">
                              <h2>Web Development</h2>
                              <span></span>
                              <ul> 
                                   <li><img className="icon" src= {require("./images/html-icon.png")} alt="html icon" />HTML</li>
                                   <li><img className="icon" src= {require("./images/css-icon.png")} alt="css icon"/>CSS</li>
                                   <li><img className="icon" src= {require("./images/js-icon.png")} alt="javascript icon"/>Javascript</li>
                              
                                   <li><img className="icon" src= {require("./images/php-icon.png")} alt="php icon"/>PHP</li>
                                   <li><img className="icon" src= {require("./images/mysql-icon.png")} alt="mysql icon"/>MySQL</li>
                                   <li><img className="icon" src= {require("./images/figma-icon.png")} alt="figma icon"/>Figma</li>
                              </ul>
                         </div>
                    
                         <div className="tech-section">
                              <h2>Software Development</h2>
                              <span></span>
                              <ul> 
                                   <li><img className="icon" src= {require("./images/java-icon.png")} alt="java icon"/>Java</li>
                                   <li><img className="icon" src= {require("./images/cs-icon.png")} alt="c# icon"/>C#</li>
                                   <li><img className="icon" src= {require("./images/unity-icon.png")} alt="unity icon"/>Unity</li>
                                   
                              </ul>
                         </div>
                    </div>
               </div>
          </div>

         <div ref = {projects} className="projects-section" id="projects-section">
              
               <Projects />
               {/* <div className="cards">
                    <div className="card-container">
                         <div className="project-name">Alexandria</div>
                         <div className="project-description">A Smart Book Genre Identifier</div>
                         <div className="button" onClick={() => redirectToExternalLink(project1)}>View on GitHub</div>
                    </div>

                    <div className="card-container">
                         <div className="project-name">SmartDuck </div>
                         <div className="project-description">Book Borrowing Library Management System</div>
                         <div className="button" onClick={() => redirectToExternalLink(project2)}>View on GitHub</div>
                    </div>

                    <div className="card-container">
                         <div className="project-name">EverEco</div>
                         <div className="project-description">A Procedural Multi-biome Landscape Generation Software with Climate Simulation</div>
                         <div className="button button-fill fill-left" onClick={() => redirectToExternalLink(project3)}>View on GitHub</div>
                         
                    </div>
               </div> */}
         </div>
         <div ref = {contacts} className="contacts-section" id="contacts-section">

               <div className="call-to-action">
                    <h2>Interested in hiring me?</h2>
                    <div className="socials">
                         <h3>Get in touch:</h3>
                         <h4>jpmanicar@gmail.com<br/>
                              09983843831</h4>
                         
                         <ul>
                              <li className="social-link"> <img src= {require("./images/twt-icon.png")} alt = "twt-icon" height="48" width= "auto" onClick={() => redirectToExternalLink('https://twitter.com/somejuan___')}/></li>
                              <li className="social-link"> <img src= {require("./images/ig-icon.png")} alt = "ig-icon" height="48" width= "auto" onClick={() => redirectToExternalLink('https://www.instagram.com/somejuan____/')}/></li>
                              <li className="social-link"> <img src= {require("./images/mail-icon.png")} alt = "mail" height="48" width= "auto" onClick={() => redirectToExternalLink('mailto:jpmanicar@gmail.com')}/></li>
                         </ul>  
                    </div>
               </div>


         </div>
     
         
          

    </div>
        
    
}

export default Home;