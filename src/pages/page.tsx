import './page.css';
import clsx from 'clsx';

import { useActive } from "@src/store/store";
import { useFilter } from "@src/store/store";
import Left from '@layout/left';
import Right from '@src/layout/right';

const Page = () =>{
  const active =  useActive((state:any) => state.setActive);
  const isActive = useActive((state:any) => state.isHover);
  const setFocus = useFilter((state) => state.setFocus);

  return(
    <>
      <title>Aaron Rosales</title>
      <section 
        className={clsx('left-side',{'logo-mode':isActive})}
        onClick={()=>{active(false);setFocus(false)}}
      >
        <Left/>
      </section>
      <section 
        className={clsx('right-side',{'active':isActive})} 
        onClick={()=>{active(true)}}
      >
        <Right/>
      </section>
    </>
  )
}
export default Page