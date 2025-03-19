
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('py-16 md:py-20 bg-dark-900 text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-blue-500 font-bold text-2xl mr-1">•</span>
              <span className="text-white font-bold text-2xl tracking-tight">COFT</span>
            </div>
            <p className="text-white/60 mb-6">
              Transformando empresas através de soluções digitais inovadoras e estratégicas.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/70 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  aria-label={`COFT no ${social}`}
                >
                  {social === 'twitter' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" strokeWidth={2} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-500">Empresa</h4>
            <ul className="space-y-4">
              {['Sobre nós', 'Nosso time', 'Carreiras', 'Contato'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-500">Serviços</h4>
            <ul className="space-y-4">
              {['Automação', 'Análise de dados', 'Otimização de processos', 'Consultoria'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-500">Fale conosco</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-white/70">contato@coft.com</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-white/70">+55 (00) 00000-0000</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-white/70">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© COFT 2023. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Termos de Uso</a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
