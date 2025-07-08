export interface MilestoneData {
  year: string
  title: string
  description: string
  tags: string[]
  icon: string
  isAcquisition?: boolean
}

interface MilestoneProps {
  milestone: MilestoneData
  index: number
}

const Milestone = ({ milestone, index }: MilestoneProps) => {
  return (
    <div 
      className={`milestone ${milestone.isAcquisition ? 'acquisitions' : ''}`}
      data-year={milestone.year}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="milestone-marker">
        <i className={milestone.icon}></i>
      </div>
      <div className="milestone-content">
        <div className="milestone-year">{milestone.year}</div>
        <h3>{milestone.title}</h3>
        <p>{milestone.description}</p>
        <div className="milestone-tags">
          {milestone.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Milestone
