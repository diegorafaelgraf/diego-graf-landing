import { m } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  opacity?: number;
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  amount = 0.2,
  opacity = 0,
  duration = 0.6,
}: RevealProps) {
  return (
    <m.div
      initial={{ opacity, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </m.div>
  );
}