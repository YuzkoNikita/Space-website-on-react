import TitleSection from '../../../minorComponents/TitleSection/TitleSection'

export default function Contact() {
  return (
        <section className="contact section">
            <TitleSection sectionTitle={<>GET OUR <span>LATEST NEWS</span></>} />

            <div className="contact_container container grid">
               <form action="" className="contact_form">
                  <input type="email" placeholder="Email Adress" name="email" className="contact_input" />
                  <button type="submit" className="button button_yellow">Email Address</button>
               </form>
            </div>
         </section>
  )
}
