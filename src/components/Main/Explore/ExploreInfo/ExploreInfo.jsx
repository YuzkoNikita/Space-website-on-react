// eslint-disable-next-line react/prop-types
export default function ExploreInfo({title, number}) {
  return (
    <div className="explore_info-data">
        <h3 className="explore_info-title">{title}</h3>
        <h2 className="explore_info-number">{number}</h2>
    </div>
  )
}
