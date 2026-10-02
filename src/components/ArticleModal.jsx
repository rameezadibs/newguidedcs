import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenAssistance }) {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071D45]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white shadow-2xl rounded-sm border-t-4 border-[#123D88] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:px-8 border-b border-gray-100 bg-[#F7F6F1]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D5AF38] font-bold">
              <span>{article.num} // {article.category}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-[#071D45] hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-10 overflow-y-auto">
            
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#667085] mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#123D88]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D5AF38]" />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-display font-black text-[#071D45] tracking-tight leading-snug mb-6">
              {article.title}
            </h2>

            {/* Article Image Banner */}
            <div className="w-full aspect-[16/9] overflow-hidden mb-8 bg-[#071D45] relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#071D45] text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                OFFICIAL ADVISORY
              </div>
            </div>

            {/* Excerpt Lead */}
            <div className="p-4 bg-[#F7F6F1] border-l-4 border-[#D5AF38] text-base font-semibold text-[#071D45] leading-relaxed mb-6">
              {article.excerpt}
            </div>

            {/* Main Article Body */}
            <div className="prose prose-sm sm:prose max-w-none text-[#667085] leading-relaxed space-y-4 mb-8">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Advisory Takeaways Box */}
            <div className="p-6 bg-[#071D45] text-white rounded-sm mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D5AF38] font-bold tracking-widest uppercase mb-2">
                <ShieldCheck className="w-4 h-4 text-[#D5AF38]" />
                <span>EXPERT REGULATORY DIRECTIVE</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Document clearance and setup rules in the UAE are continuously modernized through digital government channels. For immediate verification of requirements relating to your specific trade activity or document attestation, consult directly with our PRO team.
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <span className="text-xs font-mono text-[#667085]">
                PUBLISHED BY NEW GUIDE EDITORIAL
              </span>

              <button
                onClick={() => {
                  onClose();
                  onOpenAssistance();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-xs font-bold tracking-widest uppercase shadow transition-colors"
              >
                <span>Request Case Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#09A9D4]" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
