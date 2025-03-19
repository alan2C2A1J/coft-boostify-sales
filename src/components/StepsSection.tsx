
import React from 'react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

interface StepsSectionProps {
  className?: string;
}

const StepsSection = ({ className }: StepsSectionProps) => {
  const steps = [
    {
      title: "MAPEAMENTO",
      description: "Identificamos os processos atuais da sua empresa, pontos de atrito e oportunidades de otimização através de uma análise detalhada e personalizada.",
      icon: "map",
    },
    {
      title: "ANÁLISE",
      description: "Processamos dados relevantes para identificar padrões, comportamentos e oportunidades estratégicas que podem transformar seu negócio.",
      icon: "search",
    },
    {
      title: "AUTOMAÇÃO",
      description: "Implementamos soluções tecnológicas personalizadas que automatizam processos, aumentam eficiência e impulsionam seus resultados comerciais.",
      icon: "zap",
    },
  ];

  return (
    <section className={cn('py-32 bg-dark-900 text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionTransition>
          <div className="text-center mb-20">
            <p className="text-xl text-white/80 mb-4">
              Esses resultados foram obtidos através de
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
              3 passos simples:
            </h3>
          </div>
        </SectionTransition>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <SectionTransition key={index} delay={200 * index}>
              <div className={cn(
                "flex flex-col md:flex-row items-center gap-16",
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              )}>
                <div className="flex-1">
                  <div className={cn("text-left", index % 2 === 1 ? "md:text-right" : "")}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-6">
                      {step.icon === "map" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      )}
                      {step.icon === "search" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                      {step.icon === "zap" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-500">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    {/* Glass card effect for image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-blue-500/5 rounded-2xl transform rotate-3 scale-105 blur-xl"></div>
                    <div className="bg-dark-800/60 backdrop-blur-md p-1 rounded-2xl border border-white/10 shadow-2xl relative transform transition-all duration-500 hover:scale-105">
                      <div className="bg-gradient-to-tr from-blue-500/20 via-dark-800/40 to-dark-800/60 rounded-xl overflow-hidden">
                        <img 
                          src="/public/placeholder.svg" 
                          alt={step.title} 
                          className="w-full max-w-md object-cover h-64 md:h-80 mix-blend-luminosity opacity-90"
                        />
                      </div>
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
