'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Loader initial — s'affiche ~1.5s puis sort vers le haut
export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] }}
          className="fixed inset-0 z-[99999] bg-[#111111] flex flex-col items-center justify-center"
        >
          {/* Logo animé */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="font-grotesk font-bold text-surface text-4xl md:text-5xl tracking-tight"
          >
            Stripwork
          </motion.span>

          {/* Ligne de chargement accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="mt-8 w-24 h-0.5 bg-accent origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
