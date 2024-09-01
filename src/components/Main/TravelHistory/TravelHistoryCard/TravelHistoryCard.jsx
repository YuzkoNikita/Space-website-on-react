import './TravelHistoryCard.css'

// eslint-disable-next-line react/prop-types
export default function TravelHistoryCard({img, history_description}) {
  return (
    <article className="history_card">
            <img src={img} alt="image" className="history_img" />
            <p className="history_description">
                {history_description}
            </p>
        </article>
  )
}
