'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const blogArticles = [
  {
    id: 1,
    slug: 'ontario-oinp-express-entry-updates',
    title: 'Ontario OINP Express Entry Skilled Trades Stream - Important Updates',
    category: 'Canada Immigration',
    date: '2025-11-21',
    image: '🍁',
    excerpt: 'Recent changes to the Ontario Immigrant Nominee Program (OINP) Express Entry Skilled Trades stream have been implemented.',
    featured: true,
  },
  {
    id: 2,
    slug: 'alberta-aaip-rural-renewal-2026',
    title: 'Alberta AAIP Rural Renewal Stream - 2026 Changes',
    category: 'Province Sponsorship',
    date: '2025-11-15',
    image: '🏔️',
    excerpt: 'The Alberta Immigrant Nominee Program (AAIP) is implementing new regulations effective January 1, 2026.',
  },
  {
    id: 3,
    slug: 'canada-work-permit-vs-student-permit',
    title: 'Canada Work Permit vs Student Permit - What You Need to Know',
    category: 'Visa Types',
    date: '2025-11-10',
    excerpt: 'Understanding the differences between work permits and study permits is crucial for your immigration journey.',
    image: '📋',
  },
  {
    id: 4,
    title: 'Family Sponsorship Program - Complete Guide for 2026',
    category: 'Family Immigration',
    date: '2025-11-05',
    excerpt: 'Sponsor your loved ones to Canada through the family sponsorship program.',
    image: '👨‍👩‍👧‍👦',
  },
  {
    id: 5,
    title: 'Australian Immigration - Skilled Migration Points System Explained',
    category: 'Australia Immigration',
    date: '2025-10-28',
    excerpt: 'Master the Australian points-based system for skilled migration.',
    image: '🦘',
  },
  {
    id: 6,
    title: 'Express Entry Latest Draw - CRS Scores and Processing Times',
    category: 'Canada Immigration',
    date: '2025-10-20',
    excerpt: 'Stay updated with the latest Express Entry draws.',
    image: '📊',
  },
]

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Canada Immigration': { bg: 'from-red-600 to-amber-600', text: 'text-red-300', border: 'border-red-500/50' },
  'Province Sponsorship': { bg: 'from-blue-600 to-cyan-600', text: 'text-blue-300', border: 'border-blue-500/50' },
  'Visa Types': { bg: 'from-purple-600 to-pink-600', text: 'text-purple-300', border: 'border-purple-500/50' },
  'Family Immigration': { bg: 'from-green-600 to-emerald-600', text: 'text-green-300', border: 'border-green-500/50' },
  'Australia Immigration': { bg: 'from-yellow-600 to-orange-600', text: 'text-yellow-300', border: 'border-yellow-500/50' },
}

const getCategoryColor = (category: string) => categoryColors[category] || categoryColors['Canada Immigration']

const estimateReadTime = (excerpt: string) => {
  const wordCount = excerpt.split(' ').length
  return Math.ceil(wordCount / 200)
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const categories = Array.from(new Set(blogArticles.map((post) => post.category)))

  const filteredArticles = blogArticles.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogArticles.find(p => p.featured)
  const otherArticles = filteredArticles.filter(p => !p.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: { y: -8, transition: { duration: 0.3 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-24 md:py-32 text-center border-b border-amber-500/20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-500/50 rounded-full text-amber-300 text-xs font-bold mb-6 uppercase tracking-wider">
            📚 Immigration Knowledge Hub
          </span>
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
            Expert Immigration Insights
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stay ahead of policy changes, learn from expert guides, and unlock your immigration opportunities with BestWay Consulting's comprehensive blog.
          </p>

          {/* Search Bar */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative flex items-center bg-slate-800/80 border border-amber-500/30 rounded-xl px-6 py-4 backdrop-blur-sm">
                <span className="text-2xl mr-4">🔍</span>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow bg-transparent text-white placeholder-slate-400 focus:outline-none text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Featured Article */}
        {featuredPost && !selectedCategory && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Featured Image */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center justify-center rounded-xl h-64 md:h-auto bg-gradient-to-br ${getCategoryColor(featuredPost.category).bg} relative overflow-hidden group/icon`}
                  >
                    <div className="text-9xl filter group-hover/icon:scale-125 transition-transform duration-300">
                      {featuredPost.image}
                    </div>
                  </motion.div>

                  {/* Featured Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${getCategoryColor(featuredPost.category).bg} text-white text-xs font-bold rounded-lg border border-amber-500/50 uppercase tracking-wider`}>
                          ⭐ FEATURED
                        </span>
                        <span className="inline-block px-4 py-2 bg-amber-900/40 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/30 uppercase">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-600/50">
                      <div className="flex gap-6 text-sm">
                        <span className="text-amber-300 font-semibold">📖 {estimateReadTime(featuredPost.excerpt)} min read</span>
                        <span className="text-cyan-300 font-semibold">📅 {featuredPost.date}</span>
                      </div>
                      <motion.a
                        href={`/${locale}/blog/${featuredPost.slug}`}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-amber-500/50"
                      >
                        Read Full Article →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wider">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-lg shadow-amber-500/50'
                  : 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-amber-500/50'
              }`}
            >
              All Articles ({blogArticles.length})
            </motion.button>
            {categories.map((category) => {
              const count = blogArticles.filter(p => p.category === category).length
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${getCategoryColor(category).bg} text-white shadow-lg`
                      : 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-amber-500/50'
                  }`}
                >
                  {category} ({count})
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filteredArticles.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherArticles.map((post) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative h-full"
              >
                {/* Card Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/50 to-cyan-600/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Card Content */}
                <div className="relative h-full bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-500/20 hover:border-amber-400/50 backdrop-blur-sm flex flex-col">
                  {/* Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${getCategoryColor(post.category).bg} flex items-center justify-center overflow-hidden group/img`}>
                    <div className="text-7xl filter group-hover/img:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span className="inline-block bg-slate-700/50 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/30 px-3 py-1 uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400 whitespace-nowrap">{estimateReadTime(post.excerpt)} min</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-3 group-hover:text-amber-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <motion.a
                        href={post.slug ? `/${locale}/blog/${post.slug}` : `/${locale}/blog`}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors group/link"
                      >
                        Read
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="text-6xl mb-6">🔍</div>
            <p className="text-2xl text-slate-300 mb-4">No articles found</p>
            <p className="text-slate-400 mb-8">Try adjusting your search or filter criteria</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedCategory(null)
                setSearchTerm('')
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-amber-500/50"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
          <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-12 text-center border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-white mb-4">Ready to Transform Your Immigration Journey?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get expert guidance from our certified immigration consultants. Let's find the perfect path for you.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-amber-500/50 text-lg uppercase tracking-wider"
            >
              Schedule Consultation →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
