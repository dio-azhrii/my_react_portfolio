import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Hello my name is Dio Alfikih Azhari. I'm 19 years old. I'm student at SMAN 8 BandarLampung, Lampung.
          I have experience in UI/UX Creator Bot Whatsapp and mobile programming.
          I work as a UI / UX Programming in one of the start-up which is said to be a beginner, DevJect.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
