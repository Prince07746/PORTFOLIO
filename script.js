


  //   const Navigation = () => {
  //       const [menuActive, setMenuActive] = React.useState(false);
  //       const [name,setName] = React.useState("Prince Matongo");
  //       const [darkMode,setDarkMode] = React.useState(false);
      
  //       const toggleMenu = () => {
  //         setMenuActive(!menuActive);
  //       };

  //       const toggleTheme = () => {
  //         setDarkMode(!darkMode);
  //         if (!darkMode) {
  //           // Set styles for light mode
  //           document.body.style.color = "black";
  //           document.body.style.backgroundColor = "white";
  //         } else {
  //           // Set styles for dark mode
  //           document.body.style.color = "white";
  //           document.body.style.backgroundColor = "black";
  //         }
  //         document.body.classList.toggle("dark-mode"); // Add/remove class for dark mode
  //       };
        
  //       return (
  //         <nav className="navbar">
  //           <div className="logo">
  //             <a href="#home">{name}</a>
  //           </div>
  //           <ul className={`nav-links ${menuActive ? '' : 'active'}`}>
  //             <li><a href="#about">About Me</a></li>
  //             <li><a href="#projects">Projects</a></li>
  //             <li><a href="#skills">Skills</a></li>
  //             <li><a href="#experience">Experience</a></li>
  //             <li><a href="#contact">Contact</a></li>
  //           </ul>
  //           <div
  //             className={`hamburger-menu ${menuActive ? 'active' : ''}`}
  //             onClick={toggleMenu}
  //           >
  //             <span className="bar"></span>
  //             <span className="bar"></span>
  //             <span className="bar"></span>
  //           </div>
  //            {/* Light/Dark Mode Toggle Button */}
             
  //         <button className="theme-toggle" onClick={toggleTheme}>
  //         {darkMode ? <span>&#9728;</span> : <span>&#9790;</span>} {/* ☀ (Light) and ☾ (Dark) */}
  //         </button>
          
  //         </nav>
  //       );
  // };

const Navigation = () => {
    const [menuActive, setMenuActive] = React.useState(false);
    const [name, setName] = React.useState("Prince Matongo");
    const [darkMode, setDarkMode] = React.useState(false);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };

    const toggleTheme = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        // Set styles for light mode
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
      } else {
        // Set styles for dark mode
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
      }
      document.body.classList.toggle("dark-mode"); // Add/remove class for dark mode
    };
    
    return (
      <nav className="navbar">
        <div className="logo">
          <a href="#home">{name}</a>
        </div>
        <ul className={`nav-links ${menuActive ? '' : 'active'}`}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div
          className={`hamburger-menu ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
         {/* Light/Dark Mode Toggle Button */}
         
      <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? <span>&#9728;</span> : <span>&#9790;</span>} {/* ☀ (Light) and ☾ (Dark) */}
      </button>
      
      </nav>
    );
};


  const Projector = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const intervalCurr = React.useRef(null);
  
    const cards = [
      {
        id: 1,
        imgSrc: "react.png",
        title: "Personal Portfolio",
        description:
          "A sleek and modern portfolio website showcasing my skills, projects, and achievements.",
        logos: ["html5.png", "css3.png", "javascript.png", "react.png"],
      },
      {
        id: 2,
        imgSrc: "nodejs.png",
        title: "Forex Trading Platform",
        description:
          "A comprehensive forex trading site with user registration, admin dashboards, and payment integration.",
        logos: ["react.png", "nodejs.png", "mysql.png"],
      },
      {
        id: 3,
        imgSrc: "nodejs.png",
        title: "E-commerce Platform",
        description:
          "Online shopping platform featuring cart management, user authentication, and payment APIs.",
        logos: [ "html5.png", "css3.png", "javascript.png", "stripe.png", "bootstrap.png"],
      }
    ];

    // Rotate to the next card
    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    // Rotate to the previous card
    const prevCard = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
      );
    };

    const stopcarrousel = () =>{
         clearInterval(intervalCurr.current);
    }
    const lunchcarrousel = () =>{
     intervalCurr.current = setInterval(nextCard, 3000);
    }
    
    React.useEffect(() => {
      // Auto-rotate every 3 seconds
      lunchcarrousel();
      return () => clearInterval(intervalCurr.current);
    }, []);

    return (
      <div className="carousel" onMouseEnter={stopcarrousel} onMouseLeave={lunchcarrousel}>
        {cards.map((card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length;
  
          return (
            <a href=""
              key={card.id}
              className={`card ${offset === 0 ? "active" : ""}`}
              style={{
                transform: `translateX(${300 * (offset - 1)}px) scale(${
                  offset === 1 ? 1.2 : 0.8
                })`,
                zIndex: offset === 1 ? 3 : 1,
                opacity: offset === 1 ? 1 : 0.2,
              }}
            >
              <img src={`./images/${card.imgSrc}`} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="logos">
                {card.logos.map((logo, idx) => (
                  <img key={idx} src={`./images/${logo}`} alt={`Logo ${idx + 1}`} />
                ))}
              </div>
            </a>
          );
        })}
        <button onClick={prevCard} className="prev">
          &#8592;
        </button>
        <button onClick={nextCard} className="next">
          &#8594;
        </button>
      </div>
    );
};


  const Experience = () => {

    const education = [
      {
        year: "10 / 2024",
        title: "Java Programming - Advanced Concepts",
        institution: "Develhope Training Academy",
        description: "",
      },
      {
        year: "2023 - 2023",
        title: "Diploma of Education, CCNAv7 Network",
        institution: "Cisco Networking Academy",
        description: "",
      },
      {
        year: "2022 - 2024",
        title: "Computer Science",
        institution: "YMCA Comprehensive Institute",
        description: "",
      },
      {
        year: "11 / 2024",
        title: "Italian Language Certification",
        institution: "Diaconia Valdese",
        description: "",
      },
    ];
    
    const experience = [
      {
        year: "Ju24 - Dec24",
        title: "Web Developer",
        company: "Mifos Initiative",
        location: "Kampala, Uganda",
        description: `
          Volunteer - Mifos, Kampala, Uganda
          - Contributed and gained hands-on experience in learning how Java works.
          - Collaborated with a team of volunteers using GitHub and Zoom to foster a positive and collaborative environment.
        `,
      },
      {
        year: "Dec23 - Feb24",
        title: "Computer Technician Intern",
        company: "WEBSTAR ug",
        location: "Kampala, Central Region, Uganda",
        description: `
          Technical Support Specialist - Hardware and Software Maintenance
          Responsibilities:
          - Component Replacement
          - System Installation and Maintenance
        `,
      },
      {
        year: "Ja23 - Feb24",
        title: "Back-end Developer & Data Analyst Freelancer",
        company: "Union Funded Capital (UFC)",
        location: "Kampala, Uganda",
        description: `
          WEB DEVELOPER
          Technologies Used:
          - Back-end: Node.js, Python, JavaScript, Express, MySQL, SQL
          - Front-end: HTML, CSS, JavaScript, React, Bootstrap
          - Hosting: Web hosting, SSL cert, payment API
          Overview:
          - Developed a comprehensive forex trading platform with a focus on user registration, account sales, administrative control, and email integration.
        `,
      },
    ];
    
    
  
    return (
      <center className="experience-container">
        {/* Education Section */}
        <div className="section">
          <h2>Education</h2>
          <div className="cards-e">
            {education.map((item, index) => (
              <div className="card-e" key={index}>
                <div className="year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.institution}</p>

                <div id={index != education.length -1 ?"ligne":""}>
                </div>

              </div>
              
            ))}
          </div>
        </div>
  
        {/* Experience Section */}
        <div className="section">
          <h2>Experience</h2>
          <div className="cards-e">
            {experience.map((item, index) => (
              <div className="card-e" key={index}>
                <div className="year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div id={index != education.length -1 ?"ligne":""}>
                </div>

              </div>
            ))}
          </div>
        </div>
      </center>
    );
  };
  


  const Introduction = (props) => {
    const dataInfo = `I am Prince Matongo, a full-stack developer with expertise in Java,
        JavaScript, Node.js, and MySQL. Over the past two years, I have
        delivered robust and scalable applications, specializing in both
        front-end and back-end development. Recently, I shifted focus to Java
        development, implementing OOP principles and efficient database
        solutions.
        My experiences include developing trading platforms, e-commerce
        systems, and volunteering with collaborative teams using tools like
        GitHub and Zoom. I am passionate about learning, problem-solving, and
        crafting innovative solutions.
        `;
  
    React.useEffect(() => {
      const textElement = document.getElementById("info");
      const cursorElement = document.getElementById("cursor");
      let index = 0;
      
      // Function to append one character at a time
      const typeText = () => {
         
        if (index < dataInfo.length) {
          textElement.innerHTML += dataInfo[index];
          index++;
        } else {
          clearInterval(interval); // Stop the interval once text is complete
          cursorElement.style.display = "none"; // Hide cursor after typing ends
        }

      };

       // Blink effect for the cursor
    const blinkCursor = () => {
      if (cursorElement.style.opacity === "1") {
        cursorElement.style.opacity = "0";
      } else {
        cursorElement.style.opacity = "1";
      }
    };
  
      const interval = setInterval(typeText, 10); // Adjust speed with the interval time
      const cursorBlinkInterval = setInterval(blinkCursor, 200); // Blink speed
  
      // Cleanup function to avoid memory leaks
      return () => {
        clearInterval(interval);
        clearInterval(cursorBlinkInterval);
      }
    }, []);
  
    return (
      <div id="resume">
        <div id="image">
          <img src="./images/profile.png" alt="Profile" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <p id="role">{props.title}</p>
        </div>
        <p>
        <span id="info"></span>
        <span id="cursor">
          |
        </span>
        </p>
      </div>
    );
  };
  

  const Company = () =>{
    return(
     <div className="companies-logo">
       <div id="companies-g">
       <img src={"./images/ufc1.png"} />
       <img src={"./images/atom.png"} />
       <img src={"./images/dgi.png"} />
       </div>
     </div>
    );
  }

  const Skills = () =>{
    const language = ["French","English","Italian","Swahili"];
    const skills = ["Java","Spring FrameWork","React","Angular","Node.js","Javascript",
      "HTML","CSS","Boostrap","MYSQL","SQL"];
    const flags = ["congo.png","france.png","england.png","italy.png","tanzania.png"];
    const skillLogo = ["html5.png", "css3.png","spring.png","java.png",
      "nodejs.png","express.png","javascript.png","react.png",
      "angular.png","bootstrap.png","mysql.png","python.png"
    ];
    
    
    return(
      <div className="skills">
        <h3>SKILLS & Languages</h3>
      <div id="skill-section">
         <div id="soft-skills">
          <h4>Skills</h4>
          <ul id="logo-skills">
            {skillLogo.map(
              (skill, index) => {
                return <li key={index}><img src={`./images/${skill}`} /></li>
              }
            )}
          </ul>
            <ul id="skills-title">
             {skills.map(
                (skill,index) =>{
                 return <li key={index}>{skill}</li>
                }
              )
              }
             
            </ul>
         </div>
         <div id="language">
          <h4>Languages</h4>
          <ul id="logo-language">
            {flags.map(
              (skill, index) => {
                return <li key={index}><img src={`./images/${skill}`} /></li>
              }
            )}
          </ul>
           <ul id="languages-titles">
            {language.map(
              (val,index)=>{
                return <li key={index}>{val}</li>
              }
            )}
           </ul>
         </div>
       </div>
      </div>

    );
  }

  const Contact = () => {
    return (
      <center style={{display:'flex',flexDirection:'column',width:'100%',padding:'30px'}}>
        <h2>Contact Me</h2>
      <section id="contact" style={{display:'flex',flexWrap:'wrap',}}>
        
        <p style={{margin:'5px'}}>Email: <a href="mailto:davidkitoko13@gmail.com">davidkitoko13@gmail.com</a></p>
        <p style={{margin:'5px'}}>Phone: <a href="tel:+256774630649">+256774630649</a></p>
        <p style={{margin:'5px'}}>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/matongo-prince-03069b192/"
            target="_blank"
          >
            matongo-prince
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Prince07746" target="_blank">
            Prince07746
          </a>
        </p>
      </section>

      </center>
    );
  };
  


    // React component
    class App extends React.Component{
        
        constructor(props){
            super(props);
            this.state = {
                name: 'Prince Matongo',
                title: 'Software Engineer',
                age: ''
            }
        }
      
        render(){
        return(
          <div> 
            <Navigation />
            <Projector />
            <Introduction name={this.state.name} title={this.state.title} />
            <Company />
            <Experience />
            <Skills />
            <Contact />
          </div>
        );
        }
    }



      // Render the React component
      ReactDOM.render(<App />, document.getElementById('root'));
