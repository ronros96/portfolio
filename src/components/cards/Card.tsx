import './cards.css'

const Card = (props:any) =>{
  const proj = [];
  proj.push(props);

  const type = proj[0].props.type;
  const img = proj[0].props.img;
  const name = proj[0].props.name;
  const tags = proj[0].props.tags;
  const desc = proj[0].props.desc;
  const link = proj[0].props.link;

  return(
    <div className='card'>
      <div className='img-container'>
        <a href={link} rel='noopener' target='_blank'>
          <img src={`./project_images/${img}`} alt="Sample Image" />
        </a>
      </div>
      <div className='desc-container'>
        <a href={link} rel="noopener" target='_blank'>
          <h4>{name}</h4>
        </a>
        <div className='tags'>
          {
            tags.map((tag:string,i:number)=>{
              return <span key={i}>{tag}</span>
            })
          }
        </div>
        <p>{desc}</p>
        {
          type === 'graphic' ? 
          <a href={link} className='cta' rel='noopener' target='_blank'>
            <span>View Project</span>
          </a> : <a href={link} className='cta' rel='noopener' target='_blank'>
            <span>Visit Website</span>
          </a>
        }
      </div>
    </div>
  )
}

export default Card;