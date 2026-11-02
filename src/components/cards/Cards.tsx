import "./cards.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Card from "./Card";
import Data from "@src/data/projects.json";
import { useFilter, useScroll } from "@src/store/store";
import { useSwipeGesture } from '@hooks/useSwipeGesture';

const Cards = () =>{
  const setScroll =  useScroll((state:any) => state.setScroll);
  const  [scrollTop, setScrollTop] = useState(0);

  const selectedTags = useFilter(
      (state) => state.selectedTags
    );

  const filteredProjects =
  selectedTags.length === 0 ? Data
  : Data.filter((project) =>
    project.tags.some((tag) =>
      selectedTags.includes(tag)
    )
  );

  const swipeHandlers = useSwipeGesture((direction) => {
    console.log(direction, scrollTop);
    if(direction === 'down' && scrollTop <= 0){
      setScroll(false);
    }
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
    const scrollTop = container?.scrollTop || 0;
      setScrollTop(scrollTop);
    };

    container?.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [setScroll,containerRef]);

  return(
    <div className="card-container" ref={containerRef} {...swipeHandlers}>
      <motion.div layout className="card-content">
        {
          filteredProjects.map((data,i)=>{
            return (
              <Card key={i} props={data}/>
            )  
          })
        }
        <span className="last-content">End of content</span>
      </motion.div>   

    </div>
  )
}

export default Cards;