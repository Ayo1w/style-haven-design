const ElementorPreview = () => {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&auto=format&fit=crop&q=80')`,
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(47, 143, 139, 0.85) 0%, rgba(47, 143, 139, 0.7) 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-8 py-16 text-center">
        <h1 
          className="text-white mb-5 leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
          }}
        >
          Smart Living for Every Woman
        </h1>
        
        <h2 
          className="text-white/90 mb-9 leading-relaxed"
          style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 400,
          }}
        >
          Your daily destination for wellness, beauty, home inspiration, fitness, style, and everything that makes life feel a little more joyful, confident, and effortless.
        </h2>
        
        <div className="flex flex-wrap gap-5 justify-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#2F8F8B] text-white font-semibold rounded transition-all duration-300 hover:bg-[#268580] hover:-translate-y-0.5 hover:shadow-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', minWidth: '280px' }}
          >
            Start Exploring
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
          
          <a 
            href="#"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#333] font-semibold rounded border border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', minWidth: '280px' }}
          >
            Discover Today's Top Picks
          </a>
        </div>
      </div>
    </section>
  );
};

export default ElementorPreview;
