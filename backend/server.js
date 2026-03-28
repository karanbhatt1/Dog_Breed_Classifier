import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const azure_key = process.env.AZURE_KEY;
const azure_end_point = process.env.AZURE_ENDPOINT || "error";

const app = express();
const upload = multer();

app.use(cors({
  origin:"*"
}));

app.get("/",(req,res)=>{
    res.send("<h1> Back End Running</h1>");
});
    
app.post("/predict", upload.single("image"), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    console.log(req.file);

    const response = await fetch(azure_end_point, {
      method: "POST",
      headers: {
        "Prediction-Key": azure_key,
        "Content-Type": "application/octet-stream"
      },
      body: imageBuffer
    });

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("FULL ERROR:", error);
    res.status(500).json({ error: "Prediction failed" });
  }
});


app.listen(port, () => {
    console.log("HELLO");
    console.log("PORT:", process.env.PORT);
    console.log(`Server running on http://localhost:${port}`);
});