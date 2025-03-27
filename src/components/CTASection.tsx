
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
            
            <a 
                href="https://chat.whatsapp.com/EUDMCDnWSAt1PaLSD86RNw" 
                target="new" 
                rel="noopener noreferrer"
              >
                <AnimatedButton variant="secondary" className="px-8 py-4 text-lg">
                  ENTRAR NA LISTA DE ESPERA
                </AnimatedButton>
              </a>
            
            <p className="text-white/70 text-sm mt-6">
              Ao se inscrever, você concorda em receber comunicações da COFT sobre nossos produtos e serviços.
            </p>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default CTASection;
