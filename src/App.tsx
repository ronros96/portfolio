import './App.css';
import Page from '@page/page';
import {motion} from 'motion/react';
import { useSwipeGesture } from '@hooks/useSwipeGesture';
import {scrollVar, Ease} from '@src/variants/animation';
import { useScroll } from "@src/store/store";

function App() {
  const scrolled = useScroll((state:any) => state.scrolled);
  const setScroll = useScroll((state:any) => state.setScroll);

  const swipeHandlers = useSwipeGesture((direction) => {
    if(direction === 'up'){
      setScroll(true);
    }
  });

  return (
    <motion.div
      {...swipeHandlers}
      animate={!scrolled || window.outerWidth > 1200 ? "start":"scrolled"}
    >
      <motion.main 
        className='flex items-center justify-center flex-col'
        variants={scrollVar}
        transition={Ease}
      >
        <Page/>
      </motion.main>
    </motion.div>

  )
}
export default App
