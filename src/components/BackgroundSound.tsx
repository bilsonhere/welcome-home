import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a soft ambient sound
    // Using a data URL for a subtle, warm ambient tone
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Subtle, warm frequency (like a soft hum)
    oscillator.frequency.value = 220; // A3 note
    oscillator.type = 'sine';
    
    // Very low volume for subtlety
    gainNode.gain.value = 0.02;
    
    audioRef.current = { context: audioContext, oscillator, gainNode } as any;

    return () => {
      if (audioRef.current) {
        const { oscillator, context } = audioRef.current as any;
        if (oscillator) {
          try {
            oscillator.stop();
          } catch (e) {
            // Already stopped
          }
        }
        if (context && context.state !== 'closed') {
          context.close();
        }
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    const { oscillator, context } = audioRef.current as any;
    
    if (isPlaying) {
      try {
        oscillator.stop();
        context.close();
      } catch (e) {
        // Handle error
      }
      setIsPlaying(false);
    } else {
      try {
        if (context.state === 'suspended') {
          context.resume();
        }
        oscillator.start();
        setIsPlaying(true);
      } catch (e) {
        // Handle error - recreate if needed
        const newContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const newOscillator = newContext.createOscillator();
        const newGainNode = newContext.createGain();
        
        newOscillator.connect(newGainNode);
        newGainNode.connect(newContext.destination);
        newOscillator.frequency.value = 220;
        newOscillator.type = 'sine';
        newGainNode.gain.value = 0.02;
        
        audioRef.current = { context: newContext, oscillator: newOscillator, gainNode: newGainNode } as any;
        newOscillator.start();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="relative"
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSound}
          className="p-3 rounded-full bg-card/80 backdrop-blur-md shadow-soft hover:shadow-dreamy transition-all duration-300 luminous-edge"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-foreground" />
          ) : (
            <VolumeX className="w-5 h-5 text-muted-foreground" />
          )}
        </motion.button>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg bg-card/95 backdrop-blur-md shadow-dreamy whitespace-nowrap"
            >
              <p className="text-sm text-foreground font-light">
                {isPlaying ? 'ambient sound on' : 'ambient sound off'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle glow when active */}
        {isPlaying && (
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-md"
            style={{
              background: 'radial-gradient(circle, hsl(var(--warm-glow) / 0.4) 0%, transparent 70%)',
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default BackgroundSound;
