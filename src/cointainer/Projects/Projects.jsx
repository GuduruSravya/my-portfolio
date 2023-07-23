import React,{useState,useEffect} from "react";
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion';
import { AppWrap,MotionWrap } from "../../wrapper";
import { urlFor,client } from "../../client";
import './projects.css';
const Projects = () =>{

    const tagNames = {"React":"React Project",
                      "Static":"Landing Page",
                      "Java":"Java-SpringBOOT",
                      "MERN" :"MERN",
                      "Python":"Python",
                      "AI/ML":"AI/ML",
                    "All":"All"}
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y:0,opacity:1});
    const [projects, setProjects] = useState([]);
    const [filterProject, setFilterProject] = useState([])

    useEffect(() => {
      const query= '*[_type == "projects"]';
      client.fetch(query)
      .then((data)=>{
        setProjects(data);
        setFilterProject(data);
      })
    
    }, [])
    
    const filterProjects= (item)=>{
        setActiveFilter(item);
        setAnimateCard([{y:100,opacity:0}]);

        setTimeout(()=>{
            setAnimateCard([{y:0,opacity:1}]);
            if(item === 'All')
            {
                setFilterProject(projects);
            }  
            else
            {
                setFilterProject(projects.filter((project)=>project.tags.includes(item)));
            }
        },500);
    }
    return(
        <>
        <h2 className="head-text">My <span>Portfolio</span></h2>
        <div className="app__work-filter">
            {['React','Static','MERN','Java','Python','AI/ML','All'].map((item,index)=>(
                <div 
                    key = {index}
                    onClick={() => filterProjects(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}
                >
                    {item}
                </div>
            ))}
            
        </div>
        <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className="app__work-portfolio"
        >
            
        { (filterProject.length!==0)?
           
            filterProject.map((project,index)=>(
                <div className="app__work-item app__flex" key={index}>
                    <div className="app__work-img app__flex">
                        <img src={urlFor(project.imgUrl)} alt={project.name}/>
                        <motion.div
                        whileHover={{opacity:[0,1]}}
                        transition={{duration:0.25,ease:'easeInOut',staggerChildren:0.5}}
                        className="app__work-hover app__flex"
                        >
                            <a href={project.projectLink} target="_blank" rel="noreferrer">
                                <motion.div
                                whileInView={{scale:[0,1]}}
                                 whileHover={{scale:[1,0.9]}}
                                 transition={{duration:0.25}}
                                 className="app__flex icon-div"
                                >
                                    <AiFillEye/>
                                </motion.div>
                            </a>
                            <a href={project.codeLink} target="_blank" rel="noreferrer">
                                <motion.div
                                whileInView={{scale:[0,1]}}
                                 whileHover={{scale:[1,0.9]}}
                                 transition={{duration:0.25}}
                                 className="app__flex icon-div"
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>

                        </motion.div>
                    </div>
                    <div className="app__work-content app__flex">
                        <h4 className="bold-text">{project.title}</h4>
                        <p className="p-text" style={{marginTop:10}}>{project.description}</p>
                        <div className="app__work-tag app__flex">
                            <p className="p-text">{tagNames[project.tags[0]]}</p>
                        </div>
                    </div>
                </div>
            )):<>
            
            <h1 className="head-text">Coming<span> Soon...</span></h1>
            
            </>
            
            
        }

        </motion.div>
        </>
    );
}

export default AppWrap(MotionWrap(Projects,'app__works'),'projects','app__primarybg');