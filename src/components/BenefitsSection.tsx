
import React from 'react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

interface BenefitsSectionProps {
  className?: string;
}

const BenefitsSection = ({ className }: BenefitsSectionProps) => {
  return (
    <section className={cn('py-32 bg-gray-50', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionTransition>
          <h2 className="text-3xl md:text-4xl  text-center mb-16 tracking-tight">
            <span className="text-gradient-blue font-bold">Aumentamos</span> seu <span className="font-bold text-gradient-blue">faturamento</span> e<br/>
            <span className="text-gradient-orange font-bold">Economizamos</span> seu <span className=" font-bold text-gradient-orange">tempo</span>
            <p className="text-gray-600 text-lg mt-6"> 
              Seus consumidores podem e irão comprar novamente de você, basta você se comunicar com eles, do
            jeito certo, na hora certa e no momento certo
            </p>
          </h2>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <SectionTransition delay={200}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100 scale-card-hover">
              <h3 className="text-2xl font-bold mb-8 text-dark-900">Sem a COFT</h3>
              <ul className="space-y-5">
                {[
                  "Processos manuais e demorados",
                  "Baixa visibilidade dos resultados",
                  "Decisões baseadas em intuição, não na realidade",
                  "Dificuldade em escalar operações",
                  "Perda de oportunidades de vendas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-0.5">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionTransition>

          <SectionTransition delay={400}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100 scale-card-hover">
              <h3 className="text-2xl font-bold mb-8 text-dark-900">Com a COFT</h3>
              <ul className="space-y-5">
                {[
                  "Automação inteligente de processos",
                  "Relatórios em tempo real e análises detalhadas",
                  "Decisões estratégicas orientadas por dados",
                  "Crescimento escalável e sustentável",
                  "Aumento significativo na conversão de vendas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-0.5">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
