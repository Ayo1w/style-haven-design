import { useState } from "react";

const BuyersGuidePreview = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
      
      <article 
        className="max-w-[800px] mx-auto px-5 py-10"
        style={{ fontFamily: "'Inter', sans-serif", color: '#333', lineHeight: 1.7 }}
      >
        
        {/* 1. ARTICLE HERO + INTRO */}
        <header className="text-center mb-12 pb-10 border-b border-gray-200">
          <span 
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#2F8F8B', letterSpacing: '1.5px' }}
          >
            Buyer's Guide
          </span>
          
          <h1 
            className="text-4xl md:text-5xl font-semibold mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            The 7 Best Facial Serums of 2025
          </h1>
          
          <p className="text-lg text-gray-500 mb-6 max-w-xl mx-auto">
            We tested 25+ options to find the ones actually worth your money
          </p>
          
          <div className="flex items-center justify-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              8 min read
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              Updated Dec 2025
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              By Sarah Mitchell
            </span>
          </div>
          
          <div className="text-left mt-8 text-base text-gray-600 space-y-4">
            <p>Finding the perfect facial serum can feel overwhelming with hundreds of options flooding the market. After spending 50+ hours testing, researching, and consulting with dermatologists, we've narrowed it down to the 7 best options for every skin type and budget.</p>
            <p>Whether you're a complete skincare beginner or looking to upgrade your routine, this guide covers everything you need to make a confident purchase decision.</p>
          </div>
        </header>

        {/* 2. EDITOR'S TOP PICK */}
        <div 
          className="relative rounded-2xl p-8 mb-10"
          style={{ 
            background: 'linear-gradient(135deg, #f8fafa 0%, #e8f4f3 100%)',
            border: '2px solid #2F8F8B'
          }}
        >
          <div 
            className="absolute -top-3.5 left-8 text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full flex items-center gap-1.5"
            style={{ background: '#2F8F8B', color: 'white', letterSpacing: '1px' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Editor's Top Pick
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start mt-4">
            <div className="flex-shrink-0 w-48 h-48 bg-white rounded-xl flex items-center justify-center shadow-lg mx-auto md:mx-0">
              <div className="text-6xl">✨</div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
              >
                Glow Restore Vitamin C Serum
              </h2>
              <p className="text-sm font-semibold mb-3" style={{ color: '#2F8F8B' }}>by SkinScience Labs</p>
              <p className="text-sm text-gray-600 mb-4">The perfect balance of performance, quality, and value. This is the one we'd recommend to most people without hesitation.</p>
              
              <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                <span className="bg-white border text-xs font-medium px-3 py-1 rounded-full" style={{ borderColor: '#2F8F8B', color: '#2F8F8B' }}>Best Overall</span>
                <span className="bg-white border text-xs font-medium px-3 py-1 rounded-full" style={{ borderColor: '#2F8F8B', color: '#2F8F8B' }}>Great Value</span>
                <span className="bg-white border text-xs font-medium px-3 py-1 rounded-full" style={{ borderColor: '#2F8F8B', color: '#2F8F8B' }}>Dermatologist Approved</span>
              </div>
              
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#2F8F8B' }}
              >
                Check Price on Amazon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT BLOCKS */}
        <section className="my-12">
          <h2 
            className="text-2xl font-semibold mb-8 pb-4 border-b-2 border-gray-200"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Our Top Picks
          </h2>
          
          {/* Product 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6 transition-shadow hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ background: 'linear-gradient(135deg, #2F8F8B, #7FAFA4)' }}
              >
                1
              </div>
              <div className="flex-shrink-0 w-36 h-36 bg-gray-100 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                <div className="text-5xl">🧴</div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
                >
                  Glow Restore Vitamin C Serum
                </h3>
                <p className="text-sm font-medium italic mb-2" style={{ color: '#2F8F8B' }}>Best Overall Pick</p>
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                  <span className="text-amber-400">★★★★★</span>
                  <span className="text-sm text-gray-500">4.8/5 (2,340 reviews)</span>
                </div>
                <p className="text-sm text-gray-600">A powerful yet gentle vitamin C serum that brightens, firms, and protects. Perfect for all skin types.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5 p-5 bg-gray-50 rounded-lg mb-5">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-1.5" style={{ color: '#22a06b' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#22a06b"><circle cx="12" cy="12" r="10"/></svg>
                  Pros
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Exceptional brightening results</li>
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Lightweight, fast-absorbing</li>
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">No irritation for sensitive skin</li>
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Visible results in 2 weeks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-1.5" style={{ color: '#cf3b3b' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#cf3b3b"><circle cx="12" cy="12" r="10"/></svg>
                  Cons
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="pl-5 relative before:content-['✗'] before:absolute before:left-0 before:text-red-600 before:font-bold">Higher price point</li>
                  <li className="pl-5 relative before:content-['✗'] before:absolute before:left-0 before:text-red-600 before:font-bold">Small bottle size</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-md transition-all hover:-translate-y-0.5"
                style={{ background: '#2F8F8B' }}
              >
                Check Price
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-semibold px-6 py-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50"
              >
                Read Full Review
              </a>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6 transition-shadow hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ background: 'linear-gradient(135deg, #2F8F8B, #7FAFA4)' }}
              >
                2
              </div>
              <div className="flex-shrink-0 w-36 h-36 bg-gray-100 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                <div className="text-5xl">💧</div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
                >
                  HydraBoost Hyaluronic Acid
                </h3>
                <p className="text-sm font-medium italic mb-2" style={{ color: '#2F8F8B' }}>Best Value for Money</p>
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                  <span className="text-amber-400">★★★★☆</span>
                  <span className="text-sm text-gray-500">4.5/5 (1,820 reviews)</span>
                </div>
                <p className="text-sm text-gray-600">Perfect for those who want solid hydration without breaking the bank. Offers 90% of the results at half the price.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5 p-5 bg-gray-50 rounded-lg mb-5">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-1.5" style={{ color: '#22a06b' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#22a06b"><circle cx="12" cy="12" r="10"/></svg>
                  Pros
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Incredible value for money</li>
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Deep, lasting hydration</li>
                  <li className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">Works under makeup</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-1.5" style={{ color: '#cf3b3b' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#cf3b3b"><circle cx="12" cy="12" r="10"/></svg>
                  Cons
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="pl-5 relative before:content-['✗'] before:absolute before:left-0 before:text-red-600 before:font-bold">Basic packaging</li>
                  <li className="pl-5 relative before:content-['✗'] before:absolute before:left-0 before:text-red-600 before:font-bold">No dropper included</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-md transition-all hover:-translate-y-0.5"
                style={{ background: '#2F8F8B' }}
              >
                Check Price
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-semibold px-6 py-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50"
              >
                Read Full Review
              </a>
            </div>
          </div>
        </section>

        {/* 4. WHO THIS IS BEST FOR */}
        <section className="bg-gray-50 rounded-2xl p-8 my-12">
          <h2 
            className="text-2xl font-semibold mb-6 flex items-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F8F8B" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Who This Is Best For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-5 border-l-4" style={{ borderColor: '#2F8F8B' }}>
              <h4 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#1a1a1a' }}>
                👩‍💼 Busy Professionals
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">If you value convenience and fast results, look for serums with quick absorption and multi-tasking benefits.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-l-4" style={{ borderColor: '#2F8F8B' }}>
              <h4 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#1a1a1a' }}>
                💰 Budget-Conscious Shoppers
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">Our #2 and #4 picks offer excellent value without compromising on essential ingredients.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-l-4" style={{ borderColor: '#2F8F8B' }}>
              <h4 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#1a1a1a' }}>
                🏆 Quality Seekers
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">For those who want the absolute best, our Editor's Pick delivers premium, clinical-grade results.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-l-4" style={{ borderColor: '#2F8F8B' }}>
              <h4 className="text-base font-semibold mb-2 flex items-center gap-2" style={{ color: '#1a1a1a' }}>
                🌱 Skincare Beginners
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">New to serums? Start with our #3 pick—it's gentle, affordable, and easy to incorporate.</p>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON TABLE */}
        <section className="my-12">
          <h2 
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Quick Comparison
          </h2>
          
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr style={{ background: '#2F8F8B' }}>
                  <th className="text-left text-sm font-semibold text-white p-4">Product</th>
                  <th className="text-left text-sm font-semibold text-white p-4">Best For</th>
                  <th className="text-left text-sm font-semibold text-white p-4">Price</th>
                  <th className="text-left text-sm font-semibold text-white p-4">Rating</th>
                  <th className="text-left text-sm font-semibold text-white p-4">Key Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-sm font-semibold" style={{ color: '#1a1a1a' }}>Glow Restore ⭐</td>
                  <td className="p-4 text-sm text-gray-600">Overall</td>
                  <td className="p-4 text-sm text-gray-600">$$$</td>
                  <td className="p-4 text-sm text-gray-600">4.8/5</td>
                  <td className="p-4 text-sm text-gray-600">Best brightening</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 text-sm font-semibold" style={{ color: '#1a1a1a' }}>HydraBoost</td>
                  <td className="p-4 text-sm text-gray-600">Value</td>
                  <td className="p-4 text-sm text-gray-600">$</td>
                  <td className="p-4 text-sm text-gray-600">4.5/5</td>
                  <td className="p-4 text-sm text-gray-600">Best hydration</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-sm font-semibold" style={{ color: '#1a1a1a' }}>Gentle Start</td>
                  <td className="p-4 text-sm text-gray-600">Beginners</td>
                  <td className="p-4 text-sm text-gray-600">$$</td>
                  <td className="p-4 text-sm text-gray-600">4.6/5</td>
                  <td className="p-4 text-sm text-gray-600">Most gentle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 text-sm font-semibold" style={{ color: '#1a1a1a' }}>LuxeRetinol Pro</td>
                  <td className="p-4 text-sm text-gray-600">Anti-aging</td>
                  <td className="p-4 text-sm text-gray-600">$$$$</td>
                  <td className="p-4 text-sm text-gray-600">4.9/5</td>
                  <td className="p-4 text-sm text-gray-600">Best anti-wrinkle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BUYING GUIDE */}
        <section className="border border-gray-200 rounded-2xl p-8 my-12" style={{ background: 'linear-gradient(to bottom, #fff, #f8f9fa)' }}>
          <h2 
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            What to Look For (Buying Guide)
          </h2>
          
          {[
            { title: "Active Ingredients", desc: "Look for proven ingredients like Vitamin C, Hyaluronic Acid, Retinol, or Niacinamide. Check the concentration—higher isn't always better for beginners." },
            { title: "Your Skin Type", desc: "Oily skin benefits from lightweight, water-based serums. Dry skin needs richer, hydrating formulas. Sensitive skin should avoid fragrances and harsh acids." },
            { title: "Brand Reputation", desc: "Established brands often have better quality control and customer support. Check for clinical testing and dermatologist recommendations." },
            { title: "Price vs. Value", desc: "Expensive doesn't mean better. Many affordable serums contain the same active ingredients as luxury brands at a fraction of the cost." }
          ].map((item, i) => (
            <div key={i} className={`${i < 3 ? 'mb-6 pb-6 border-b border-gray-200' : ''}`}>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2.5" style={{ color: '#1a1a1a' }}>
                <span 
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm"
                  style={{ background: '#2F8F8B' }}
                >
                  {i + 1}
                </span>
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-9">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* 6. FAQ SECTION */}
        <section className="my-12">
          <h2 
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Frequently Asked Questions
          </h2>
          
          {[
            { q: "What is the best serum for beginners?", a: "For beginners, we recommend a gentle Hyaluronic Acid serum. It's hydrating, non-irritating, and works for all skin types. Start with a lower concentration and work your way up." },
            { q: "How often should I apply face serum?", a: "Most serums can be used twice daily—morning and night. However, active ingredients like Retinol should only be used at night, starting 2-3 times per week." },
            { q: "Can I use multiple serums at once?", a: "Yes, but layer them correctly: thinnest to thickest consistency. Wait 30 seconds between each. Avoid mixing Vitamin C with Retinol or AHAs/BHAs in the same routine." },
            { q: "Are expensive serums worth it?", a: "Not always. Many drugstore serums contain the same active ingredients as luxury brands. Focus on the ingredient list and concentration rather than price." }
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full bg-white p-5 text-left text-base font-semibold flex justify-between items-center transition-colors hover:bg-gray-50"
                style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}
              >
                {item.q}
                <span 
                  className="text-xl transition-transform duration-300"
                  style={{ color: '#2F8F8B', transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              {activeFaq === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed bg-white">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 7. EDITORIAL CTA */}
        <section 
          className="rounded-2xl p-10 text-center text-white my-12"
          style={{ background: 'linear-gradient(135deg, #2F8F8B 0%, #3da39f 100%)' }}
        >
          <h3 
            className="text-2xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Found This Guide Helpful?
          </h3>
          <p className="text-base opacity-90 max-w-md mx-auto mb-6 leading-relaxed">
            Join 50,000+ readers who get our weekly picks, tips, and exclusive deals delivered straight to their inbox.
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2.5 bg-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ color: '#2F8F8B', fontSize: '16px' }}
          >
            Subscribe to Our Newsletter
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </section>

      </article>
    </>
  );
};

export default BuyersGuidePreview;
