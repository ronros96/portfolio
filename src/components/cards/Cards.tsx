import "./cards.css";
import Card from "./Card";
import Data from "@src/data/projects.json";

const Cards = () =>{
  const data = Data;

  return(
    <div className="card-container">
      <div className="card-content">
        {
          data.map((data,i)=>{
            return (
              <Card key={i} props={data}/>
            )  
          })
        }
      </div>   
    </div>
  )
}

export default Cards;