import { useEffect, useState } from 'react'
import './Header.css'
import NavBar from './NavBar/NavBar'

export default function Header() {
  const [blurBackground, setBlurBackground] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >= 50 ? setBlurBackground(true) : setBlurBackground(false);
    })
  }, []);

  return (
    <header className={`header ${blurBackground ? 'blur-header' : ''}`} id="header">
      <NavBar />
    </header>
  )
}
