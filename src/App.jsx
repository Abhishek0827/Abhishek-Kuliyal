import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMobileButton,
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

let project_object = [
  {
    type: "MERN PLATFORM",
    name: "ConvergeX",
    description:
      "A full-featured ecosystem connecting learning, professional networking and career growth in one responsive product.",
    Tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Socket.io",
      " Razorpay",
    ],
    link: "https://github.com/Abhishek0827/ConvergeX",
  },
  {
    type: "WEATHER EXPERIENCE",
    name: "SykCast",
    description:
      "Real-time weather forecasting with live location insights, interactive maps and a frictionless city search experience.",
    Tech: ["React", "API integration", "Responsive UI"],
    link: "https://skycast-u3e7.onrender.com/",
  },
  {
    type: "COLLABORATION TOOL",
    name: "Real-Time Chat",
    description:
      "A clean room-based chat application with live message status updates and a React interface backed by Socket.IO.",
    Tech: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    link: "https://wa-clone-1-njv4.onrender.com/",
  },
  {
    type: "Interactive Web Game",
    name: "Mines ",
    description:
      "Developed an interactive Mines, inspired by the classic grid-based mine-finding game. Implemented dynamic grid generation, interactive tile selection, and game logic to create an engaging user experience with responsive UI.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Mines/",
  },
  {
    type: "Memory Game",
    name: "Simon Says ",
    description:
      "Developed an interactive Simon Says memory game. Implemented random color sequences, user input validation, level progression, and score tracking to create an engaging browser-based game.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Simon-says/",
  },
  {
    type: "Web Game",
    name: "Tic-Tac-Toe",
    description:
      "Developed an interactive Tic-Tac-Toe game. Implemented turn-based gameplay, win and draw detection, and game reset functionality with a simple, user-friendly interface.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Tic-Tac-Toe/",
  },
  {
    type: "Frontend Website",
    name: "Ed-Tech Company",
    description:
      "Designed and developed a responsive frontend website for an Ed-Tech company. Created a user-friendly interface with structured layouts, interactive elements, and modern styling to showcase educational services and offerings.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Ed-Tech/",
  },
  {
    type: "Frontend Website",
    name: "McDonald's India",
    description:
      "Developed a frontend replica of the McDonald's India website. Recreated the website's layout, visual elements, navigation, and interactive components while focusing on responsive design and user experience.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Mcdonald/",
  },
  {
    type: "Task Management App",
    name: "To-Do List",
    description:
      "Developed an interactive To-Do List application. Implemented features to add, delete, and manage daily tasks with a clean, user-friendly interface.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/TODO-List/",
  },
];

export default function App() {
  return (
    <>
      <header>
        <div id="left">
          <div>AK</div>
          <h1>
            abhishek <br />
            kuliyal
          </h1>
        </div>
        <div id="middle">
          <nav>
            <ul>
              <li>
                <a href="#third">work</a>
              </li>
              <li>
                <a href="#fourth">experience</a>
              </li>
              <li>
                <a href="#fifth">about</a>
              </li>
              <li>
                <a href="#sixth">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="right">
          <a href="mailto:abhishekkuliyal0827@gmail.com" aria-label="Send email">
            <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"30px"}} />
            {/* <i className="fa-regular fa-envelope"></i> */}
          </a>
        </div>
      </header>
      <main>
        <section id="first">
          <div className="left">
            <div className="one">
              <span></span>
              <h1>FULL-STACK WEB DEVELOPER</h1>
            </div>
            <div className="two">
              <h2>
                Building digital <br />
                <span>experiences</span>
                <br />
                that move.
              </h2>

              <p>
                I'm Abhishek — a developer who turns thoughtful design and
                <br />
                clean code into fast, useful, human-centered websites.
              </p>
            </div>
            <div className="three">
              <a className="Explore" href="#third">
                Explore my work <img src="/src/assets/arrow.png" alt="Arrow" />
              </a>
              <a
                className="Connect"
                href="mailto:abhishekkuliyal0827@gmail.com"
              >
                Let's connect
                <img
                  src="/src/assets/arrow-up.png"
                  alt="mailto:abhishekkuliyal0827@gmail.com"
                />
              </a>
            </div>
          </div>
          <div className="right">
            <div>
              <div>
                <h1>AK</h1>
              </div>

              <h6>BASED IN</h6>
              <h5>NEW DELHI, IN</h5>
            </div>
            <h6>
              Design-minded.
              <br />
              Detail-obsessed.
              <br />
              <span>Always learning.</span>
            </h6>
          </div>
        </section>
        <section id="second">
          <ul>
            <li>MongoDB</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>WordPress</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>FULL-STACK</li>
            <li>Framer</li>
            <li>Git/GitHub</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section id="third">
          <div className="upper">
            <h1>
              Things I've <br />
              <span>built.</span>
            </h1>

            <h6>
              A small selection of projects where
              <br />
              strategy, design and engineering
              <br />
              meet.
            </h6>
          </div>
          <div id="ProjectCards">
            {project_object.map((project, index) => (
              <div className="cards" key={project.name}>
                <img src="/src/assets/project-management.png" alt="" />

                <h3>{project.type}</h3>
                <h2>{project.name}</h2>
                <p>{project.description}</p>

                <ul>
                  {project.Tech.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
        <section id="fourth">
          <div className="upper">
            <div className="left">
              <h6>THE JOURNEY</h6>
              <h1>
                Experience <br />
                <span>in motion.</span>
              </h1>
            </div>
            <img className="right" src="assets/briefcase.png" alt="" />
          </div>
          <div className="lower">
            <div className="experience">
              <div>
                <h6>APR 2024 — SEP 2024</h6>
              </div>

              <div>
                <h2>Web Developer Intern</h2>
                <h6>Full-time</h6>
                <ul>
                  <li>
                    Maintained and improved company websites across hosted
                    environments.
                  </li>
                  <li>
                    Diagnosed corrupted files through cPanel File Manager and
                    restored site health.
                  </li>
                  <li>
                    Managed WHM hosting workflows and delivered responsive
                    WordPress pages
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div>
                <h6>DEC 2024</h6>
              </div>

              <div>
                <h2>Contract Web Developer</h2>
                <h6>Digital Marketing Agency</h6>
                <ul>
                  <li>
                    Built responsive PHP, JavaScript, HTML and CSS landing pages
                    for Google Ads campaigns.
                  </li>
                  <li>
                    Optimized pages for cross-device compatibility, speed and
                    conversion-focused UX.
                  </li>
                  <li>
                    Handled deployment and ongoing functionality for live
                    marketing campaigns.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div>
                <h6>AUG 2023 — OCT 2025</h6>
              </div>

              <div>
                <h2>Freelance Web Developer</h2>
                <h6>Independent practice</h6>
                <ul>
                  <li>
                    Designed and shipped corporate, service, portfolio and
                    e-commerce experiences.
                  </li>
                  <li>
                    Owned projects end-to-end — from wireframes and UI to
                    deployment and maintenance.
                  </li>
                  <li>
                    Integrated payments, authentication and WooCommerce
                    solutions for growing businesses.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="fifth">
          <div className="left">
            <h6>A LITTLE ABOUT ME</h6>
            <h1>
              More than just
              <br />
              <span>a developer.</span>
            </h1>

            <p>
              I care about the details that make a product feel effortless. From
              the first wireframe to the final deployment, I bring curiosity,
              ownership and a practical problem-solving mindset to every build.
            </p>
          </div>
          <div className="right">
            <h6>
              MY TOOLKIT <img src="assets/1.png" alt="" />
            </h6>
            <ul>
              <li>
                <span>Frontend</span> HTML · CSS · Bootstrap · React.js
              </li>
              <li>
                <span>Backend</span> Node.js · Express.js · EJS
              </li>
              <li>
                <span>Database</span> SQL · MongoDB · PostgreSQL
              </li>
              <li>
                <span>Platforms </span>WordPress · Framer · WooCommerce
              </li>
              <li>
                <span>Languages </span> C · C++ · Python · Java · JavaScript
              </li>
            </ul>
            <div>
              <span>COMMUNICATION </span>
              <span>ADAPTABILITY </span>
              <span>CRITICAL THINKING</span>
            </div>
          </div>
        </section>
        <section id="sixth">
          <div className="container">
            <div className="left">
              <h6>HAVE A PROJECT IN MIND?</h6>
              <h2>
                Let's make
                <br />
                <span> something great.</span>
              </h2>

              <a href="mailto:abhishekkuliyal0827@gmail.com">
                abhishekkuliyal0827@gmail.com{" "}
                <img src="/src/assets/arrow.png" alt="Arrow" />
              </a>
            </div>
            <div className="right">
              <h6>
                <a href="tel:+91 89204 52793">
                  <FontAwesomeIcon icon={faMobileButton} className="external-icon"/>
                  +91 89204 52793
                </a>
              </h6>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhishekkuliyal0827/"
                    target="_blank"
                  >
                    <span>in</span> linkedIn
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="external-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Abhishek0827"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>gh</span> GitHub
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="external-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h1>
          © <span id="year">{new Date().getFullYear()}</span> ABHISHEK KULIYAL
        </h1>
      </footer>
    </>
  );
}
