🐶 Dog Breed Classifier (Azure AI)

A full-stack AI-powered web application that classifies dog breeds from uploaded images using Microsoft Azure Custom Vision.

---

🚀 Features

- 📁 Upload image of a dog
- 🖼️ Instant image preview
- 🤖 AI-based breed prediction
- 🔐 Secure API integration via backend
- ⏳ Loading state & button disable to prevent multiple requests
- 🎨 Clean and responsive UI using Tailwind CSS

---

🛠️ Tech Stack

Frontend:

- React (Vite)
- Tailwind CSS

Backend:

- Node.js
- Express.js

AI Service:

- Microsoft Azure Custom Vision

Other Tools:

- Multer (file upload handling)
- dotenv (environment variables)

---

🧠 How It Works

1. User uploads an image from the frontend
2. Image is sent to the backend ("/predict" endpoint)
3. Backend securely forwards the image to Azure Custom Vision API
4. Azure returns prediction results
5. Frontend displays the predicted dog breed with confidence score
---

⚙️ Setup Instructions

🔹 Clone the repository

git clone <your-repo-url>
cd project-root

---

🔹 Backend Setup

cd backend
npm install

Create a ".env" file:

PORT=5000 || anyPort  
AZURE_ENDPOINT=your_prediction_url
AZURE_KEY=your_prediction_key

Run backend:

node server.js

---

🔹 Frontend Setup

cd frontend
npm install
npm run dev

---

🌐 API Endpoint

POST /predict

Request:

- Form-data → "image" (file)

Response:

{
  "predictions": [
    {
      "tagName": "Labrador",
      "probability": 0.95
    }
  ]
}

---

🚀 Deployment

- Frontend deployed on Vercel
- Backend deployed on Render

---

💡 Key Learnings

- Handling image uploads using Multer
- Working with Azure Custom Vision API
- Managing environment variables securely
- Solving CORS and deployment issues
- Building full-stack AI applications

---

📌 Future Improvements

- 📊 Show top 3 predictions with confidence bars
- 📂 Drag & drop image upload
- 🌐 Fully responsive design
- 🧠 Support for multiple AI models

---

👨‍💻 Author

Karan Bhatt

---

⭐ If you like this project, consider giving it a star!