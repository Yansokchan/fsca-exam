
import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';
import { QuestionAnswer } from '@/data/questions';

interface QuestionListProps {
  questions: QuestionAnswer[];
  searchTerm: string;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, searchTerm }) => {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  // Reset open question when search term changes
  useEffect(() => {
    setOpenQuestionId(null);
  }, [searchTerm]);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(prevId => prevId === id ? null : id);
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No questions found</h3>
        <p className="text-gray-500">Try a different search term or browse all questions.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          isOpen={openQuestionId === question.id}
          onClick={() => toggleQuestion(question.id)}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
};

export default QuestionList;
