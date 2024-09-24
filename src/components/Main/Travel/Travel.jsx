import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TravelCard from './TravelCard/TravelCard'
import travel_lines from '../../../assets/travel-lines.svg'
import travel_planet_1 from '../../../assets/travel-planet-1.svg'
import travel_planet_2 from '../../../assets/travel-planet-2.svg'
import travel_planet_3 from '../../../assets/travel-planet-3.svg'
import travel_planet_4 from '../../../assets/travel-planet-4.svg'
import TitleSection from '../../../minorComponents/TitleSection/TitleSection';

export default function Travel() {
  return (
    <section className="travel section" id="travel">
    <img src={travel_lines} alt="image" className="travel_lines" />

    <div className="travel_container container">
      <TitleSection sectionTitle={<>SPACE <span>TRAVEL LIST</span></>}/>

       <div>
          <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
               600: {
                  slidesPerView: 2, 
               },
               900: {
                  slidesPerView: 3, 
               },
             }}
         >
            <SwiperSlide>
            {/* <!-- Planet 1 start --> */}
             <TravelCard img={travel_planet_1}
             title='PLANET EARTH' info='54.06 million km'
             description='Planet Earth is made up of beautiful 
                          landscapes and extensive mountain ranges.'>
             </TravelCard>
             {/* <!-- Planet 1 end --> */}
            </SwiperSlide>
            <SwiperSlide>
             {/* <!-- Planet 2 start --> */}
             <TravelCard img={travel_planet_2}
             title='THE SUN' info='148.14 million km'
             description='Planet Earth is made up of beautiful 
                          landscapes and extensive mountain ranges.'>
             </TravelCard>
             {/* <!-- Planet 2 end --> */}
            </SwiperSlide>
            <SwiperSlide>
             {/* <!-- Planet 3 end --> */}
             <TravelCard img={travel_planet_3}
             title='PLANET NAMEK' info='96.12 million km'
             description='Planet Earth is made up of beautiful 
                          landscapes and extensive mountain ranges.'>
             </TravelCard>
             {/* <!-- Planet 3 end --> */}
            </SwiperSlide>
            <SwiperSlide>
             {/* <!-- Planet 4 start --> */}
             <TravelCard img={travel_planet_4}
             title='PLANET VENUS' info='86.609 million km'
             description='Planet Earth is made up of beautiful 
                          landscapes and extensive mountain ranges.'>
             </TravelCard>
             {/* <!-- Planet 4 end --> */}
            </SwiperSlide>
         </Swiper>



          </div>
       </div>
    </div>
 </section>
  )
}
