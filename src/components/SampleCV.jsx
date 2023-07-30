import { v4 as uuidv4 } from "uuid";
import samplePicture from "../assets/Roy.png"

const CV = {
    color1: "rgb(91, 205, 188)",
    color2: "rgb(100, 227, 104)",
    fileName: "Roy.png",
    fileSrc: samplePicture,
    info:[
        {
            name: "First Name",
            text: "Roy"
        },
        {
            name: "Last Name",
            text: "Joseph"
        },
        {
            name: "Niche: Front-End Developer",
            text: "Front-End Developer"
        },
        {
            name: "Tell something about yourself to stand out from other candidates...",
            text: `From the moment I produced the very first "Hello World" in the console, I knew I was hooked into the world of software development. But software development is not "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality software.  It  became a full-fledged passion that only gets more exciting with time. Below you'll find projects I've completed that showcase my skills and general background in developing software.`
        },
        {
            name: "School",
            text: "Model Engineering College"
        },
        {
            name: "Degree",
            text: "Bachelor Degree: B.Tech (Honours) in ECE and The Odin Project: Full Stack Development with MERN stack"
        },
        {
            name: "Address",
            text: "India, kerala, cochin"
        },
        {
            name: "E-Mail",
            text: "roy.joseeee@gmail.com"
        },
        {
            name: "Phone number",
            text: "94470718490"
        },
        {
            name: "Link to portfolio",
            text: "https://github.com/Ro-yeee"
        }
    ],
    skills:[
        {
            id : uuidv4(),
            text: "React"
        },
        {
            id : uuidv4(),
            text: "HTML"
        },
        {
            id : uuidv4(),
            text: "CSS"
        },
        {
            id : uuidv4(),
            text: "JavaScript"
        },
        {
            id : uuidv4(),
            text: "Git"
        },
        {
            id : uuidv4(),
            text: "Figma"
        }
    ],
    experiences:[
        {
            id: uuidv4(),
            position: "Senior Software Engineer",
            company: "Hoyoverse",
            startDate: "2022",
            endDate: "Present",
            description: "I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. I gained experience with data technologies such as SQL Servers, NoSQL databases, full text search engines and caching. My daily work consisted mostly of maintaining full project life-cycle tasks including testing, debugging, technical analysis, design and coding."
        }, 
        {
            id: uuidv4(),
            position: "Software Engineer",
            company: "Genshin Impact",
            startDate: "2020",
            endDate: "2022",
            description: "I worked on the company's software development plans including all aspects of the SDLC in collaboration with peer programmers. My daily workflow here consisted of performing error analysis, assisting with IT issues and building/accessing databases including NoSQL and Node.js. I, together with my team of peers, developed 25+ Java Applications in the time of my employment."
        }   
     ]
   
}

export default CV