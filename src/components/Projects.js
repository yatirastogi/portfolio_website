import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import s1 from "../assets/img/s1.png";
import s2 from "../assets/img/s2.png";
import c1 from "../assets/img/c1.png";
import c2 from "../assets/img/c2.jpg";
import c3 from "../assets/img/c3.png";
import c4 from "../assets/img/c4.png";
import c5 from "../assets/img/c5.png";
import c7 from "../assets/img/c7.png";
import c8 from "../assets/img/c8.png";
import c6 from "../assets/img/c6.png";
import i1 from "../assets/img/i1.jpg";
import i2 from "../assets/img/i2.png";
import i3 from "../assets/img/i3.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";
import p7 from "../assets/img/p7.png";
import p6 from "../assets/img/p6.png";
import p8 from "../assets/img/p8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      description: "Social Hub, A clone of Instagram and facebook in which a person can follow, unfollow another user, like unlike or upload a post and upload a cover and profile picture.",
      imgUrl: s1,
    },
    {
      description: "Online Library, A MERN stack online book library where you can upload books, view books and add books to cart for the purpose of renting.",
      imgUrl: s2,
    },
    {
      description: "Weather App, a basic React based Weather app which shows temperature of the place you search for",
      imgUrl: p6,
    },
    {
      description: "Schoolsable, made while interning for The Holistic Group",
      imgUrl: p7,
    },
    {
      description: "Covid Tracker, shows the total cases, deaths and recovered cases of Corona Virus and graphically represents the total cases over a period of time ",
      imgUrl: p8,
    },
    {
      description: "Portfolio Website, to showcase my work, skills and my qualifications",
      imgUrl: p5,
    },
    {
      description: "Accident Detection using 8051 Microcontroller",
      imgUrl: p3,
    },
    {
      description: "IOT BASED HEART RATE AND TEMPERATUREMONITORING SYSTEM",
      imgUrl: p4,
    },
    
  ];
  const internships = [
    {
      
      description: "The Holistic Group , Web Developer Intern",
      imgUrl: i1,
    },
    {
      description: "Protal , Web Developer Intern",
      imgUrl: i2,
    },
    {
      description: "SanFoundry , Content Writer",
      imgUrl: i3,
    },
     
  ];
  const certifications = [
    {
      
      description: "Best hack award in Girls' Category and bagged 5th position overall",
      imgUrl: c7,
    },
    {
      
      description: "Best hardware hack award",
      imgUrl: c8,
    },
    {
      
      description: "Crash Course on Python",
      imgUrl: c6,
    },
    {
      description: "Using Python to Interact with the Operating System",
      imgUrl: c3,
    },
    {
      description: "Introduction to Git and GitHub",
      imgUrl: c5,
    },
    {
      
      description: "Troubleshooting and Debugging Techniques",
      imgUrl: c1,
    },
    {
      description: "Linear Circuits 2: AC Analysis",
      imgUrl: c4,
    },
    {
      description: "Data Structure & Algorithm using C++: Zero to Mastery",
      imgUrl: c2,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work Experience</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="second">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Some personal projects that I have designed and developed so far</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"><p>Companies that I have worked with in order to achieve work experience</p>
                    <Row>
                        {
                          internships.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"><p>I have achieved the following certificates which includes Google's professional certifications and have participated and won in two of the most famous hackathons</p>
                    <Row>
                        {
                          certifications.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
