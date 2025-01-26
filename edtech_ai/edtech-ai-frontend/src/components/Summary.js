const Summary = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold">Lecture Summary</h2>
      <p className="mt-2 text-gray-700">{summary}</p>
    </div>
  );
};

export default Summary;

