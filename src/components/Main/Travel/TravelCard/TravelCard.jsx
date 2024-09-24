// eslint-disable-next-line react/prop-types
export default function TravelCard({img, title, info, description}) {
  return (
    <article className="travel_card">
        <img src={img} alt="image" className="travel_image" />

        <h3 className="travel_title">{title}</h3>
        <span className="travel_info">{info}</span>

        <p className="travel_description">
            {description}
        </p>
    </article>
  )
}
