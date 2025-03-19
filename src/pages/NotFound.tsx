
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedButton from "@/components/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-900 px-6 text-center">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-blue-500 text-9xl font-bold mb-8">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Página não encontrada</h1>
        <p className="text-white/70 text-lg mb-10">
          Parece que você tentou acessar uma página que não existe ou foi removida.
        </p>
        <AnimatedButton onClick={() => window.location.href = "/"}>
          Voltar para Home
        </AnimatedButton>
      </div>
    </div>
  );
};

export default NotFound;
