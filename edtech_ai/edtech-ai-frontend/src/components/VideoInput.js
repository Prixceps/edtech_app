import { useState } from "react";
import axios from "axios";

const VideoInput = ({ setSummary, setQuestions }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!videoUrl) return alert("Please enter a YouTube URL.");

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/process-video/", {
        video_url: videoUrl
      });

      setSummary(response.data.summary);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error("Error processing video", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 text-center">
      <input
        type="text"
        placeholder="Enter YouTube Video URL"
        className="border p-2 rounded-lg w-2/3"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 ml-4 rounded-lg"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Processing..." : "Generate"}
      </button>
    </div>
  );
};

export default VideoInput;
