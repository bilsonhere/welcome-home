import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import CatMotif from './CatMotif';

const GreetingPanel = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showLaterMessage, setShowLaterMessage] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative max-w-2xl w-full dreamy-card rounded-3xl p-12 film-grain"
      >
        {/* Enhanced cat motifs */}
        <CatMotif 
          size="md" 
          opacity={0.08} 
          className="absolute top-8 right-8"
          variant="sitting"
        />
        <CatMotif 
          size="sm" 
          opacity={0.05} 
          className="absolute top-12 left-8"
          variant="sleeping"
        />
        <CatMotif 
          size="sm" 
          opacity={0.04} 
          className="absolute bottom-16 right-12"
          variant="walking"
        />

        {/* Luminous edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 text-center relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-light text-foreground leading-relaxed"
          >
            I hope the world feels gentler around you now.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
          >
            I hope your room remembers your breathing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
          >
            I can't wait for you to meet Amarah and the babies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8"
          >
            <p className="text-xl mb-6 text-foreground font-light script-accent">
              Would you like to read your letter?
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLetter(true)}
                className="px-8 py-3 rounded-full bg-primary/20 backdrop-blur-sm text-foreground hover:bg-primary/30 transition-all duration-300 breathing-glow"
              >
                Yes
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLaterMessage(true)}
                className="px-8 py-3 rounded-full bg-muted/50 backdrop-blur-sm text-foreground hover:bg-muted/70 transition-all duration-300"
              >
                Later
              </motion.button>
            </div>

            <AnimatePresence>
              {showLaterMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-muted-foreground script-accent text-lg"
                >
                  Take your time. I'm here.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Constellation nodes */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.04, 0.08, 0.04],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="constellation-dot absolute"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Letter Modal */}
      <AnimatePresence>
        {showLetter && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLetter(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-12 lg:inset-24 z-50 flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-3xl bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden film-grain">
                {/* Paper texture vignette */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
                </div>

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  onClick={() => setShowLetter(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted/70 transition-all duration-300 opacity-60 z-10"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Letter content container */}
                <div className="relative h-full overflow-y-auto p-8 md:p-12">
                  <div className="max-w-2xl mx-auto space-y-6">
                    {/* Enhanced cat watermarks in letter */}
                    <CatMotif 
                      size="lg" 
                      opacity={0.06} 
                      className="absolute top-12 left-1/2 -translate-x-1/2"
                      variant="sleeping"
                    />
                    <CatMotif 
                      size="sm" 
                      opacity={0.03} 
                      className="absolute top-24 left-12"
                      variant="sitting"
                    />
                    <CatMotif 
                      size="sm" 
                      opacity={0.03} 
                      className="absolute top-24 right-12"
                      variant="sitting"
                    />

                    <div className="pt-8 text-center">
                      <div className="prose prose-lg max-w-none text-foreground/90 font-light leading-relaxed">
                        <p className="text-2xl mb-8 script-accent">My dearest,</p>
                        
                        {/* PLACE LETTER HERE */}
                        <div className="space-y-4 text-lg">
                          <p>
                            As you read this, I hope you feel the warmth I've woven into every word.
                            This moment, right now, is yours to hold.
                          </p>
                          <p>
                            The days have been gentle in your absence, waiting patiently for your return.
                            Amarah and the babies have been dreaming of meeting you—they can sense
                            the kindness that walks with you.
                          </p>
                          <p>
                            Remember that you carry light with you, even when it feels distant.
                            This space, these walls, this quiet—they all remember you and welcome you back.
                          </p>
                          <p className="pt-4 script-accent text-xl">
                            With all the tenderness in the world,
                          </p>
                          <p className="script-accent text-xl">
                            Always yours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CatMotif size="sm" opacity={0.3} animated={false} variant="sitting" />
          </motion.div>

          <p className="text-sm text-muted-foreground font-light">
            made with quiet intention.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default GreetingPanel;
