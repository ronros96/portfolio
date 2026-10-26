import './App.css';
import Page from '@page/page';
import {motion} from 'motion/react';
import {scrollVar, Ease} from '@src/variants/animation';
import { useScroll } from "@src/store/store";

function App() {
  const scrolled = useScroll((state:any) => state.scrolled);
  return (
    <motion.div
      initial="start" 
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
