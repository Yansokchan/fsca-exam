
import React, { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import QuestionList from '@/components/QuestionList';
import { questionsData } from '@/data/questions';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = useMemo(() => {
    if (!searchTerm.trim()) {
      return questionsData;
    }
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return questionsData.filter(question => 
      question.question.toLowerCase().includes(lowerCaseSearchTerm) ||
      question.answer.toLowerCase().includes(lowerCaseSearchTerm) ||
      question.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Knowledge Base</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search our database of 130 questions and get instant answers to your questions
          </p>
        </header>

        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        <div className="mt-6 text-sm text-gray-500 text-center">
          {filteredQuestions.length > 0 && (
            <p>Found {filteredQuestions.length} {filteredQuestions.length === 1 ? 'result' : 'results'}</p>
          )}
        </div>

        <QuestionList 
          questions={filteredQuestions} 
          searchTerm={searchTerm} 
        />
      </div>
    </div>
  );
};

export default Index;
