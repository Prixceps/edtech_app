const Assignment = ({ questions }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold">Generated Questions</h2>
      <ul className="mt-2">
        {questions.map((q, index) => (
          <li key={index} className="mt-2">
            <b>Q{index + 1}:</b> {q}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignment;
