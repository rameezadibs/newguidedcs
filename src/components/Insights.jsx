import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Insights({ onOpenArticle }) {
  const articles = [
    {
      id: 'article-1',
      num: '01',
      category: 'BUSINESS SETUP',
      date: 'OCTOBER 2026',
      readTime: '5 MIN READ',
      title: 'Starting a Business in the UAE: What You Need to Know',
      excerpt: 'A comprehensive briefing on navigating Mainland LLC versus Freezone jurisdictions, corporate tax compliance, trade license classifications, and local operational requirements in 2026.',
      image: '/images/insight-1.jpg',
      aspect: 'aspect-[16/10]',
      highlight: 'FEATURED ANALYSIS',
      content: `Starting a business in the United Arab Emirates has never offered greater strategic upside, with 100% foreign ownership frameworks now ubiquitous across most commercial sectors. However, selecting between a Mainland license (regulated by the Department of Economy and Tourism) and one of the UAE's specialized Freezones remains a foundational decision. 

Key considerations include your intended target market (domestic UAE trading vs. cross-border export), office space statutory prerequisites (physical lease vs. flexi-desk), visa quotas, and statutory corporate tax obligations under the UAE Federal Tax Authority. New Guide coordinates every prerequisite from initial trade name reservation to final corporate bank account activation.`
    },
    {
      id: 'article-2',
      num: '02',
      category: 'DOCUMENT CLEARING',
      date: 'SEPTEMBER 2026',
      readTime: '4 MIN READ',
      title: 'Understanding UAE Document Clearing Procedures',
      excerpt: 'How consular legalization, Ministry of Foreign Affairs (MOFA) electronic attestations, and certified Arabic translations interact to validate international corporate records.',
      image: '/images/insight-2.jpg',
      aspect: 'aspect-[4/3]',
      highlight: 'REGULATORY BRIEF',
      content: `Whether bringing in overseas parent company resolutions, power of attorneys, educational diplomas, or certificates of good standing, official documents must navigate a stringent multi-tier legalization chain. 

A single omission—such as an unauthenticated notary signature in the country of origin or an uncertified Arabic legal translation—can halt government filings for weeks. At New Guide, our direct liaison with MOFAIC and UAE embassies worldwide guarantees seamless verification and electronic stamp verification.`
    },
    {
      id: 'article-3',
      num: '03',
      category: 'BUSINESS GUIDANCE',
      date: 'SEPTEMBER 2026',
      readTime: '6 MIN READ',
      title: 'Common Business Setup Mistakes to Avoid',
      excerpt: 'Critical missteps in initial activity selection, visa quota miscalculations, and bank account documentation that frequently delay new enterprise launches in Dubai.',
      image: '/images/insight-3.jpg',
      aspect: 'aspect-[16/9]',
      highlight: 'ADVISORY',
      content: `Many entrepreneurs assume that once an initial approval certificate is granted, their business is ready to trade. Common missteps include mismatching commercial activities with municipal permissions, inadequate tenancy contracts (Ejari) that fail to satisfy ministry visa allocations, and insufficient proof of funds during corporate bank account onboarding. 

By engaging experienced PRO advisors early, foreign investors circumvent costly restructuring and launch with full statutory peace of mind.`
    },
  ];

  return (
    <section id="insights" className="relative py-24 sm:py-36 bg-[#F7F6F1] overflow-hidden">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#123D88]/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[2px] bg-[#09A9D4]" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#09A9D4] uppercase">
                NEW GUIDE INSIGHTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071D45] tracking-tight leading-[1.1]">
              KNOW BEFORE <br />
              <span className="text-[#123D88]">YOU PROCEED.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#667085] leading-relaxed">
            Practical guidance, updates and insights for navigating business and document procedures in the UAE.
          </p>
        </div>

        {/* Magazine / Editorial Composition (Not Uniform Floating Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Article 01: Lead Large Editorial Feature (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              onClick={() => onOpenArticle(articles[0])}
              className="group cursor-pointer bg-white p-6 sm:p-8 border border-[#123D88]/10 hover:border-[#D5AF38] transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between h-full"
            >
              <div>
                {/* Intentional Wide Crop Photography */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#071D45] mb-6">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#071D45] text-white px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase">
                    {articles[0].highlight}
                  </div>
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-[#071D45] flex items-center justify-center shadow-lg group-hover:bg-[#D5AF38] group-hover:text-[#071D45] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-mono text-[#667085] mb-3">
                  <span className="text-[#D5AF38] font-bold tracking-wider">
                    {articles[0].num} // {articles[0].category}
                  </span>
                  <span>•</span>
                  <span>{articles[0].date}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#071D45] group-hover:text-[#123D88] transition-colors leading-snug mb-4">
                  {articles[0].title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6 font-normal">
                  {articles[0].excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold font-mono uppercase tracking-widest text-[#123D88]">
                <span>READ FULL ADVISORY</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF38] transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </div>

          {/* Right Column: Articles 02 & 03 (Stacked Editorial Rows) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Article 02 */}
            <div
              onClick={() => onOpenArticle(articles[1])}
              className="group cursor-pointer bg-white p-6 border border-[#123D88]/10 hover:border-[#D5AF38] transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-[#071D45] relative">
                    <img
                      src={articles[1].image}
                      alt={articles[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#D5AF38] font-bold tracking-wider mb-1">
                      <span>{articles[1].num} // {articles[1].category}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#667085]">
                      {articles[1].date} • {articles[1].readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-[#071D45] group-hover:text-[#123D88] transition-colors leading-snug mb-2">
                  {articles[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed line-clamp-2">
                  {articles[1].excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold font-mono uppercase tracking-widest text-[#123D88]">
                <span>VIEW PROCEDURAL GUIDE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5AF38] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Article 03 */}
            <div
              onClick={() => onOpenArticle(articles[2])}
              className="group cursor-pointer bg-white p-6 border border-[#123D88]/10 hover:border-[#D5AF38] transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-[#071D45] relative">
                    <img
                      src={articles[2].image}
                      alt={articles[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#D5AF38] font-bold tracking-wider mb-1">
                      <span>{articles[2].num} // {articles[2].category}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#667085]">
                      {articles[2].date} • {articles[2].readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-[#071D45] group-hover:text-[#123D88] transition-colors leading-snug mb-2">
                  {articles[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed line-clamp-2">
                  {articles[2].excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold font-mono uppercase tracking-widest text-[#123D88]">
                <span>READ ROADMAP ADVISORY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5AF38] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenArticle(articles[0])}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded bg-transparent hover:bg-white text-[#071D45] border border-[#071D45]/30 hover:border-[#123D88] text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300"
          >
            <span>EXPLORE ALL INSIGHTS</span>
            <ArrowRight className="w-4 h-4 text-[#D5AF38] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
