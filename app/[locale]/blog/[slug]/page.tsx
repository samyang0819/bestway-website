import Link from 'next/link'
import { blogArticles } from '@/lib/blogArticles'
import { notFound } from 'next/navigation'

interface BlogArticlePageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const article = blogArticles.find(a => a.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

const getCategoryColors = (category: string) => {
  const colors: Record<string, { bg: string; text: string; gradient: string; border: string; glow: string }> = {
    'Canada Immigration': { bg: 'from-red-600 to-amber-600', text: 'text-red-300', gradient: 'from-red-900/30 to-amber-900/30', border: 'border-red-500/30', glow: 'shadow-red-500/20' },
    'Province Sponsorship': { bg: 'from-blue-600 to-cyan-600', text: 'text-blue-300', gradient: 'from-blue-900/30 to-cyan-900/30', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    'Visa Types': { bg: 'from-purple-600 to-pink-600', text: 'text-purple-300', gradient: 'from-purple-900/30 to-pink-900/30', border: 'border-purple-500/30', glow: 'shadow-purple-500/20' },
    'Family Immigration': { bg: 'from-green-600 to-emerald-600', text: 'text-green-300', gradient: 'from-green-900/30 to-emerald-900/30', border: 'border-green-500/30', glow: 'shadow-green-500/20' },
    'Australia Immigration': { bg: 'from-yellow-600 to-orange-600', text: 'text-yellow-300', gradient: 'from-yellow-900/30 to-orange-900/30', border: 'border-yellow-500/30', glow: 'shadow-orange-500/20' },
  }
  return colors[category] || colors['Canada Immigration']
}

export default async function BlogArticle({ params }: BlogArticlePageProps) {
  const { locale, slug } = await params
  const article = blogArticles.find(a => a.slug === slug)

  if (!article) {
    notFound()
  }

  const colors = getCategoryColors(article.category)
  const readTime = Math.ceil(article.excerpt.split(' ').length / 200)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-20">
      {/* Back Button with glow */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-8">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-all duration-300 hover:gap-3 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Blog
        </Link>
      </div>

      {/* HERO SECTION WITH DRAMATIC GRADIENT */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
        {/* Featured Image/Icon - ULTRA LARGE & DRAMATIC */}
        <div className={`relative h-80 md:h-[520px] rounded-3xl flex items-center justify-center text-[120px] md:text-[200px] mb-12 shadow-2xl overflow-hidden group bg-gradient-to-br ${colors.bg}`}>
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          {/* Icon with scale animation */}
          <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">{article.image}</div>
          {/* Glowing border effect */}
          <div className={`absolute inset-0 rounded-3xl border-2 ${colors.border} opacity-50`}></div>
        </div>

        {/* PREMIUM HEADER SECTION */}
        <div className="mb-12">
          {/* Category & Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className={`inline-block bg-gradient-to-r ${colors.bg} text-white text-xs font-bold px-6 py-3 rounded-full shadow-lg border border-amber-400/30 uppercase tracking-wider`}>
              {article.category}
            </span>
            <span className="text-amber-400/80 text-sm font-semibold flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-amber-400/20">
              📅 {article.date}
            </span>
            <span className="text-cyan-300/80 text-sm font-semibold flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-400/20">
              📖 {readTime} min read
            </span>
          </div>

          {/* GIANT TITLE WITH GRADIENT */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-cyan-300 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Decorative gradient line */}
          <div className="flex gap-2 mb-8">
            <div className="h-2 w-32 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
            <div className="h-2 w-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
            {article.excerpt}
          </p>
        </div>

        {/* EXPERT INSIGHT BOX - PREMIUM DARK */}
        <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border-2 ${colors.border} p-8 md:p-10 rounded-2xl shadow-2xl ${colors.glow} mb-12 transform hover:scale-102 transition-transform`}>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">✨</div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Expert Insight</h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                This article contains professional analysis based on current immigration regulations and policies. For personalized guidance tailored to your specific circumstances, our certified immigration consultants are ready to help.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-8 py-3.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transform hover:scale-105"
              >
                <span>🎯</span>
                Get Personalized Guidance
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT - DARK PREMIUM */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-20">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-amber-400/10 overflow-hidden shadow-2xl">
          {/* Content area */}
          <div className="px-8 md:px-14 py-12 md:py-16">
            <div className="max-w-3xl mx-auto space-y-10 text-slate-300">
              {article.content.split('\n').map((line: string, idx: number) => {
                if (line.startsWith('# ')) {
                  return (
                    <div key={idx} className="group pt-8 first:pt-0">
                      <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 mb-4 leading-tight group-first:pt-0">
                        {line.replace('# ', '')}
                      </h2>
                      <div className="flex gap-2">
                        <div className="h-1.5 w-32 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
                        <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  )
                }
                if (line.startsWith('## ')) {
                  return (
                    <h3 key={idx} className="text-4xl font-bold text-amber-300 mt-12 mb-6 pt-8 border-t border-slate-700/50 flex items-center gap-3">
                      <span className="text-3xl">→</span>
                      {line.replace('## ', '')}
                    </h3>
                  )
                }
                if (line.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="text-2xl font-bold text-cyan-300 mt-8 mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-cyan-400 rounded-full"></span>
                      {line.replace('### ', '')}
                    </h4>
                  )
                }
                if (line.startsWith('- ')) {
                  return (
                    <div key={idx} className="flex gap-4 ml-2 p-4 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
                      <div className="flex-shrink-0 pt-1 text-amber-400 text-xl">✓</div>
                      <p className="text-slate-200 leading-relaxed font-medium group-hover:text-slate-100 transition-colors">
                        {line.replace('- ', '')}
                      </p>
                    </div>
                  )
                }
                if (line.startsWith('| ')) {
                  return (
                    <div key={idx} className="overflow-x-auto my-8">
                      <table className="w-full border-collapse">
                        <tbody>
                          <tr className="bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border-b-2 border-amber-400/30">
                            {line.split('|').map((cell: string, i: number) => (
                              cell.trim() && (
                                <th key={i} className="px-6 py-4 text-left font-bold text-amber-300 text-sm uppercase tracking-wider border-r border-slate-700/50 last:border-r-0">
                                  {cell.trim()}
                                </th>
                              )
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                }
                if (line.trim() === '') {
                  return <div key={idx} className="h-6"></div>
                }
                if (line.trim()) {
                  return (
                    <p key={idx} className="text-lg leading-8 text-slate-300 font-light">
                      {line}
                    </p>
                  )
                }
                return null
              })}
            </div>

            {/* KEY TAKEAWAYS SECTION */}
            <div className="mt-16 pt-12 border-t border-slate-700/50">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 mb-8 flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                Key Takeaways
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['💡 Stay informed about policy updates', '🎯 Plan your immigration strategy early', '✨ Seek professional guidance for complex cases', '🚀 Act quickly on opportunities'].map((takeaway, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-amber-500/10 to-cyan-500/10 border border-amber-400/20 p-6 rounded-xl hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20">
                    <p className="text-slate-100 font-semibold text-lg">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED ARTICLES SECTION */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-20">
        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 mb-4">
            📚 Explore Related Insights
          </h3>
          <p className="text-lg text-slate-400 mb-6">Deepen your knowledge with these complementary articles</p>
          <div className="flex gap-2">
            <div className="h-1.5 w-32 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
            <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {blogArticles
            .filter(a => a.id !== article.id)
            .slice(0, 2)
            .map(related => {
              const relatedColors = getCategoryColors(related.category)
              const relatedReadTime = Math.ceil(related.excerpt.split(' ').length / 200)
              return (
                <Link
                  key={related.id}
                  href={`/${locale}/blog/${related.slug}`}
                  className="group relative"
                >
                  <div className={`bg-gradient-to-br ${relatedColors.bg} p-0.5 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${relatedColors.glow}`}>
                    <div className="bg-slate-900 rounded-[14px] overflow-hidden h-full">
                      <div className={`h-56 bg-gradient-to-br ${relatedColors.bg} flex items-center justify-center text-7xl overflow-hidden relative group-hover:scale-110 transition-transform duration-300`}>
                        <div className="absolute inset-0 opacity-10 bg-white"></div>
                        <div className="relative z-10">{related.image}</div>
                      </div>
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className={`inline-block bg-gradient-to-r ${relatedColors.bg} text-white text-xs font-bold px-4 py-2 rounded-full`}>
                            {related.category}
                          </span>
                          <span className="text-cyan-400/80 text-xs font-semibold bg-slate-800/50 px-3 py-2 rounded-full border border-cyan-400/20">
                            📖 {relatedReadTime} min
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-amber-300 transition-colors">
                          {related.title}
                        </h4>
                        <p className="text-slate-400 mb-6 line-clamp-2 leading-relaxed text-sm">
                          {related.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm group-hover:gap-3 transition-all">
                          Read Article
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>

      {/* FINAL CTA SECTION - ULTRA PREMIUM */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Gradient background with animated elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-slate-900 opacity-90"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Transform Your Immigration Journey?
            </h3>
            <p className="text-xl text-amber-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our team of certified immigration specialists has guided thousands of families toward their dreams. Get expert, personalized guidance tailored to your unique situation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-10 py-4 rounded-xl font-bold hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
              >
                <span>🎯</span>
                Schedule Free Consultation
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-amber-300 px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all duration-300 border-2 border-amber-400 transform hover:scale-105 text-lg"
              >
                <span>💬</span>
                Send Us a Message
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2">✓</div>
                <p className="text-amber-50 font-semibold">20+ Years Experience</p>
              </div>
              <div className="w-px bg-amber-400/30"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2">👥</div>
                <p className="text-amber-50 font-semibold">5000+ Success Stories</p>
              </div>
              <div className="w-px bg-amber-400/30"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-amber-50 font-semibold">Certified Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
