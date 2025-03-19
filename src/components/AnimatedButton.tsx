
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const AnimatedButton = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: AnimatedButtonProps) => {
  return (
    <button 
      className={cn(
        'relative overflow-hidden font-semibold py-3 px-8 rounded-full transition-all duration-300 transform',
        'hover:scale-[1.02] active:scale-[0.98] shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50',
        variant === 'primary' 
          ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/25 focus:ring-blue-500' 
          : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25 focus:ring-orange-500',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: variant === 'primary' 
            ? 'linear-gradient(90deg, rgba(14,165,233,1) 0%, rgba(2,132,199,1) 100%)' 
            : 'linear-gradient(90deg, rgba(249,115,22,1) 0%, rgba(234,88,12,1) 100%)'
        }}
      />
    </button>
  );
};

export default AnimatedButton;
