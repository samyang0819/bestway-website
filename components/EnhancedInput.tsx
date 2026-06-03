'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

interface EnhancedInputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  icon?: 'mail' | 'phone' | 'map';
  isValid?: boolean;
}

const icons: { [key: string]: any } = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};

export default function EnhancedInput({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  icon,
  isValid,
}: EnhancedInputProps) {
  const IconComponent = icon ? icons[icon] : null;

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const errorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {label && (
        <motion.label
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2"
        >
          {label}
          {error && <span className="text-red-400">*</span>}
        </motion.label>
      )}

      <motion.div
        className="relative"
        whileFocus="focus"
        variants={inputVariants}
      >
        {/* Icon */}
        {IconComponent && (
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            animate={value ? { color: '#f59e0b', scale: 1.1 } : { color: '#64748b', scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <IconComponent size={18} />
          </motion.div>
        )}

        {/* Input */}
        <motion.input
          key={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${IconComponent ? 'pl-12' : 'px-4'} py-3 rounded-lg bg-slate-800/50 border-2 transition-all duration-200 text-white placeholder-slate-500 focus:outline-none font-medium ${
            error
              ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : isValid
                ? 'border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/20'
                : 'border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'
          }`}
          initial={{ borderColor: 'rgb(55, 65, 81)' }}
          whileFocus={{
            borderColor: error ? 'rgb(239, 68, 68)' : isValid ? 'rgb(34, 197, 94)' : 'rgb(251, 191, 36)',
            boxShadow: error
              ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
              : isValid
                ? '0 0 0 3px rgba(34, 197, 94, 0.1)'
                : '0 0 0 3px rgba(251, 191, 36, 0.1)',
          }}
        />

        {/* Validation Indicator */}
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            error
              ? { opacity: 1, scale: 1 }
              : isValid
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.2 }}
        >
          {error ? (
            <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}>
              <AlertCircle className="text-red-400" size={18} />
            </motion.div>
          ) : isValid ? (
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.3 }}>
              <CheckCircle className="text-green-400" size={18} />
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.p
          variants={errorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-red-400 text-sm mt-2 flex items-center gap-1.5 font-medium"
        >
          <AlertCircle size={14} />
          {error}
        </motion.p>
      )}

      {/* Success Indicator */}
      {isValid && !error && value && (
        <motion.p
          variants={errorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-green-400 text-sm mt-2 flex items-center gap-1.5 font-medium"
        >
          <CheckCircle size={14} />
          Looks good!
        </motion.p>
      )}
    </motion.div>
  );
}
