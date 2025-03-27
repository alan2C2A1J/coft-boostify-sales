import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('py-10 bg-dark-900 text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              
              <img 
                src="/public/lovable-uploads/logo965x1152.svg" 
                alt="Análise de dados financeiros" 
                className="w-6 h-6 rounded-full shadow-lg transform transition-transform duration-700 hover:scale-[1.02]"
              />
              <span className="text-white font-bold text-2xl tracking-tight ml-2">COFT</span>
            </div>
            
            <p className="text-white/60 mb-4">
              <span style={{ color: '#00b2ff' }}>C</span>riando o <span style={{ color: '#00b2ff' }}>F</span>u<span style={{ color: '#00b2ff' }}>T</span>uro
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                 { social:'facebook', href: 'https://www.facebook.com/coft.tec' },
                 { social:'instagram', href: 'https://www.instagram.com/coft.solutions/' },
                 { social:'linkedin', href: 'https://www.linkedin.com/company/coft/' },
                ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target='new' 
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/70 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  aria-label={`COFT no ${social.social}`}
                >
                  {social.social === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {social.social === 'instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  )}
                  {social.social === 'linkedin' && (
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
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Parceiros e Apoiadores</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { src: '/public/lovable-uploads/nascer.png', alt: 'Programa Nascer' },
                { src: '/public/lovable-uploads/inovativa.svg', alt: 'Inovativa Brasil' },
                { src: '/public/lovable-uploads/microsoft.png', alt: 'Microsoft for Startups' },
                { src: '/public/lovable-uploads/mongo.png', alt: 'MongoDB for Startups' },
                { src: '/public/lovable-uploads/aws.svg', alt: 'AWS Startups' },
                { src: '/public/lovable-uploads/acate.png', alt: 'Acate Startups' },
              ].map((partner, index) => (
                <div key={index} className="flex justify-center items-center p-2">
                  <img src={partner.src} alt={partner.alt} className="max-h-12" />
                </div>
              ))}
            </div>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Empresa</h4>
            <ul className="space-y-2 ">
            {[
                { label: 'Sobre nós', href: '#sobre' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Resultados', href: '#resultados' },
                { label: 'Contato', href: '#contato' },
                ].map((item, index) => (
                    <li key={index} className="hover:scale-[1.04]">
                      <a href={item.href} className="text-white/70 hover:text-white  transition-colors duration-200">{item.label}</a>
                    </li>
                  ))}
            </ul>
          </div>
          

          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-500">Fale conosco</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <a href="mailto:contato@coft.com.br" className="text-white/70 hover:text-white hover:scale-[1.04] transition-colors duration-200 ">contato@coft.com.br</a>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <a target='new' href="https://wa.me/5548988624435" className="text-white/70 hover:text-white hover:scale-[1.04] transition-colors duration-200">(48) 98862-4435</a>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span className="text-white/70">Florianópolis - SC, Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© 2025 All Rights Reserved. <br />Made with love by <strong><a href="#home" className="hover:text-white hover:scale-[1.04]">Coft!</a></strong></p>
          <div className="flex space-x-6">
            {/* 
            <a target='new' href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Termos de Uso</a>
            <a target='new' href='#' className="text-white/50 text-sm hover:text-white transition-colors duration-200">Política de Privacidade</a> 
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
