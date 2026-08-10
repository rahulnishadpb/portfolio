import { skills } from '../data/resume'
import './Marquee.css'

// A single flat list of the stack, scrolled horizontally. The track is rendered
// twice so the loop has no visible seam.
const track = skills.flatMap((group) => group.items)

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-list" key={copy}>
            {track.map((item) => (
              <li key={item}>
                {item}
                <span className="marquee-sep">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Marquee
