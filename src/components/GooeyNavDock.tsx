import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import GooeyNav from '@/components/GooeyNav'

const routes = ['/', '/about', '/memories', '/connections']

export default function GooeyNavDock() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const activeIndex = Math.max(0, routes.indexOf(pathname))

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-5 sm:pb-7"
    >
      <div className="pointer-events-auto">
        <GooeyNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Memories', href: '/memories' },
            { label: 'Connections', href: '/connections' },
          ]}
          activeIndex={activeIndex}
          initialActiveIndex={0}
          onChange={(index) => navigate(routes[index])}
          ariaLabel="Primary"
          theme="dark"
          size="lg"
          frame={true}
          particleCount={15}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect={true}
        />
      </div>
    </motion.div>
  )
}
