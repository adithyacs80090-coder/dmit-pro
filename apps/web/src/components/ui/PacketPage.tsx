import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface PacketPageProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export function PacketPage({ children, className, id, delay = 0 }: PacketPageProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'mb-7 p-8 rounded-[10px] border border-[rgba(216,205,185,0.85)] bg-page shadow-[0_2px_12px_rgba(25,51,46,0.08)]',
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(90deg, #ff7c59 0 14%, #9b59b6 14% 28%, #087eb1 28% 42%, #11bfb0 42% 56%, #54b95d 56% 70%, #d5df3e 70% 84%, #f5ad28 84% 100%)',
        backgroundPosition: 'top',
        backgroundSize: '100% 8px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </motion.section>
  )
}
