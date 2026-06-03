'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { blogArticles } from '@/lib/blogArticles'

export default function Blog() {
  const locale = useLocale()
  const t = useTranslations()
  
  const featuredPost = blogArticles[0]
  const otherPosts = blogArticles.slice(1, 4)

  // Category color mapping for visual variety
  const categoryColors: Record<string, { bg: string; text: string; gradient: string; icon: string }> = {
    'Canada Immigration': { bg: 'from-red-600 to-amber-600', text: 'text-red-300', gradient: 'from-red-900/40 to-amber-900/40', icon: '🍁' },
    'Province Sponsorship': { bg: 'from-blue-600 to-cyan-600', text: 'text-blue-300', gradient: 'from-blue-900/40 to-cyan-900/40', icon: '🏔️' },
    'Visa Types': { bg: 'from-purple-600 to-pink-600', text: 'text-purple-300', gradient: 'from-purple-900/40 to-pink-900/40', icon: '📋' },
    'Family Immigration': { bg: 'from-green-600 to-emerald-600', text: 'text-green-300', gradient: 'from-green-900/40 to-emerald-900/40', icon: '👨‍👩‍👧‍👦' },
    'Australia Immigration': { bg: 'from-yellow-600 to-orange-600', text: 'text-yellow-300', gradient: 'from-yellow-900/40 to-orange-900/40', icon: '🦘' },
  }

  const getCategoryColor = (category: string) => categoryColors[category] || categoryColors['Canada Immigration']
  
  const estimateReadTime = (excerpt: string) => {
    const wordCount = excerpt.split(' ').length
    return Math.ceil(wordCount / 200)
  }

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

  const getArticleLink = (article: any) => {
    if (article.slug) {
      return `/${locale}/blog/${article.slug}`
    }
    return `/${locale}/blog`
  }

  return (
    <section id="blog" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-500/50 rounded-full text-amber-300 text-xs font-bold mb-6 uppercase tracking-wider">
            📰 {t('blog.title')}
          </span>
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('blog.subtitle')}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className="text-3xl font-black text-amber-400">{blogArticles.length}+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Articles</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className="text-3xl font-black text-cyan-300">{new Set(blogArticles.map(p => p.category)).size}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Categories</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <div className="text-3xl font-black text-amber-300">↑ 50%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Featured Image/Icon */}
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
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${getCategoryColor(featuredPost.category).gradient} text-amber-300 text-xs font-bold rounded-lg border border-amber-500/50 uppercase tracking-wider`}>
                          ⭐ Featured: {featuredPost.category}
                        </span>
                        <span className="inline-block px-4 py-2 bg-slate-700/50 text-slate-300 text-xs font-bold rounded-lg border border-slate-600/50">
                          📅 {featuredPost.date}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight hover:bg-gradient-to-r hover:from-amber-400 hover:to-cyan-300 hover:bg-clip-text hover:text-transparent transition-all">
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-600/50">
                      <div className="flex gap-4">
                        <span className="text-sm text-amber-300 font-semibold">📖 {estimateReadTime(featuredPost.excerpt)} min read</span>
                        <span className="text-sm text-cyan-300 font-semibold">👁️ {(featuredPost.id * 347 % 5000) + 1000} views</span>
                      </div>
                      <motion.a
                        href={getArticleLink(featuredPost)}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                      >
                        Read Full Story →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {otherPosts.map((post) => (
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
                {/* Image/Icon with overlay */}
                <div className={`relative h-48 bg-gradient-to-br ${getCategoryColor(post.category).bg} flex items-center justify-center overflow-hidden group/img`}>
                  <div className="text-7xl filter group-hover/img:scale-110 transition-transform duration-300">
                    {post.image}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category).gradient} text-amber-300 text-xs font-bold rounded-lg border border-amber-500/30 uppercase tracking-wider`}>
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
                      href={getArticleLink(post)}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors group/link"
                    >
                      Read More
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href={`/${locale}/blog`}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 text-lg uppercase tracking-wider"
          >
            📚 View All Articles
            <span className="text-xl">→</span>
          </motion.a>
          <p className="text-slate-400 mt-6 text-sm">Discover {blogArticles.length} expert guides on immigration and visa solutions</p>
        </motion.div>
      </div>
    </section>
  )
}
