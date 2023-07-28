import { v4 as uuidv4 } from "uuid";
import samplePicture from "./example.png"

const CV = {
    fileName: "example_pic.png",
    fileSrc: samplePicture,
    info:[
        {
            name: "First Name",
            text: "Mighty"
        },
        {
            name: "Last Name",
            text: "Thor"
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
            text: "Asgard national university"
        },
        {
            name: "Degree",
            text: `Bachelor Degree: Nordic Philology and Translation Studies:
                   Scandinavian and Second Foreign Language`
        },
        {
            name: "Address",
            text: "Universe, Asgard"
        },
        {
            name: "E-Mail",
            text: "thor.odinson@gmail.com"
        },
        {
            name: "Phone number",
            text: "15982732201"
        },
        {
            name: "Link to portfolio",
            text: "https://github.com/Ro-yeee"
        }
    ],
    skills:[
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
            text: "React"
        },
        {
            id : uuidv4(),
            text: "Figma"
        },
        {
            id : uuidv4(),
            text: "Git"
        }
    ]
}

export default CV