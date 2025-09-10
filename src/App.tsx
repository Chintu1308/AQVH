import React, { useEffect, useState } from 'react';
import { 
  FileText, 
  Play, 
  Camera, 
  ExternalLink, 
  MapPin,
  Zap,
  Users,
  Code,
  Atom,
  Cpu,
  Binary,
  Waves,
  Orbit,
  Sparkles
} from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Quantum Field Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Quantum Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Quantum Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Mouse Follower Quantum Effect */}
        <div 
          className="absolute w-96 h-96 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, rgba(147, 51, 234, 0.03) 50%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
      </div>

      {/* Hero Section - Quantum Superposition */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto relative z-10">
          {/* Quantum Logo */}
          <div className="mb-12 relative">
            <div className="relative inline-block">
              {/* Orbital Rings */}
              <div className="absolute inset-0 w-32 h-32 mx-auto">
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-2 border-2 border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-4 border-2 border-blue-400/25 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
              
              {/* Central Quantum Core */}
              <div className="relative z-10 w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/50 rounded-full flex items-center justify-center">
                <div className="relative">
                  <Atom className="w-16 h-16 text-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 w-16 h-16 text-purple-400 animate-ping opacity-20">
                    <Atom className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quantum Title */}
          <div className="mb-8 relative">
            <h1 className="text-7xl md:text-9xl font-black mb-4 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent blur-sm">
                WELCOME TO
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                WELCOME TO
              </span>
            </h1>
            
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black tracking-wider relative">
                <span className="absolute inset-0 text-white blur-sm opacity-50">
                  AQVH SEMI FINALS
                </span>
                <span className="relative bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  AQVH SEMI FINALS
                </span>
              </h2>
              
              {/* Quantum Interference Pattern */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed font-light">
            <span className="text-cyan-400">Quantum</span> computing meets <span className="text-purple-400">innovation</span>.<br />
            Where <span className="text-blue-400">possibilities</span> become <span className="text-cyan-400">reality</span>.
          </p>
          
          {/* Quantum Entanglement Visualization */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-20 h-px bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Quantum Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-cyan-400/50 rounded-full flex justify-center animate-bounce">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 w-8 h-12 border-2 border-purple-400/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Find Your Room - Quantum Navigation */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <MapPin className="w-20 h-20 text-cyan-400/30" />
              </div>
              <MapPin className="relative w-20 h-20 text-cyan-400" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quantum Navigation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Locate your designated <span className="text-cyan-400">quantum workspace</span> and begin your journey into the future of computing
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/your-room-allocation-file', '_blank')}
              className="group relative overflow-hidden"
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl px-12 py-6 group-hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <FileText className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 w-8 h-8 text-cyan-400 animate-ping opacity-20 group-hover:opacity-0"></div>
                  </div>
                  <span className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Find Your Room
                  </span>
                  <ExternalLink className="w-6 h-6 text-cyan-400/70 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Quantum Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Promo Video - Quantum Transmission */}
      <section className="py-24 px-6 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 animate-pulse">
                <Play className="w-20 h-20 text-purple-400/30" />
              </div>
              <Play className="relative w-20 h-20 text-purple-400" />
              <div className="absolute inset-0 w-20 h-20 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Transmission
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the <span className="text-purple-400">quantum realm</span> through our official promotional transmission
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Video Container with Quantum Effects */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 pointer-events-none"></div>
              
              {/* Video Frame */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 pointer-events-auto">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/by9vqdlF8Zg?si=Pe25ED_LfcpsLNli"
                    title="AQVH Semi Finals - Quantum Transmission"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Quantum Border Animation */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights - Quantum Superposition */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
                <Sparkles className="w-20 h-20 text-blue-400/30" />
              </div>
              <Sparkles className="relative w-20 h-20 text-blue-400" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                Quantum Highlights
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the most <span className="text-blue-400">extraordinary moments</span> from the quantum computing frontier
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Coming Soon Container */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                <div className="aspect-video flex flex-col items-center justify-center p-12">
                  {/* Quantum Loading Animation */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 border-4 border-blue-400/20 rounded-full animate-spin">
                      <div className="absolute top-0 left-0 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 border-4 border-cyan-400/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-blue-400 mb-4">Quantum State: Loading</h3>
                  <p className="text-gray-400 text-lg text-center max-w-md">
                    Highlights are currently in <span className="text-cyan-400">superposition</span>. 
                    They will collapse into reality shortly after the event.
                  </p>
                  
                  {/* Quantum Dots */}
                  <div className="flex space-x-2 mt-8">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Quantum Capture */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 animate-pulse">
                <Camera className="w-20 h-20 text-green-400/30" />
              </div>
              <Camera className="relative w-20 h-20 text-green-400" />
              <div className="absolute -inset-2 border-2 border-green-400/20 rounded-full animate-ping"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capture and preserve the <span className="text-green-400">quantum moments</span> that define the future of computing
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://drive.google.com/drive/folders/1td0O0OEGxiAw4BvBW0RLzqcgBeAUxEdy', '_blank')}
              className="group relative overflow-hidden"
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-green-400/30 rounded-2xl px-12 py-6 group-hover:border-green-400/60 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Camera className="w-8 h-8 text-green-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 w-8 h-8 text-green-400 animate-ping opacity-20 group-hover:opacity-0"></div>
                  </div>
                  <span className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Quantum Gallery
                  </span>
                  <ExternalLink className="w-6 h-6 text-green-400/70 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Flash Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping rounded-2xl"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Developer Section - Quantum Creator */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
                <Code className="w-20 h-20 text-purple-400/30" />
              </div>
              <Code className="relative w-20 h-20 text-purple-400" />
              <div className="absolute -inset-4 border border-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Developed By
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Crafted with <span className="text-purple-400">quantum precision</span> and modern web technologies
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://chintu1308.github.io/bhhc/', '_blank')}
              className="group relative overflow-hidden"
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30 rounded-2xl px-12 py-6 group-hover:border-purple-400/60 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Code className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 w-8 h-8 text-purple-400 animate-ping opacity-20 group-hover:opacity-0"></div>
                  </div>
                  <span className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    Visit Developer
                  </span>
                  <ExternalLink className="w-6 h-6 text-purple-400/70 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Quantum Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Quantum Footer */}
      <footer className="py-12 px-6 relative border-t border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Quantum Separator */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-16 h-px bg-gradient-to-r from-blue-400 via-transparent to-transparent"></div>
          </div>
          
          <p className="text-gray-400 text-lg">
            © 2025 <span className="text-cyan-400">AQVH Semi Finals @gvpcoe</span> • 
            <span className="text-purple-400"> Quantum Computing</span> • 
            <span className="text-blue-400"> The Future</span>
          </p>
          
          <p className="text-gray-500 text-sm mt-2">
            "In the quantum realm, all possibilities exist simultaneously"
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;