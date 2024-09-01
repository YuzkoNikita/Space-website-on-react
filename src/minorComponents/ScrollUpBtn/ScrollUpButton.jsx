import { useEffect, useState } from 'react'
import './ScrollUpButton.css'

export default function ScrollUpButton() {
  const [scrollUpButton, setScrollUpButton] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 350 ? setScrollUpButton(true) : setScrollUpButton(false);
    })
  }, []);

  return (
    <a href="#" className={`scrollup ${scrollUpButton ? 'show-scroll' : ''}`} id="scroll-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z"></path></svg>
    </a>
  )
}
