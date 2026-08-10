import { useEffect } from 'react'

// Adds `is-visible` to every [data-reveal] element once it scrolls into view.
// Elements stay revealed after the first intersection so scrolling back up
// doesn't re-animate content the visitor has already read.
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
