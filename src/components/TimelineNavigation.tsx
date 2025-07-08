import type { TimelineType } from '../App'

interface TimelineNavigationProps {
  activeTimeline: TimelineType
  setActiveTimeline: (timeline: TimelineType) => void
}

const TimelineNavigation = ({ 
  activeTimeline, 
  setActiveTimeline 
}: TimelineNavigationProps) => {
  const navItems = [
    { id: 'lti' as TimelineType, label: 'L&T Infotech Journey' },
    { id: 'mindtree' as TimelineType, label: 'Mindtree Journey' },
    { id: 'merger' as TimelineType, label: 'The Merger Story' }
  ]

  return (
    <nav className="timeline-nav">
      <div className="container">
        <div className="nav-tabs">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-tab ${activeTimeline === item.id ? 'active' : ''}`}
              onClick={() => setActiveTimeline(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default TimelineNavigation
