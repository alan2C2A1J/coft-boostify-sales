
import React, { useEffect, useRef } from 'react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

interface ResultsSectionProps {
  className?: string;
}

const ResultsSection = ({ className }: ResultsSectionProps) => {
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            target.style.width = target.dataset.width || '0%';
          }
        });
      },
      { threshold: 0.1 }
    );

    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const results = [
    { name: 'Ticket', value: '+220%', width: '90%', icon: 'receipt' },
    { name: 'Clientes', value: '+160%', width: '75%', icon: 'users' },
    { name: 'Filas', value: '-33%', width: '40%', icon: 'clock', isReduction: true }
  ];

  return (
    <section id="resultados" className={cn('py-32 bg-orange-500 text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionTransition>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              RESULTADOS COMPROVADOS
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Caso de sucesso: MSM Hamburgueria
            </p>
          </div>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <SectionTransition key={index} delay={200 * index}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  {result.icon === 'receipt' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                  {result.icon === 'users' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {result.icon === 'clock' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center">{result.name}</h3>
                
                <div className="bg-white/20 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    ref={el => progressBarsRef.current[index] = el}
                    className={`h-full rounded-full transition-all duration-1500 ease-out ${result.isReduction ? 'bg-green-400' : 'bg-white'}`}
                    style={{ width: '0%' }} 
                    data-width={result.width}
                  ></div>
                </div>
                
                <p className="text-2xl md:text-3xl font-bold text-center">{result.value}</p>
                <p className="text-sm text-center text-white/80 mt-2">
                  {result.isReduction ? 'Redução no tempo de espera' : 'Crescimento após implementação'}
                </p>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
