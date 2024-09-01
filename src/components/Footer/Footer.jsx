import ComponentsLinks from '../../minorComponents/ComponentsLinks/ComponentsLinks'
import SocialLinks from '../../minorComponents/SocialLinks/SocialLinks'
import './Footer.css'
import footer_planet_1 from '../../assets/footer-planet-1.svg'
import footer_planet_2 from '../../assets/footer-planet-2.svg'


export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer_container container grid">
        <img src={footer_planet_1} alt="image" className="footer-planet-1" />
        <img src={footer_planet_2} alt="image" className="footer-planet-2" />

        <div className="footer_content grid">
            <ComponentsLinks />

            <div className="footer_social">
                <SocialLinks />
            </div>
        </div>

        <span className="footer_copy">
            &#169; All Rights Reserved By Bedimcode
        </span>
        </div>
    </footer>
  )
}
