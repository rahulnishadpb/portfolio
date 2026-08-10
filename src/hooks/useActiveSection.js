import { useEffect, useState } from 'react'

// Returns the id of the section currently closest to the top of the viewport,
// so the nav can highlight where the visitor is.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const anchor = window.innerHeight * 0.3
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= anchor) current = id
      }

      // Near the bottom the last section may never cross the anchor line.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 120
      setActive(atBottom ? ids[ids.length - 1] : current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
