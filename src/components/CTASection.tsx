
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
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl mb-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/public/lovable-uploads/dbbd0e9c-11d8-411a-9a43-a9c73d7a7266.png"
                  alt="Chat"
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              <a 
                href="https://chat.whatsapp.com/EUDMCDnWSAt1PaLSD86RNw" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AnimatedButton variant="secondary" className="px-8 py-4 text-lg">
                  ENTRAR NA LISTA DE ESPERA
                </AnimatedButton>
              </a>
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
