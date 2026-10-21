import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export default function AssistanceModal({ isOpen, onClose, initialService = null }) {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang] || translations.en;
  const [selectedService, setSelectedService] = useState(initialService || (lang === 'ar' ? 'تخليص المستندات' : 'Document Clearing'));
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    notes: '',
  });

  useEffect(() => {
    if (isOpen && initialService) {
      if (initialService.startsWith('Requirement: ')) {
        setSelectedService(lang === 'ar' ? 'تخليص المستندات' : 'Document Clearing');
        setFormData((prev) => ({
          ...prev,
          notes: initialService.replace('Requirement: ', ''),
        }));
      } else {
        setSelectedService(initialService);
      }
    }
  }, [isOpen, initialService, lang]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const servicesList = lang === 'ar' ? [
    'تخليص المستندات',
    'تأسيس الشركات',
    'المعاملات الحكومية',
    'التأشيرات والإقامة',
    'خدمات التعقيب PRO',
    'الدعم المؤسسي',
    'استفسار عام',
  ] : [
    'Document Clearing',
    'Business Setup',
    'Government Transactions',
    'Visa & Immigration',
    'PRO Services',
    'Corporate Support',
    'General Inquiry',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'NG-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(generatedRef);
    setIsSubmitted(true);

    // Trigger elegant confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#123D88', '#09A9D4', '#071D45'],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-[#071D45]/80 backdrop-blur-sm"
        />

        {/* Modal Card — Mobile-Optimized with Scrollable Content & Compact Proportions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl max-h-[88vh] sm:max-h-[90vh] bg-white shadow-2xl rounded-2xl border-t-4 border-[#09A9D4] overflow-hidden z-10 my-auto flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:text-[#071D45] hover:bg-gray-100 transition-colors z-30"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div className={`overflow-y-auto p-5 sm:p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              
              {/* Header */}
              <div className="mb-5 pr-6">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#09A9D4] font-bold uppercase mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#09A9D4]" />
                  <span>{lang === 'ar' ? 'مساعدة مباشرة من فريق نيو غايد' : 'NEW GUIDE DIRECT ASSISTANCE'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071D45] tracking-tight">
                  {t.modal.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] mt-1">
                  {t.modal.subtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Service Selection Pills */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#071D45] mb-2">
                    {t.modal.selectService}
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {servicesList.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`text-[11px] sm:text-xs px-3 py-1.5 rounded-lg transition-all font-semibold cursor-pointer ${
                          selectedService === srv
                            ? 'bg-[#123D88] text-white shadow-sm border border-[#09A9D4]/40'
                            : 'bg-[#F7F6F1] text-[#667085] hover:bg-gray-200 border border-gray-200'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071D45] mb-1">
                      {t.modal.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ar' ? 'مثال: أحمد عبد الله' : 'e.g. Tariq Mansoor'}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F6F1] border border-gray-300 rounded-lg focus:bg-white focus:border-[#123D88] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071D45] mb-1">
                      {t.modal.companyName}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'ar' ? 'مثال: شركة الهلال القابضة ش.ذ.م.م' : 'e.g. Al Hilal Holdings LLC'}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F6F1] border border-gray-300 rounded-lg focus:bg-white focus:border-[#123D88] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071D45] mb-1">
                      {t.modal.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 52 545 3323"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F6F1] border border-gray-300 rounded-lg focus:bg-white focus:border-[#123D88] focus:outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071D45] mb-1">
                      {t.modal.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F6F1] border border-gray-300 rounded-lg focus:bg-white focus:border-[#123D88] focus:outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-bold text-[#071D45] mb-1">
                    {t.modal.notes}
                  </label>
                  <textarea
                    rows={2.5}
                    placeholder={lang === 'ar' ? 'اكتب تفاصيل المعاملة، أو نوع المستند المطلوب تصديقه، أو موعد الإنجاز المستهدف...' : 'Briefly describe what document needs attestation, licensing requirement, or target deadline...'}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F6F1] border border-gray-300 rounded-lg focus:bg-white focus:border-[#123D88] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-[#667085] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#09A9D4]" />
                    <span>{lang === 'ar' ? 'تعامل رسمي وسرية تامة للمعلومات' : 'Confidential UAE regulatory handling'}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#123D88] hover:bg-[#071D45] text-white text-xs font-extrabold tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>{t.modal.submitBtn}</span>
                    <ArrowRight className={`w-4 h-4 text-[#09A9D4] ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </form>

            </div>
          ) : (
            /* Confirmation View */
            <div className="overflow-y-auto p-6 sm:p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border-2 border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="text-xs font-mono font-bold text-[#09A9D4] tracking-widest uppercase mb-1">
                {lang === 'ar' ? 'تم تأكيد الإرسال' : 'DISPATCH CONFIRMED'}
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071D45] mb-2">
                {t.modal.successTitle}
              </h3>

              <div className="inline-block bg-[#F7F6F1] px-3.5 py-1.5 rounded-lg border border-gray-200 text-xs font-mono text-[#071D45] mb-5">
                {t.modal.refId}: <span className="font-bold text-[#123D88]">{referenceId}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto mb-6 leading-relaxed">
                {t.modal.successMessage}
              </p>

              {/* Instant WhatsApp Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/971525453323?text=${encodeURIComponent(
                    lang === 'ar'
                      ? `مرحباً فريق الدليل الجديد، رقم مرجع طلبي هو ${referenceId}. أرسلت طلباً بخصوص ${selectedService}.`
                      : `Hello New Guide Team, my case reference is ${referenceId}. I submitted a request for ${selectedService}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.modal.whatsAppDirect}</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#071D45] text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  {t.modal.closeBtn}
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
