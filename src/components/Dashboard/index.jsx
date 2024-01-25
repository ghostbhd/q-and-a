import React, { useEffect, useState } from "react";
import { QuestionsApi } from "../../data/Api";

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await QuestionsApi();
      setQuestions(response);
    };
    fetchQuestions();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-6/12 p-4 h-full flex flex-col overflow-hidden overflow-y-auto gap-2">
        {questions.map((question, index) => (
          <div key={index} className="flex w-full justify-between items-center p-8 border-2 rounded-3xl border-gray-200">
            <div className="w-8/12 text-gray-800">{question.title}</div>
            <div className="w-3/12 text-right text-gray-400">{question.distance}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
