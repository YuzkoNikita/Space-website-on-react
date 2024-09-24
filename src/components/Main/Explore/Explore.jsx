import TitleSection from '../../../minorComponents/TitleSection/TitleSection'
import explore_planet from '../../../assets/explore-planet.svg'
import explore_img from '../../../assets/explore-img.png'
import ExploreInfo from './ExploreInfo/ExploreInfo'

export default function Explore() {
  return (
    <section className="explore section" id="explore">
        <div className="explore_container container grid">
        <div className="explore_data">
            <TitleSection sectionTitle={<>LEARN MARS <span>EXPLORATION</span></>} />

            <p className="explore_description">
                Mars, the fourth plane from the Sun, is a dusty, cold, 
                desert world with a very distinctive atmosphere. 
                The goal of the Mars exploration program is to provide a 
                continuous flow of scientific information and discoveries 
                through a series of carefully selected robotic orbits.
            </p>

            <img src={explore_planet} alt="image" className="explore_planet" />
            
            <div className="explore_info">
                <ExploreInfo title={'MOON'} number={'2'} />
                <ExploreInfo title={'DISTANCE'} number={<>62.069.570 <span>km</span></>}/>
            </div>
        </div>

        <img src={explore_img} alt="image" className="explore_img" />
        </div>
    </section>
  )
}
