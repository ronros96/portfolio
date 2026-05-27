import './page.css';
import clsx from 'clsx';

import { useActive } from "@src/store/store";
import Left from '@layout/left';
import Right from '@src/layout/right';

const Page = () =>{
  const active =  useActive((state:any) => state.setActive);
  const isActive = useActive((state:any) => state.isHover);

  return(
    <>
      <title>Aaron Rosales</title>
      <section 
        className='left-side'
        onMouseOver={()=>{active(false)}}
      >
        <Left/>
      </section>
      <section 
        className={clsx('right-side',{'active':isActive})} 
        onMouseOver={()=>{active(true)}}
      >
        <Right/>
      </section>
    </>
    
  )
}
export default Page