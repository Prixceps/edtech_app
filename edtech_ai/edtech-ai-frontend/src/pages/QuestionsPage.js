import React, { useState, useEffect } from "react";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]); // State to hold fetched questions
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track any errors

  // Fetch questions from the backend API when the component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/questions");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setQuestions(data); // Update the state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error); // Set error if there is a problem with fetching
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchQuestions(); // Call the fetch function
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading state while waiting for data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error if something goes wrong
  }

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.question_text}</p> {/* Update with your actual question fields */}
            <p>{question.answer_text}</p> {/* Update with your actual answer fields */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsPage;
