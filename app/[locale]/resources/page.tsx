'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { resources } from '@/lib/resources';
import { Download, Search } from 'lucide-react';
import EmptyState from '@/components/EmptyState';

type CategoryFilter = 'All' | 'Guide' | 'Checklist' | 'Template' | 'Worksheet';

export default function ResourcesPage() {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryFilter[] = ['All', 'Guide', 'Checklist', 'Template', 'Worksheet'];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-32 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Immigration Resources
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Download our collection of guides, checklists, templates, and worksheets to prepare for your immigration journey.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        {/* Search Bar */}
        <div className="mb-6 p-4 rounded-lg bg-slate-800 border border-slate-700 flex items-center gap-3">
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Resources Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={`/${locale}/resources/${resource.slug}`}>
                  <div className="relative p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 h-full overflow-hidden cursor-pointer flex flex-col">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-cyan-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-cyan-500/10 group-hover:to-amber-500/10 transition-all duration-300" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Icon and Category */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl">{resource.icon}</div>
                        <span className="px-2 py-1 rounded text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {resource.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 line-clamp-2 text-sm flex-1">
                        {resource.description}
                      </p>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4 pb-4 border-b border-slate-700">
                        <div className="text-xs text-slate-400">
                          <span className="font-semibold">{resource.country}</span> • {resource.format}
                        </div>
                        <div className="text-xs text-slate-400">
                          {resource.visaType} • {resource.downloadSize}
                        </div>
                      </div>

                      {/* Key Points */}
                      <div className="mb-4">
                        <p className="text-xs text-slate-400 font-semibold mb-2">INCLUDES</p>
                        <ul className="text-xs text-slate-400 space-y-1">
                          {resource.keyPoints.slice(0, 2).map((point, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-cyan-400">✓</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Download Button */}
                      <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all duration-300 mt-auto">
                        <Download size={18} />
                        <span className="font-semibold">Download Now</span>
                      </div>
                    </div>

                    {/* Border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-500/30 transition-all duration-300 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🔍"
            title="No Resources Found"
            description={searchQuery ? `We couldn't find any resources matching "${searchQuery}". Try adjusting your search terms or filters.` : 'No resources found in this category. Try a different filter or browse all resources.'}
            buttonText="View All Resources"
            buttonAction={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          />
        )}
      </motion.div>

      {/* Featured Resources Section */}
      {selectedCategory === 'All' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        >
          <div className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
            <h2 className="text-3xl font-bold text-white mb-6">Most Downloaded Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <p className="text-3xl mb-2">📘</p>
                <p className="font-bold text-white mb-1">Canada Express Entry Guide</p>
                <p className="text-sm text-slate-400">Downloaded 2,500+ times</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <p className="text-3xl mb-2">✅</p>
                <p className="font-bold text-white mb-1">Work Visa Checklist</p>
                <p className="text-sm text-slate-400">Downloaded 1,800+ times</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <p className="text-3xl mb-2">🏡</p>
                <p className="font-bold text-white mb-1">Settlement Checklist</p>
                <p className="text-sm text-slate-400">Downloaded 1,500+ times</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center"
      >
        <div className="p-8 rounded-2xl border border-gradient-to-r from-amber-500 to-cyan-500 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <h2 className="text-3xl font-bold text-white mb-3">
            Need Personalized Guidance?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            These resources are great for self-service, but our immigration experts can provide personalized guidance for your unique situation.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
          >
            Schedule Free Consultation →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
