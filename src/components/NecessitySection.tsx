
import React from 'react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

interface NecessitySectionProps {
  className?: string;
}

const NecessitySection = ({ className }: NecessitySectionProps) => {
  return (
    <section id="sobre" className={cn('py-32 bg-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionTransition>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              As necessidades fundamentais
            </h2>
            <p className="text-gray-600 text-lg">
              Entendemos o que é essencial para pessoas e empresas
            </p>
          </div>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <SectionTransition delay={200}>
            <div className="glass-card p-10 text-center transform transition-all duration-500 hover:shadow-2xl scale-card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient-blue">RESPIRAR</span> <br /> é a necessidade
              </h3>
              <p className="text-gray-600 text-lg">
                básica de todo ser humano
              </p>
            </div>
          </SectionTransition>

          <SectionTransition delay={400}>
            <div className="glass-card p-10 text-center transform transition-all duration-500 hover:shadow-2xl scale-card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient-orange">VENDER</span> <br />é a necessidade
              </h3>
              <p className="text-gray-600 text-lg">
                básica de toda empresa
              </p>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default NecessitySection;
