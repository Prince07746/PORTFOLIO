


    const Navigation = () => {
        const [menuActive, setMenuActive] = React.useState(false);
        const [name,setName] = React.useState("Prince Matongo");
        const [darkMode,setDarkMode] = React.useState(false);
      
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
        imgSrc: "nodejs.png",
        title: "Personal Portfolio",
        description: "A sleek and modern portfolio website showcasing my skills, projects, and achievements as a developer.",
        logos: ["html5.png", "css3.png", "javascript.png"],
      },
      {
        id: 2,
        imgSrc: "api.png",
        title: "E-commerce Platform",
        description: "An online shopping platform with features like a dynamic cart, user authentication, and payment integration.",
        logos: ["react.png", "nodejs.png", "stripe.png"],
      },
      {
        id: 3,
        imgSrc: "bootstrap.png",
        title: "Weather App",
        description: "A weather forecasting app providing real-time updates and detailed weather conditions using OpenWeather API.",
        logos: ["javascript.png", "api.png", "bootstrap.png"],
      },
      {
        id: 4,
        imgSrc: "mongodb.png",
        title: "Real-Time Chat Application",
        description: "A real-time messaging app with group and private chat functionality, built using WebSocket technology.",
        logos: ["socketio.png", "nodejs.png", "express.png"],
      },
      {
        id: 5,
        imgSrc: "mysql.png",
        title: "Expense Tracker",
        description: "A budget management tool that helps users track income and expenses with interactive charts and reports.",
        logos: ["react.png", "chartjs.png", "firebase.png"],
      },
      {
        id: 6,
        imgSrc: "firebase.png",
        title: "Task Management System",
        description: "A productivity app to create, assign, and track tasks for individuals or teams with progress monitoring.",
        logos: ["angular.png", "nodejs.png", "mysql.png"],
      },
      {
        id: 7,
        imgSrc: "openai.png",
        title: "AI-Powered Image Generator",
        description: "An AI tool for generating images based on text input, utilizing advanced machine learning models.",
        logos: ["python.png", "tensorflow.png", "openai.png"],
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
      <div className="carousel" onMouseEnter={stopcarrousel} // Stop rotation on hover
      onMouseLeave={lunchcarrousel}>
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
          year: "2010 - 2012",
          title: "High School Diploma",
          description: "Graduated with distinction, focusing on STEM courses such as Mathematics, Physics, and Computer Science.",
      },
      {
          year: "2012 - 2016",
          title: "Bachelor's Degree in Computer Science",
          description: "Studied core topics like Data Structures, Algorithms, and Software Engineering. Worked on multiple team projects, including a web-based e-commerce platform.",
      },
      {
          year: "2017 - 2019",
          title: "Master's Degree in Software Engineering",
          description: "Specialized in full-stack development, cloud computing, and machine learning. Developed a thesis on distributed systems for scalable web applications.",
      },
  ];

  const experience = [
      {
          year: "2019 - 2021",
          title: "UI/UX Designer at Creative Studios",
          description: "Designed intuitive and visually appealing interfaces for web and mobile apps. Collaborated with developers to enhance user experiences and optimize workflows.",
      },
      {
          year: "2021 - 2023",
          title: "Full-Stack Developer at Tech Solutions Inc.",
          description: "Built robust web applications using React, Node.js, and MongoDB. Implemented RESTful APIs and worked on optimizing application performance.",
      },
      {
          year: "2023 - Now",
          title: "Frontend Developer at Innovate Labs",
          description: "Developing modern, responsive web applications using React and TypeScript. Focused on delivering seamless user experiences and maintaining high code quality standards.",
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
    const dataInfo =
      "Full-Stack Developer with a passion for crafting innovative, data-driven solutions. Proficient in Java and JavaScript, I excel at building robust, scalable applications from conception to deployment. With expertise in frameworks like Node.js, Express.js, and React, I develop dynamic user interfaces and efficient backend systems. Skilled in database management with MySQL and version control using GitHub, I have a strong foundation in HTML, CSS, and Bootstrap, enabling me to deliver visually appealing and responsive designs. I am committed to creating high-quality software products, thrive in collaborative environments, and am eager to contribute to impactful projects.";
  
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
          </div>
        );
        }
    }



      // Render the React component
      ReactDOM.render(<App />, document.getElementById('root'));