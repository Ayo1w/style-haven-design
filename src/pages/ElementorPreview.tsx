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
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#"
            className="inline-block px-8 py-3.5 bg-white text-[#2F8F8B] font-semibold rounded-md transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px' }}
          >
            Start Exploring
          </a>
          
          <a 
            href="#"
            className="inline-block px-8 py-3.5 bg-transparent text-white font-semibold rounded-md border-2 border-white/80 transition-all duration-300 hover:bg-white/10 hover:border-white"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px' }}
          >
            Discover Today's Top Picks
          </a>
        </div>
      </div>
    </section>
  );
};

export default ElementorPreview;
