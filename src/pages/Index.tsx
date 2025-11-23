import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ColorThemeSelector from '@/components/ColorThemeSelector';
import WelcomeScreen from '@/components/WelcomeScreen';
import GreetingPanel from '@/components/GreetingPanel';
import FilmGrain from '@/components/FilmGrain';
import FloatingParticles from '@/components/FloatingParticles';

type Phase = 'theme-selection' | 'welcome' | 'greeting';

const Index = () => {
  const [phase, setPhase] = useState<Phase>('theme-selection');
  const [selectedTheme, setSelectedTheme] = useState<string>('rose');

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    // Apply theme to document
    if (theme !== 'rose') {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    // Wait a moment before transitioning
    setTimeout(() => {
      setPhase('welcome');
    }, 600);
  };

  const handleEnter = () => {
    setPhase('greeting');
  };

  return (
    <>
      <FilmGrain />
      <FloatingParticles />
      
      <div className="relative min-h-screen">
        <AnimatePresence mode="wait">
          {phase === 'theme-selection' && (
            <motion.div
              key="theme"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ColorThemeSelector onSelect={handleThemeSelect} />
            </motion.div>
          )}

          {phase === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <WelcomeScreen onEnter={handleEnter} />
            </motion.div>
          )}

          {phase === 'greeting' && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GreetingPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Index;
