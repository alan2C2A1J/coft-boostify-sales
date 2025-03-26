
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TextRotatorProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenTexts?: number;
  prefix?: string;
}

const TextRotator = ({ 
  texts, 
  className,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenTexts = 1000,
  prefix = ''
}: TextRotatorProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (texts.length === 0) return;

    if (isTyping) {
      if (displayText.length < texts[currentTextIndex].length) {
        // Still typing the current text
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before erasing
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, delayBetweenTexts);
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        // Erasing the current text
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        // Finished erasing, move to next text
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [texts, currentTextIndex, displayText, isTyping, isPaused, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return (
    <span className={cn("text-rotate-wrapper relative", className)}>
      {prefix && <span className="mr-2">{prefix}</span>}
      <span className="inline-block min-h-[1.5em] relative text-orange-500">
        {displayText}
        <span className={cn(
          "inline-block w-[2px] h-[1em] bg-white ml-1 -mb-[2px] animate-pulse",
          isPaused && "opacity-0"
        )}></span>
      </span>
    </span>
  );
};

export default TextRotator;
