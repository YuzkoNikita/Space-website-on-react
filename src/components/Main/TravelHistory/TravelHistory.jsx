import TitleSection from '../../../minorComponents/TitleSection/TitleSection'
import TravelHistoryCard from './TravelHistoryCard/TravelHistoryCard'
import history_img_1 from '../../../assets/history-img-1.svg'
import history_img_2 from '../../../assets/history-img-2.svg'
import history_img_3 from '../../../assets/history-img-3.svg'
import history_planet_1 from '../../../assets/history-planet-1.svg'
import history_planet_2 from '../../../assets/history-planet-2.svg'

export default function TravelHistory() {
  return (
    <section className="history section" id="history">
        <TitleSection sectionTitle={<>SPACE TRAVEL <span>HISTORY</span></>}/>

        <img src={history_planet_1} alt="image" className="history_planet-1" />
        <img src={history_planet_2} alt="image" className="history_planet-2" />

        <div className="history_container container grid">
        {/* <!-- History card 1 start --> */}
        <TravelHistoryCard img={history_img_1} history_description={<><span>The International Space Station,</span> {'(ISS)'} is a modular space station in low Earth orbit.</>}/>
        {/* <!-- History card 1 end --> */}

        {/* <!-- History card 2 start --> */}
        <TravelHistoryCard img={history_img_2}/>
        {/* <!-- History card 2 end --> */}

        {/* <!-- History card 3 start --> */}
        <TravelHistoryCard img={history_img_3} history_description={<><span>Teamwork and Collaboration,</span>in long duration space missions.</>}/>
        {/* <!-- History card 3 end --> */}
        </div>
    </section>
  )
}
