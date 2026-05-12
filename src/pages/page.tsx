import PopUp from '@components/popup/popUp';
import './page.css';
import {motion} from 'motion/react';

import { usePopUp } from "@src/store/store";
import Left from '@layout/left';
import Right from '@src/layout/right';

const Page = () =>{
  // const popUp =  usePopUp((state:any) => state.setPopHover);
  // const isHover = usePopUp((state:any) => state.isHover);

  return(
    <>
      <title>Aaron Rosales</title>
      <section className='left-side'>
        <Left/>
      </section>
      <section className='right-side'>
        <Right/>
      </section>
    </>
    
  )
}
export default Page