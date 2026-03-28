import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setResult("");
  };

  const handlePredict = async () => {
    if (!file) return alert("Please choose an image");

    setLoading(true);
    setResult("Predicting...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data); // 🔍 debug

      if (!data.predictions || data.predictions.length === 0) {
        setResult("No prediction returned");
      } else {
        const top = data.predictions[0];
        setResult(`${top.tagName} (${(top.probability * 100).toFixed(2)}%)`);
      }
    } catch (err) {
      console.error(err);
      setResult("Error predicting image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[550px] text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Dog Breed Classifier 🐶
        </h1>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 flex flex-col items-center gap-4">
          {/* File Button */}
          <label className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg cursor-pointer transition">
            Choose File
            <input type="file" onChange={handleUpload} className="hidden" />
          </label>

          {/* File name */}
          {file && <p className="text-sm text-gray-600">{file.name}</p>}

          {/* 🔥 Image Preview */}
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-40 h-40 object-cover rounded-lg border"
            />
          )}

          {/* Button */}
          <button
            onClick={handlePredict}
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white transition cursor-pointer
      ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
    `}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>

        <p className="text-lg font-medium text-gray-700">
          {result || "Prediction will appear here"}
        </p>
      </div>
    </div>
  );
}

export default App;
