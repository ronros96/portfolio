import './layout.css';
import Cards from '@components/cards/Cards';
import Filter from '@components/filter/Filter';

const Right = () =>{

  return(
    <div className="container">
      <Filter/>
      <div className='works-caption'>
        <h3>View my works</h3>
        <p>Dive in and see my recent projects.</p>
      </div>
      <div className='content'>
        <Cards/>
      </div>
    </div>
  )
}

export default Right