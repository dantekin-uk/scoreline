import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function hasAnimatedAncestor(el) {
  let node = el.parentElement
  while (node && node !== document.body) {
    if (node.hasAttribute('data-framer-component-type')) return true
    const s = node.style
    if (s && (s.opacity !== '' || s.transform !== '')) return true
    node = node.parentElement
  }
  return false
}

const TARGET_SELECTOR = [
  'main section:not([data-hero]) > div h2',
  'main section:not([data-hero]) > div h3',
  'main section:not([data-hero]) > div p.font-sans',
  'main section:not([data-hero]) article:not([style])',
].join(', ')

export default function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rAF = requestAnimationFrame(() => {
      const targets = [...document.querySelectorAll(TARGET_SELECTOR)].filter((el) => {
        if (el.closest('footer') || el.closest('header')) return false
        if (el.classList.contains('scroll-reveal')) return false
        if (el.style.opacity !== '' || el.style.transform !== '') return false
        if (hasAnimatedAncestor(el)) return false
        return true
      })

      if (!targets.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('scroll-reveal--visible')
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -4% 0px' },
      )

      let staggerGroup = 0
      let lastParent = null

      targets.forEach((el) => {
        const parent = el.parentElement
        if (parent !== lastParent) {
          staggerGroup = 0
          lastParent = parent
        }
        el.classList.add('scroll-reveal')
        el.style.setProperty('--reveal-delay', `${Math.min(staggerGroup, 3) * 80}ms`)
        staggerGroup++
        observer.observe(el)
      })

      return () => observer.disconnect()
    })

    return () => cancelAnimationFrame(rAF)
  }, [location.pathname])

  return null
}
