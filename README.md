
# 🚀 ShareX — Full Stack File Sharing Platform

ShareX is a full-stack web application built to enable seamless file sharing with secure authentication, real-time backend connectivity, and a scalable cloud deployment setup.

This project reflects a complete journey from development → debugging → deployment → live production.

---

# 🌐 Live Demo

* 🔗 Frontend (Netlify): *[Add your link]*
* 🔗 Backend (Render): *[Add your API URL]*

---

# 🧠 Tech Stack

### 💻 Frontend

* HTML / CSS / JavaScript *(or React if used)*

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (Cloud via MongoDB Atlas)

### ☁️ Deployment

* Frontend: Netlify
* Backend: Render

---

# ✨ Features

* 🔐 User Authentication (Register / Login)
* 🌐 REST API Integration
* ⚡ Live Frontend-Backend Communication
* ☁️ Cloud Deployment
* 🔒 Secure Environment Variables
* 📦 Scalable Project Structure

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/sharex.git
cd sharex
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Backend:

```bash
node server.js
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🔗 Environment Variables

### Frontend

For Vite:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

For React (CRA):

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

---

# 🚀 Deployment

## Backend (Render)

* Push backend to GitHub
* Create new Web Service on Render
* Add environment variables
* Deploy

---

## Frontend (Netlify)

* Import project from GitHub to Netlify
* Set build command:

```bash
npm run build
```

* Publish directory:

```
dist (Vite) / build (React)
```

---

## ⚠️ Important Fix (Routing Issue)

Create `netlify.toml` in root:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

# 🧩 Challenges Faced

* ❌ MongoDB connection issues
* ❌ Environment variables misconfiguration
* ❌ API not responding (`Cannot GET /api/auth`)
* ❌ Frontend not connecting to backend
* ❌ CORS errors
* ❌ Netlify 404 routing issue

---

# 🛠️ How These Were Solved

* ✅ Corrected `.env` setup
* ✅ Verified API routes
* ✅ Enabled CORS
* ✅ Used environment variables for API URLs
* ✅ Added `netlify.toml` for routing fix

---

# 🧠 Learnings

* Deployment is harder than development
* Debugging is the real skill
* Environment variables are critical
* Real-world projects require patience and persistence

---

# 🚀 Future Scope

* 📁 File upload & sharing system
* 👥 User dashboard
* 🔗 Shareable links
* 📊 Analytics
* 🔒 Advanced security

---

# 👨‍💻 Team

**Tomhackers** 💻🔥

* Ankit Singh Tomar
* Team Members *(Add names)*

---

# 📢 Upcoming

🚀 We are soon launching ShareX in **testing phase within our college**

👉 After testing, the platform will be available for the **entire college to use**

---

# ⭐ Support

If you like this project:
👉 Star the repo
👉 Share feedback
👉 Contribute

