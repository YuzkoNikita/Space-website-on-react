import './TitleSection.css'

// eslint-disable-next-line react/prop-types
export default function TitleSection({sectionTitle}) {
  return (
    <h2 className="section_title">
        {sectionTitle}
    </h2>
  )
}
