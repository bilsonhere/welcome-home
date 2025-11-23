import { motion } from 'framer-motion';

interface CatMotifProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  className?: string;
  animated?: boolean;
  variant?: 'sitting' | 'walking' | 'sleeping';
}

const CatMotif = ({ 
  size = 'md', 
  opacity = 0.06, 
  className = '', 
  animated = true,
  variant = 'sitting' 
}: CatMotifProps) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const catVariants = {
    sitting: "M12 2C10.9 2 10 2.9 10 4V7C8.9 7 8 7.9 8 9V14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14V9C16 7.9 15.1 7 14 7V4C14 2.9 13.1 2 12 2M12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10M7 11C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11M17 11C16.45 11 16 11.45 16 12C16 12.55 16.45 13 17 13C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11Z",
    walking: "M18 21.5C19.38 20.82 20.5 19.5 21 17.9L19.5 17.5C19.31 18.28 18.92 19 18.37 19.55L18 21.5M4 17.5C4.64 19.91 6.5 21.8 9 22.5L9.5 20.8C7.5 20.3 5.9 18.7 5.5 16.6L4 17.5M16.5 3C17.88 3 19 4.12 19 5.5C19 6.88 17.88 8 16.5 8C15.12 8 14 6.88 14 5.5C14 4.12 15.12 3 16.5 3M11 9V11H9V13C9 13 9 14.5 9 15C9 16.5 10.5 18 12 18C13.5 18 15 16.5 15 15V13H13V11H11V9Z",
    sleeping: "M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M10 9C9.45 9 9 9.45 9 10C9 10.55 9.45 11 10 11C10.55 11 11 10.55 11 10C11 9.45 10.55 9 10 9M14 9C13.45 9 13 9.45 13 10C13 10.55 13.45 11 14 11C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9M12 17C13.93 17 15.5 15.43 15.5 13.5H8.5C8.5 15.43 10.07 17 12 17Z",
  };

  return (
    <motion.div
      initial={animated ? { opacity: 0 } : {}}
      animate={animated ? { opacity } : { opacity }}
      transition={animated ? { delay: 0.5, duration: 1 } : {}}
      whileHover={animated ? { rotate: 3, opacity: opacity * 1.5 } : {}}
      className={`${sizeMap[size]} ${className} pointer-events-none`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-foreground">
        <path d={catVariants[variant]} />
      </svg>
    </motion.div>
  );
};

export default CatMotif;
