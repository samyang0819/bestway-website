'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { getResourceBySlug } from '@/lib/resources';
import { ArrowLeft, Download, FileText, Share2 } from 'lucide-react';

export default function ResourceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const resource = getResourceBySlug(slug);

  const handleDownload = () => {
    if (!resource) return;
    
    // Create a mock file download
    const filename = `${resource.title.replace(/\s+/g, '_')}.${resource.format.toLowerCase() === 'pdf' ? 'pdf' : resource.format.toLowerCase() === 'word' ? 'docx' : 'xlsx'}`;
    
    // Create a blob with some content
    const content = `${resource.title}\n\n${resource.preview}\n\nThis is a sample download of: ${resource.title}`;
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create a download link and trigger it
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!resource) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Resource Not Found</h1>
          <Link href={`/${locale}/resources`} className="text-amber-400 hover:text-amber-300">
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
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
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <Link
          href={`/${locale}/resources`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Resources
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="text-6xl mb-6">{resource.icon}</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {resource.title}
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">{resource.description}</p>

        {/* Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700">
          <div>
            <p className="text-slate-400 text-sm mb-1">Category</p>
            <p className="text-white font-semibold">{resource.category}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Format</p>
            <p className="text-white font-semibold">{resource.format}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">File Size</p>
            <p className="text-white font-semibold">{resource.downloadSize}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Country</p>
            <p className="text-white font-semibold">{resource.country}</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Download Section */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-900/20 to-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Download?</h2>
                <p className="text-slate-300">Get instant access to this {resource.category.toLowerCase()} with no email required.</p>
              </div>
              <button 
                onClick={handleDownload}
                className="px-8 py-4 rounded-lg font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 flex items-center gap-2 whitespace-nowrap cursor-pointer">
                <Download size={20} />
                Download Now
              </button>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-white">What's Inside</h2>
            </div>
            <p className="text-slate-300 mb-6 text-lg">{resource.preview}</p>
          </motion.div>

          {/* Key Points */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <h2 className="text-2xl font-bold text-white mb-6">Key Points Covered</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resource.keyPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3 p-3 rounded-lg bg-slate-700/50">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <p className="text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Included Content */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <h2 className="text-2xl font-bold text-white mb-6">Document Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resource.includesContent.map((content, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-slate-600 bg-slate-700/30 hover:bg-slate-700/50 transition-all"
                >
                  <p className="text-slate-300 font-medium">{content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Usage Tips */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
            <h2 className="text-2xl font-bold text-white mb-6">How to Use This Resource</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center font-bold text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Download the file</p>
                  <p className="text-slate-400">Click the download button above to get the file in your preferred format.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center font-bold text-white flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Review and organize</p>
                  <p className="text-slate-400">Take time to read through and organize your documents based on the checklist.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center font-bold text-white flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Get expert guidance</p>
                  <p className="text-slate-400">Share with our experts or schedule a consultation for personalized advice.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Share This Resource</h2>
            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-all">
              <Share2 size={18} />
              Share on Social Media
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="p-8 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Want Expert Assistance?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            This resource is perfect for understanding the process, but our immigration experts can provide personalized guidance based on your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
            >
              Schedule Free Consultation →
            </Link>
            <Link
              href={`/${locale}/resources`}
              className="px-8 py-3 rounded-lg font-semibold border border-slate-600 text-white hover:border-amber-400 transition-all duration-300"
            >
              Browse More Resources
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
