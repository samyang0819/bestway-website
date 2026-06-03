'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  variant?: 'card' | 'text' | 'avatar' | 'testimonial' | 'input';
  count?: number;
  className?: string;
}

export default function Skeleton({
  variant = 'card',
  count = 1,
  className = '',
}: SkeletonProps) {
  const shimmerVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 0%'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const skeletonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  };

  if (variant === 'text') {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
            className="space-y-2"
          >
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
              style={{ backgroundSize: '200% 100%' }}
            />
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-5/6"
              style={{ backgroundSize: '200% 100%' }}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === 'avatar') {
    return (
      <motion.div
        variants={shimmerVariants}
        animate="animate"
        className="w-12 h-12 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full"
        style={{ backgroundSize: '200% 100%' }}
      />
    );
  }

  if (variant === 'input') {
    return (
      <motion.div
        variants={shimmerVariants}
        animate="animate"
        className={`h-12 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg ${className}`}
        style={{ backgroundSize: '200% 100%' }}
      />
    );
  }

  if (variant === 'testimonial') {
    return (
      <motion.div
        variants={skeletonVariants}
        initial="initial"
        animate="animate"
        className="p-8 space-y-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="w-12 h-12 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full"
              style={{ backgroundSize: '200% 100%' }}
            />
            <div className="space-y-2">
              <motion.div
                variants={shimmerVariants}
                animate="animate"
                className="h-4 w-32 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
                style={{ backgroundSize: '200% 100%' }}
              />
              <motion.div
                variants={shimmerVariants}
                animate="animate"
                className="h-3 w-24 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
                style={{ backgroundSize: '200% 100%' }}
              />
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={shimmerVariants}
                animate="animate"
                className="w-4 h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
                style={{ backgroundSize: '200% 100%' }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 pt-4">
          <motion.div
            variants={shimmerVariants}
            animate="animate"
            className="h-4 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
            style={{ backgroundSize: '200% 100%' }}
          />
          <motion.div
            variants={shimmerVariants}
            animate="animate"
            className="h-4 w-5/6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>
      </motion.div>
    );
  }

  // Default card variant
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          variants={skeletonVariants}
          initial="initial"
          animate="animate"
          className="p-6 space-y-4 rounded-lg border border-slate-700"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-8 w-24 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
              style={{ backgroundSize: '200% 100%' }}
            />
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-8 w-8 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
              style={{ backgroundSize: '200% 100%' }}
            />
          </div>

          {/* Content lines */}
          <div className="space-y-3">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-4 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
              style={{ backgroundSize: '200% 100%' }}
            />
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-4 w-5/6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
              style={{ backgroundSize: '200% 100%' }}
            />
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="h-4 w-4/6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded"
              style={{ backgroundSize: '200% 100%' }}
            />
          </div>

          {/* Footer button */}
          <motion.div
            variants={shimmerVariants}
            animate="animate"
            className="h-10 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded mt-4"
            style={{ backgroundSize: '200% 100%' }}
          />
        </motion.div>
      ))}
    </div>
  );
}
