
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
    { name: '1º dia', value: '+228% faturamento', width: '95%', icon: 'chart' },
    { name: '1ª semana', value: '+118% faturamento', width: '75%', icon: 'chart' },
    { name: '1º mês', value: '+23% faturamento', width: '40%', icon: 'chart' }
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
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  {result.icon === 'chart' && (
                    <img 
                      src="/public/lovable-uploads/5d2fd12b-7f28-4398-812a-a3ab4f68a958.png" 
                      alt="Estatística" 
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center">{result.name}</h3>
                
                <div className="bg-white/20 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    ref={el => progressBarsRef.current[index] = el}
                    className="h-full rounded-full transition-all duration-1500 ease-out bg-white"
                    style={{ width: '0%' }} 
                    data-width={result.width}
                  ></div>
                </div>
                
                <p className="text-2xl md:text-3xl font-bold text-center">{result.value}</p>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
