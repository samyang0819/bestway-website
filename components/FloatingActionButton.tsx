'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X, Plus } from 'lucide-react';

interface ActionItem {
  icon: React.ComponentType<any>;
  label: string;
  href?: string;
  onClick?: () => void;
  color: string;
}

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const actions: ActionItem[] = [
    {
      icon: MessageCircle,
      label: 'Chat with us',
      onClick: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
      },
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Call us',
      href: 'tel:+1234567890',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      label: 'Email us',
      href: 'mailto:info@bestwayconsulting.com',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: 20,
    },
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/20"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* FAB Menu */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-3"
            >
              {actions.map((action, index) => {
                const Icon = action.icon;
                const content = (
                  <motion.div
                    key={action.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3"
                  >
                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className="bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700 text-white text-sm font-medium whitespace-nowrap shadow-lg"
                    >
                      {action.label}
                    </motion.div>

                    {/* Button */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                    >
                      <Icon size={20} />
                    </div>
                  </motion.div>
                );

                if (action.href) {
                  return (
                    <a key={action.label} href={action.href}>
                      {content}
                    </a>
                  );
                }

                return (
                  <button key={action.label} onClick={action.onClick} className="w-full">
                    {content}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
          aria-label={isOpen ? 'Close menu' : 'Open contact menu'}
          aria-expanded={isOpen}
        >
          <motion.div
            initial={false}
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Plus size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Floating Pulse Effect */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-amber-500/20 pointer-events-none z-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
