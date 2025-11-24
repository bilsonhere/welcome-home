import { motion } from 'framer-motion';

interface ColorThemeSelectorProps {
  onSelect: (theme: string) => void;
}

const ColorThemeSelector = ({ onSelect }: ColorThemeSelectorProps) => {
  const themes = [
    {
      id: 'rose',
      name: 'Rose-Beige',
      description: 'soft, warm, romantic',
      gradient: 'linear-gradient(135deg, hsl(345, 60%, 85%), hsl(35, 65%, 88%))',
      colors: ['hsl(345, 60%, 85%)', 'hsl(20, 55%, 88%)', 'hsl(35, 65%, 88%)'],
    },
    {
      id: 'lavender',
      name: 'Lavender Dusk',
      description: 'cool-warm twilight blend',
      gradient: 'linear-gradient(135deg, hsl(280, 50%, 85%), hsl(250, 45%, 88%))',
      colors: ['hsl(280, 50%, 85%)', 'hsl(265, 48%, 87%)', 'hsl(250, 45%, 88%)'],
    },
    {
      id: 'ivory',
      name: 'Soft Ivory',
      description: 'minimal, quiet, glowing',
      gradient: 'linear-gradient(135deg, hsl(45, 55%, 92%), hsl(40, 40%, 90%))',
      colors: ['hsl(45, 55%, 92%)', 'hsl(42, 48%, 91%)', 'hsl(40, 40%, 90%)'],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 film-grain">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-light text-center mb-4 text-foreground"
        >
          Choose your atmosphere
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-lg text-muted-foreground mb-16 script-accent"
        >
          each carries its own quiet warmth
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.button
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
              onClick={() => onSelect(theme.id)}
              className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: theme.gradient,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative z-10">
                <div className="flex gap-2 mb-4">
                  {theme.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full"
                      style={{
                        background: color,
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  ))}
                </div>
                <h3 className="text-2xl font-medium mb-2 text-foreground/90">
                  {theme.name}
                </h3>
                <p className="text-sm text-foreground/70 script-accent">
                  {theme.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                }}
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorThemeSelector;
