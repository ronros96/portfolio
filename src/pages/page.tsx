import PopUp from '@components/popup/popUp';
import './page.css';
import {motion} from 'motion/react';

import { usePopUp } from "@src/store/store";

const Page = () =>{
  const popUp =  usePopUp((state:any) => state.setPopHover);

  return(
    <section className='text-center'>
      <motion.h1 
        onMouseEnter={()=>{popUp(true)}}
        onMouseLeave={()=>{popUp(false)}}
        initial="init"
        whileHover="pop"
        animate="init" 
      >
        Hello There.
        <PopUp>General Kenobi</PopUp>
      </motion.h1>
      <p>Let's get ready, and may the force of supreme fathers of programming bestow upon you.</p>
    </section>
  )
}
export default Page;