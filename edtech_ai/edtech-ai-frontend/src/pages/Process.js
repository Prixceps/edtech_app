import React, { useState } from "react";

const Process = () => {
  const [videoURL, setVideoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/api/process/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ video_url: videoURL }),
      });

      if (!res.ok) throw new Error("Failed to process the video.");

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Process Video</h1>
        <p className="text-gray-500 text-center mb-6">Enter a YouTube video link to generate questions.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter YouTube Video URL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Generate Questions"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {response && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Summary:</h2>
            <p className="text-gray-600">{response.summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Process;
