
import React from 'react';
import AnimatedButton from './AnimatedButton';
import TextRotator from './TextRotator';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section 
      id="home"
      className={cn(
        'relative min-h-screen flex items-center bg-dark-900 overflow-hidden',
        className
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container max-w-7xl mx-auto px-6 md:px-8 py-24 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <TextRotator 
                prefix="Aumentamos"
                texts={[
                  "Suas Vendas",
                  "Seu Faturamento",
                  "Sua Presença de Marca"
                ]}
                typingSpeed={80}
                erasingSpeed={40}
                delayBetweenTexts={2000}
              />
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
              Na COFT, transformamos os dados da sua empresa em dinheiro no caixa.
            </p>
            <AnimatedButton href="https://wa.me/48988624435" >
              SAIBA MAIS
            </AnimatedButton>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative">
              {/* Shadow/reflection effect */}
              <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full filter blur-xl"></div>
              
              {/* Main image with glass morphism effect */}
              <div className="bg-gradient-to-tr from-white/10 to-white/5 p-1 rounded-xl border border-white/10 shadow-xl">
                <img 
                  // TODO: INSERIR IMAGEM
                  src="/public/lovable-uploads/b7b03d4b-b609-428f-aedb-a81e816a32eb.png" 
                  alt="Análise de dados financeiros" 
                  className="w-80 h-80 rounded-xl shadow-xl hover:scale-[1.05] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 mb-2">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
