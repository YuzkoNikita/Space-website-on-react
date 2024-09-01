import './ExploreInfo.css'

// eslint-disable-next-line react/prop-types
export default function ExploreInfo({title, number}) {
  return (
    <div>
        <h3 className="explore_info-title">{title}</h3>
        <h2 className="explore_info-number">{number}</h2>
    </div>
  )
}
