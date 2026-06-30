import './layout.css';
import { TbArrowMoveDown } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { usePopUp } from "@src/store/store";
import { useScroll } from "@src/store/store";

import {motion} from 'motion/react';
import PopUp from '@components/popup/popUp';

const year = () =>{
  const yr_start = new Date('02-01-2009');
  const yr_now = new Date();
  return yr_now.getFullYear() - yr_start.getFullYear();
}

const Left = () =>{
  const setPopHover =  usePopUp((state:any) => state.setPopHover);
  const hoverStates = usePopUp((state:any) => state.hoverStates);
  const setScroll =  useScroll((state:any) => state.setScroll);

  return(
    <div className="container">
      <div className='content'>
        <h1 className='header-2'>
          <span className='text-[var(--pri-purple)]'>Hello I'm</span><br/>AARON ROSALES
        </h1>
        <div className='sub-header'>
          <img src="./logo.svg" alt="Aaron Rosales"/>
        </div>
        <div>
          <p>A seasoned Front-end Developer and Creative Artist with {year()} years of experience across various industries, including Digital Marketing, Product Design, Magazine Layout Design, and E-commerce.</p>
          <p><a className='cta' href="./resume-2026.pdf" target='_blank'><span>View my Resume</span></a></p>
        </div>
        <div className='contact-me'>
          <motion.a 
            href="mailto:p.aaronrosales@gmail.com" 
            target='_blank'
            rel='noopener'
            onMouseEnter={() => setPopHover('email', true)}
            onMouseLeave={() => setPopHover('email', false)}
            initial="init"
            animate={hoverStates['email'] ? 'pop':'init'} 
          >
            <SiMinutemailer size={'1.5rem'}/>
            <PopUp>Send me an Email</PopUp>
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/aaronros" 
            target='_blank' 
            rel='noopener'
            onMouseEnter={() => setPopHover('li', true)}
            onMouseLeave={() => setPopHover('li', false)}
            initial="init"
            animate={hoverStates['li'] ? 'pop':'init'} 
          >
            <FaLinkedinIn size={'1.5rem'}/>
            <PopUp>View my LinkedIn</PopUp>
          </motion.a>
          <motion.a 
            href="https://github.com/ronros96" 
            target='_blank' 
            rel='noopener'
            onMouseEnter={() => setPopHover('git', true)}
            onMouseLeave={() => setPopHover('git', false)}
            initial="init"
            animate={hoverStates['git'] ? 'pop':'init'}
          >
            <FaGithub size={'1.5rem'}/>
            <PopUp>View my GitHub</PopUp>
          </motion.a>
        </div>
      </div>
      <div className='works-btn' onClick={()=>setScroll(true)}>View my works <TbArrowMoveDown size={'2rem'} color={'var(--pri-blue)'}/></div>
    </div>
  )
}

export default Left;