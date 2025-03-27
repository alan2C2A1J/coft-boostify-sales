
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
    { 
      name: '1º dia', 
      value: '+228% faturamento', 
      widthWithCoft: '85%', 
      widthWithoutCoft: '15%', 
      icon: 'day',
      withCoft: "Com COFT",
      withoutCoft: "Sem COFT", 
    },
    { 
      name: '1ª semana', 
      value: '+118% faturamento', 
      widthWithCoft: '75%',
      widthWithoutCoft: '40%', 
      icon: 'flag',
      withCoft: "Com COFT",
      withoutCoft: "Sem COFT",  
    },
    { 
      name: '1º mês', 
      value: '+23% faturamento', 
      widthWithCoft: '23%',
      widthWithoutCoft: '85%', 
      icon: 'fast',
      withCoft: "Com COFT",
      withoutCoft: "Sem COFT",  
    }
  ];

  return (
    <section id="resultados" className={cn('py-32 bg-orange-500 text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionTransition>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              RESULTADOS COMPROVADOS
            </h2>
            <p className=" text-xl text-white/90 max-w-2xl mx-auto">
              Case de sucesso: <br />    
              <a 
              target='new' 
              className='text-[#406C80] text-blue hover:text-[#394D55] hover:scale-[1.04] transition-scale duration-200' 
              href="https://www.instagram.com/mmhamburguerias/">
                MM Hamburgueria
              </a>
            </p>
          </div>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <SectionTransition key={index} delay={200 * index}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  {result.icon === 'day' && (
                    <img 
                      src="/public/lovable-uploads/day.png" 
                      alt="1ª dia" 
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  {result.icon === 'flag' && (
                    <img 
                      src="/public/lovable-uploads/flag.png" 
                      alt="1ª semana" 
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  {result.icon === 'fast' && (
                    <img 
                      src="/public/lovable-uploads/fast.png" 
                      alt="1ª mês" 
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
                
                <h1 className="text-xl font-bold mb-4 text-center">{result.name}</h1>

                <p className="text-sm  mb-4 text-center">{result.withoutCoft}</p>
                <div className="bg-white/20 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    ref={el => progressBarsRef.current[index * 2] = el}
                    className="h-full rounded-full transition-all duration-1500 ease-out bg-white/90"
                    style={{ width: '0%' }} 
                    data-width={result.widthWithoutCoft}
                  ></div>
                </div>
                
                <p className="text-md mb-4 text-center"><span className="text-[#00b2ff]">{result.withCoft}</span></p>
                <div className="bg-white/20 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    ref={el => progressBarsRef.current[index * 2 + 1] = el}
                    className="h-full rounded-full transition-all duration-1500 ease-out bg-[#00b2ff]/90"
                    style={{ width: '0%' }} 
                    data-width={result.widthWithCoft}
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
