
import React from 'react';
import SectionTransition from './SectionTransition';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className }: CTASectionProps) => {
  return (
    <section id="contato" className={cn('py-32 bg-blue-500 text-white relative overflow-hidden', className)}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionTransition>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ficou interessado?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Entre para nossa lista de espera e seja um dos primeiros a transformar seu negócio
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl mb-10">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <AnimatedButton variant="secondary" className="md:flex-shrink-0">
                  ENTRAR NA LISTA
                </AnimatedButton>
              </div>
            </div>
            
            <p className="text-white/70 text-sm">
              Ao se inscrever, você concorda em receber comunicações da COFT sobre nossos produtos e serviços.
            </p>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default CTASection;
