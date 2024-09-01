import './Home.css'
import home_bg from '../../../assets/home-bg.svg'
import home_ovni from '../../../assets/home-ovni.svg'
import home_img from '../../../assets/home-img.png'


export default function Home() {
  return (
    <section className="home section" id="home">
    <img src={home_bg} alt="image" className="home_bg" />

    <div className="home_container container grid">
       <div className="home_data">
          <h1 className="home_title">
             <span>WELCOME</span>
             <span>TO THE</span>
             <span>SPACE</span>
          </h1>

          <a href="#" className="button">Explore Mars</a>

          <img src={home_ovni} alt="image" className="home_ovni" />
       </div>

        <img src={home_img} alt="image" className="home_img" />
        </div>
    </section>
  )
}
