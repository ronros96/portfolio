import Cards from '@components/cards/Cards';
import './layout.css';

const Right = () =>{
  return(
    <div className="container">
      <div className='works-caption'>
        <h3>View my works</h3>
        <p>Dive in and see my recent projects.</p>
      </div>
      <div className='content'>
        <Cards></Cards>
      </div>
    </div>
  )
}

export default Right