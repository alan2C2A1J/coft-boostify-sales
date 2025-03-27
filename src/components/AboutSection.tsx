
import React from 'react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section id="servicos" className={cn('py-32 bg-dark-900 text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionTransition>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight">
              Na <span className="text-gradient-blue">COFT</span>, nós não criamos
              apenas <span className="text-gradient-blue">softwares()</span>;
            </p>
            <br /><br />
            <p className="text-2xl md:text-3xl lg:text-4xl leading-tight">
              Nós <span className="text-gradient-blue">C</span>riamos o <span className="text-gradient-blue">F</span>u<span className="text-gradient-blue">T</span>uro 🔮
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-transform duration-300 hover:transform hover:scale-105">
                <div className="bg-blue-500/20 w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Inovação</h3>
                <p className="text-white/70">Criamos soluções que antecipam o futuro, não apenas respondem ao presente.</p>
              </div>
              
              <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-transform duration-300 hover:transform hover:scale-105">
                <div className="bg-blue-500/20 w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Consistência</h3>
                <p className="text-white/70">Entregamos resultados sustentáveis que crescem com o seu negócio ao longo do tempo.</p>
              </div>
              
              <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-transform duration-300 hover:transform hover:scale-105">
                <div className="bg-blue-500/20 w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Impacto</h3>
                <p className="text-white/70">Transformamos dados em crescimento real, mensurável e significativo para o seu negócio.</p>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default AboutSection;
