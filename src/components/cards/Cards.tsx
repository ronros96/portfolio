import "./cards.css";
import { motion } from "motion/react";
import Card from "./Card";
import Data from "@src/data/projects.json";
import { useFilter } from "@src/store/store";

const Cards = () =>{
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

  return(
    <div className="card-container">
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