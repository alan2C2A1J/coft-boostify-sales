
import React from 'react';
import { cn } from '@/lib/utils';

interface TextRotatorProps {
  texts: string[];
  className?: string;
}

const TextRotator = ({ texts, className }: TextRotatorProps) => {
  return (
    <span className={cn("text-rotate-wrapper", className)}>
      {texts.map((text, index) => (
        <span key={index}>{text}</span>
      ))}
    </span>
  );
};

export default TextRotator;
