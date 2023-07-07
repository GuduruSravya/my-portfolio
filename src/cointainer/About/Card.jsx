import React,{useState} from 'react';
import {motion} from 'framer-motion';
import Overlay from './Overlay';
import Modal from './Modal';

const Card = ({data}) => {
    const [open,setOpen]=useState(false);

    const openModal=()=>{
        setOpen(true);
    }
    const closeModel=()=>{
        setOpen(false);
    }
  return (
    <div>
    <motion.div
    whileInView={{opacity:1}}
    whileHover={{scale:1.1}}
    transition={{duration:0.5,type:'tween'}}
    className='app__profile-item'
    key={data.title}
    onClick={openModal}
    >
      <img src={data.imgUrl}/>
      <h2 className='bold-text' style={{marginTop:20}}>{data.title}</h2>
    </motion.div>
    {open && <Overlay close={closeModel}>
                        <Modal data={data} close={closeModel}/>
                        </Overlay>
    }
    </div>
  )
}

export default Card