
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedButton from './AnimatedButton';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-lg py-4 shadow-md' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-blue-500 font-bold text-2xl mr-1"></span>
            <img 
              src="/public/lovable-uploads/logo965x1152.svg" 
              alt="Análise de dados financeiros" 
              className="w-8 h-8 rounded-full shadow-lg transform transition-transform duration-700 hover:scale-[1.02]"
            />
            <span className="text-blue-500 font-bold text-2xl mr-1"></span>  
            <span className="text-white font-bold text-2xl tracking-tight">COFT</span>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-[1.04]">Home</a>
            <a href="#sobre" className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-[1.04]">Sobre</a>
            <a href="#servicos" className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-[1.04]">Serviços</a>
            <a href="#resultados" className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-[1.04]">Resultados</a>
            <a href="#contato" className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-[1.04]">Contato</a>
          </nav>
          <AnimatedButton variant='secondary' href="https://web.atommotion.de/">
              LOGIN
            </AnimatedButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
