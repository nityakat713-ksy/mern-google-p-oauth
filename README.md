# MERN Google OAuth Authentication

A full-stack MERN application demonstrating secure **Google OAuth 2.0 authentication** using **Passport.js**, **Express Sessions**, and **MongoDB Atlas**. Users can sign in with their Google account, access a protected dashboard, and securely maintain authenticated sessions.

---

## ✨ Features

- 🔐 Google OAuth 2.0 authentication
- 🛡️ Passport.js session-based authentication (No JWT)
- 👤 User information stored in MongoDB Atlas
- 🚫 Protected dashboard route
- 🔄 Persistent login sessions
- 🚪 Secure logout functionality
- ⚛️ React frontend built with Vite
- 🌐 Express.js backend with MongoDB

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- Passport.js
- express-session
- Mongoose
- MongoDB Atlas
- Google OAuth 2.0

---

## 📁 Project Structure

```
googlepassport/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── passport.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/nityakat713-ksy/mern-google-p-oauth.git
```

### 2. Navigate into the project

```bash
cd mern-google-p-oauth
```

### 3. Install root dependencies

```bash
npm install
```

### 4. Install backend dependencies

```bash
cd server
npm install
```

### 5. Install frontend dependencies

```bash
cd ../client
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

CLIENT_URL=http://localhost:5173

CALLBACK_URL=http://localhost:5000/auth/google/callback
```

---

## ▶️ Running the Application

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User clicks **Continue with Google**
2. Passport.js redirects to Google's OAuth screen
3. User grants permission
4. Google returns the authenticated user
5. Passport creates a session
6. User is redirected to the protected dashboard
7. User can securely log out

---

## 📸 Screenshots

### Login Page

![image alt](https://github.com/nityakat713-ksy/mern-google-p-oauth/blob/94487fdc6202d15a362fc3e99591cd545e0887e1/Screenshot%202026-07-22%20011221.png)

### Dashboard

dashboard-reference

---

## 📚 Learning Objectives

This project demonstrates:

- Google OAuth integration
- Passport.js authentication
- Express Sessions
- Protected routes
- MongoDB Atlas integration
- MERN stack architecture
- Session management
- Backend and frontend communication using Axios

---

## 👩‍💻 Author

**Nitya K**

GitHub: https://github.com/nityakat713-ksy

---

## 📄 License

This project is created for educational purposes as part of a MERN Stack assignment.
