import { motion } from 'framer-motion';
import CatMotif from './CatMotif';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Path of light - abstract artistic element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--warm-glow) / 0.3) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-light mb-6 text-foreground gentle-drift"
        >
          Welcome home, queen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed"
        >
          You've been missed by more than just the walls.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={onEnter}
          className="group relative px-12 py-4 rounded-full bg-card/80 backdrop-blur-sm text-foreground text-lg font-light transition-all duration-500 hover:scale-105 breathing-glow luminous-edge"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Enter</span>
          
          {/* Breathing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle, hsl(var(--warm-glow) / 0.2) 0%, transparent 70%)',
              filter: 'blur(12px)',
            }}
          />
        </motion.button>
      </motion.div>

      {/* Constellation dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{
              delay: i * 0.2,
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="constellation-dot absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Subtle cat motifs */}
      <CatMotif 
        size="md" 
        opacity={0.04} 
        className="absolute top-16 left-16"
        variant="walking"
      />
      <CatMotif 
        size="sm" 
        opacity={0.03} 
        className="absolute bottom-24 right-20"
        variant="sitting"
      />
    </div>
  );
};

export default WelcomeScreen;
