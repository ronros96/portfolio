import './layout.css';

const year = () =>{
  const yr_start = new Date('02-01-2009');
  const yr_now = new Date();
  return yr_now.getFullYear() - yr_start.getFullYear();
}

const Left = () =>{
  return(
    <div className="container">
      <div className='content'>
        <h1>
          <span className='text-[var(--pri-purple)]'>Hello I'm</span><br/>AARON ROSALES
        </h1>
        <div>
          <p>Hi, I'm Aaron, a seasoned Web Developer and Creative Artist. I have a deep understanding of modern front-end technologies and a keen eye for design. Over {year()} years, I've worked with a variety of clients, creating visually appealing and user-friendly interfaces for their websites and applications.</p>
          <p><a href="./resume.pdf" target='_blank'><span>View my Resume</span></a></p>
        </div>
      </div>
    </div>
  )
}

export default Left