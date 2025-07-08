import type { TimelineType } from '../App'
import Milestone from './Milestone'
import { ltiMilestones, mindtreeMilestones, mergerMilestones } from './milestoneData'

interface TimelineContainerProps {
  activeTimeline: TimelineType
}

const TimelineContainer = ({ activeTimeline }: TimelineContainerProps) => {
  const getTimelineData = () => {
    switch (activeTimeline) {
      case 'lti':
        return {
          title: 'L&T Infotech Evolution',
          subtitle: 'From infrastructure roots to digital transformation leader',
          milestones: ltiMilestones
        }
      case 'mindtree':
        return {
          title: 'Mindtree Evolution',
          subtitle: 'From startup to billion-dollar IT services company',
          milestones: mindtreeMilestones
        }
      case 'merger':
        return {
          title: 'The Merger Story',
          subtitle: 'Creating India\'s 5th largest IT services company',
          milestones: mergerMilestones
        }
      default:
        return {
          title: 'L&T Infotech Evolution',
          subtitle: 'From infrastructure roots to digital transformation leader',
          milestones: ltiMilestones
        }
    }
  }

  const timelineData = getTimelineData()

  return (
    <main className="timeline-container">
      <div className="container">
        <div className={`timeline ${activeTimeline === activeTimeline ? 'active' : ''}`}>
          <div className="timeline-header">
            <h2>{timelineData.title}</h2>
            <p>{timelineData.subtitle}</p>
          </div>
          
          <div className="timeline-path">
            {timelineData.milestones.map((milestone, index) => (
              <Milestone 
                key={index} 
                milestone={milestone} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default TimelineContainer
