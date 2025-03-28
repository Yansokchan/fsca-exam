
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { QuestionAnswer } from '@/data/questions';
import { cn } from '@/lib/utils';

interface QuestionItemProps {
  question: QuestionAnswer;
  isOpen: boolean;
  onClick: () => void;
  searchTerm: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ 
  question, 
  isOpen, 
  onClick, 
  searchTerm 
}) => {
  // Function to highlight matching search terms
  const highlightText = (text: string, term: string) => {
    if (!term.trim()) return text;
    
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-blue-100 text-blue-800 font-medium">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
      <button 
        onClick={onClick}
        className={cn(
          "w-full px-6 py-4 flex justify-between items-center text-left transition-colors", 
          isOpen ? "bg-blue-50" : "bg-white hover:bg-gray-50"
        )}
      >
        <h3 className="text-lg font-medium mr-4">
          {highlightText(question.question, searchTerm)}
        </h3>
        <div className="flex-shrink-0 text-blue-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-accordion-down">
          <p className="text-gray-700 leading-relaxed">{question.answer}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
