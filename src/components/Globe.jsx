import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import createGlobe from 'cobe'
import { MapPin, Globe as GlobeIcon, ShieldCheck } from 'lucide-react'

/** Matches cobe baseColor [0.015, 0.025, 0.06] so the card and globe share one surface */
const GLOBE_BG = '#04060f'

const telemetryCards = [
  {
    icon: MapPin,
    title: 'Nairobi HQ & EAC Focus',
    text: 'Facilitating cross-border risk transfer solutions to support economic integration across East Africa.',
  },
  {
    icon: GlobeIcon,
    title: 'International Alliances',
    text: 'Connecting African insurers to premier underwriting capacity in London, Dubai, and global markets.',
  },
  {
    icon: ShieldCheck,
    title: 'Bespoke Programs Placement',
    text: 'Structuring highly specialized Treaty and Facultative arrangements tailored to complex exposures.',
  },
]

/** One card at a time: pops from a random edge, drifts across to the opposite end of the globe, then fades */
const CARD_CYCLE_MS = 5500

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function makeOrbitPath() {
  const fromLeft = Math.random() > 0.5
  const startY = randomBetween(-28, 36)
  const midY = startY + randomBetween(-10, 10)
  const endY = midY + randomBetween(-12, 12)

  if (fromLeft) {
    // Appear on left edge → drift to right end of globe
    return {
      x: ['-46%', '-18%', '18%', '48%'],
      y: [startY, midY, midY + randomBetween(-6, 6), endY],
    }
  }

  // Appear on right edge → drift to left end of globe
  return {
    x: ['46%', '18%', '-18%', '-48%'],
    y: [startY, midY, midY + randomBetween(-6, 6), endY],
  }
}

function OrbitingTelemetryCard({ card }) {
  const Icon = card.icon
  const pathRef = useRef(null)
  if (!pathRef.current) pathRef.current = makeOrbitPath()
  const path = pathRef.current

  return (
    <motion.article
      initial={{ opacity: 0, x: path.x[0], y: path.y[0], scale: 0.9 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: path.x,
        y: path.y,
        scale: [0.9, 1, 1, 0.92],
      }}
      transition={{
        duration: CARD_CYCLE_MS / 1000,
        times: [0, 0.12, 0.78, 1],
        ease: 'linear',
      }}
      className="pointer-events-auto absolute left-1/2 top-[38%] w-[148px] -translate-x-1/2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 shadow-lg shadow-black/20 backdrop-blur-md sm:top-[42%] sm:w-[160px] sm:p-3"
    >
      <div className="mb-1.5 flex items-center gap-1.5">
        <Icon size={11} className="shrink-0 text-[#0d9488]" strokeWidth={2.25} />
        <h3 className="font-display text-[9px] font-semibold leading-snug tracking-tight text-white sm:text-[10px]">
          {card.title}
        </h3>
      </div>
      <p className="font-sans text-[8px] leading-relaxed text-white/55 sm:text-[9px]">
        {card.text}
      </p>
    </motion.article>
  )
}

export default function Globe() {
  const canvasRef = useRef(null)
  const phiRef = useRef(0)
  const rafRef = useRef(0)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCard((i) => (i + 1) % telemetryCards.length)
    }, CARD_CYCLE_MS)
    return () => clearTimeout(timer)
  }, [activeCard])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const brandGreen = [0.063, 0.725, 0.506]

    const globe = createGlobe(canvas, {
      width: 1200,
      height: 1200,
      devicePixelRatio: 2,
      phi: 0,
      theta: 0.35,
      dark: 1,
      diffuse: 1.15,
      mapBrightness: 7,
      mapSamples: 25000,
      baseColor: [0.015, 0.025, 0.06],
      markerColor: brandGreen,
      glowColor: brandGreen,
      markers: [
        { location: [-1.2921, 36.8219], size: 0.12 },
        { location: [51.5074, -0.1278], size: 0.07 },
        { location: [25.2048, 55.2708], size: 0.07 },
        { location: [-26.2041, 28.0473], size: 0.06 },
      ],
    })

    const animationFrame = () => {
      phiRef.current += 0.002
      globe.update({ phi: phiRef.current })
      rafRef.current = requestAnimationFrame(animationFrame)
    }

    rafRef.current = requestAnimationFrame(animationFrame)

    return () => {
      cancelAnimationFrame(rafRef.current)
      globe.destroy()
    }
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl"
          style={{ backgroundColor: GLOBE_BG }}
        >
          {/* Soft atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/2 h-[320px] w-[70%] max-w-[720px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[120px]" />
          </div>

          {/* Floating text — relative z-10 over the canvas */}
          <div className="pointer-events-none relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-5 px-6 pt-16 text-center sm:space-y-6 sm:px-10 sm:pt-20 lg:pt-24">
            <div className="pointer-events-auto">
              <h2
                className="text-balance font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl lg:text-3xl"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-white via-white/95 to-secondary bg-clip-text text-transparent">
                  Connecting African Markets to Global Underwriting Capacity
                </span>
              </h2>
            </div>

            <div className="pointer-events-auto">
              <p className="mx-auto max-w-xl font-sans text-xs leading-relaxed text-white/65 sm:text-sm">
                We bridge local risks with world-class international capacity, leveraging strategic
                alliances across regional landscapes to support continental resilience and market
                stability.
              </p>
            </div>

            <div className="pointer-events-auto flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row">
              <Link
                to="/firm#global-reach"
                className="rounded-full bg-white px-6 py-2.5 font-sans text-xs font-semibold tracking-wide text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white sm:text-sm"
              >
                Explore Geographic Focus
              </Link>
              <a
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-sans text-xs font-semibold tracking-wide text-white/90 backdrop-blur-md transition-colors hover:border-white/35 hover:bg-white/12 sm:text-sm"
              >
                Partner With Us
              </a>
            </div>
          </div>

          {/* Globe + orbiting HUD card (moves with the rotation) */}
          <div className="pointer-events-none relative -mt-2 h-[260px] sm:-mt-3 sm:h-[330px] lg:-mt-4 lg:h-[380px]">
            <div className="absolute left-1/2 top-0 aspect-square w-[175%] max-w-[1200px] -translate-x-1/2 opacity-[0.92] mix-blend-screen sm:w-[150%] lg:w-[130%]">
              <canvas
                ref={canvasRef}
                className="block h-full w-full"
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            </div>

            {/* Card rides across the globe surface — one at a time */}
            <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <OrbitingTelemetryCard
                  key={activeCard}
                  card={telemetryCards[activeCard]}
                />
              </AnimatePresence>
            </div>

            <div
              className="absolute inset-y-0 left-0 z-[15] w-10 sm:w-16 lg:w-24"
              style={{ background: `linear-gradient(to right, ${GLOBE_BG}, transparent)` }}
            />
            <div
              className="absolute inset-y-0 right-0 z-[15] w-6 sm:w-10 lg:w-12"
              style={{ background: `linear-gradient(to left, ${GLOBE_BG}, transparent)` }}
            />
            <div
              className="absolute inset-x-0 bottom-0 z-[15] h-16"
              style={{ background: `linear-gradient(to top, ${GLOBE_BG}, transparent)` }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
