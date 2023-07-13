import React,{useState,useEffect} from "react";
import {motion} from 'framer-motion';
import { AppWrap,MotionWrap } from "../../wrapper";
import { urlFor,client } from "../../client";
import {Tooltip as ReactTooltip} from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import './Skills.css';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query= '*[_type == "experiences"]';
    const skillsQuery= '*[_type == "skills"] | order(name asc)';

    client.fetch(query)
    .then((data)=>{
      
      setExperiences(data);
      
    })

    client.fetch(skillsQuery)
    .then((data)=>{
      setSkills(data);
      
    })
  
  }, [])
  return (
    <>
    <h2 className="head-text">Skills & Experience</h2>
    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill)=>(
        <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration:0.5}}
          className="app__skills-item app__flex"
          key={skill.name}
        >
          <div className="app__flex" style={{backgroundColor:skill.bgColor}} key={skill.name}>
            <img src={urlFor(skill.icon)} alt={skill.name}/>
          </div>
          <p className="p-text">{skill.name}</p>
        </motion.div>))
        }

      </motion.div>
      <motion.div className="app__skills-exp">
        {
          experiences.map((experience,index)=>(
            <motion.div
            className="app__skills-exp-item"
            key={experience.year}
            >
              <div className="app__skills-exp-year" key={index}>
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works" key={`${experience.year}-div`}>
                {
                  experience.projects.map((project)=>(
                    <>
                    <motion.div
                    whileInView={{opacity:[0,1]}}
                    transition={{duration:0.5}}
                    className="app__skills-exp-work app__flex"
                    data-tooltip-id={project.name}
                    data-tip
                    data-for={project.name}
                    key={project.name}
                    >
                        <h4 className="bold-text">{project.name}</h4>
                        <p className="p-text">{project.company}</p>
                    </motion.div>
                    <ReactTooltip
                    id={project.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                    >
                      {project.desc}
                    </ReactTooltip>
                    </>
                  ))
                }
              </motion.div>
            </motion.div>
          ))
        }

      </motion.div>

    </div>

    </>
  )
}

export default AppWrap(MotionWrap(Skills,'app__skills'),'skills','app__whitebg')
