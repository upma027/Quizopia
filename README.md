# 🎯 Quizopia – Online Quiz Platform

**Quizopia** is a full-featured web application built to empower educators by providing a user-friendly interface to create, schedule, and manage quizzes along with real-time interactions, leaderboards, and more.

🔗 **Live Preview**: [quizopia-jade.vercel.app](https://quizopia-jade.vercel.app)

---

## 🚀 Key Features

### 👩‍🏫 Admin Panel
- ✅ Accept or remove teacher requests.
- 📢 Add/View admin notices for all teachers (with date & time).
- 👥 View all registered teachers and students.

### 🧑‍🏫 Teacher Dashboard
- 📝 Create/Delete quizzes (based on branch & graduation year).
- 🗓️ Add questions, date, time, and duration for each quiz.
- 🏆 View rankings after quiz completion.
- 📢 Post/View notices for students (branch & graduation year-wise).
- 📬 View admin notices with timestamp.
- 🧑‍🎓 View all students.

### 🧑‍🎓 Student Dashboard
- 📚 View quizzes by teachers (filtered by branch & graduation year).
- ⏰ Participate in quizzes on scheduled date & time.
- 🏆 View quiz rankings (only if participated).
- 📢 View all teacher notices (with date & time).

### 📄 Quiz Window
- ⏳ Countdown timer & progress bar.
- 🧠 Question display (MCQs).
- 🛑 Auto-submission when time runs out.

### 🏅 Leaderboard
- 📊 Quiz-specific leaderboard sorted by marks.
- 🧑‍🎓 Displays name, score, and rank.

---

## 🌟 Extra Features

- 🧾 Single-Page Application (SPA) for seamless UX
- 🔐 Login/Signup with hashed passwords
- 🚪 Logout functionality
- 🔄 Real-Time updates using `socket.io`

---

## 🛠️ Tech Stack

### 🌐 Frontend:
- ⚛️ React.js
- 🧩 Redux Toolkit
- 🎨 HTML, CSS, JS
- 🎀 Bootstrap 5

### 🧰 Backend:
- 🟢 Node.js
- 🌿 MongoDB
- 🧠 Express.js
- 🧪 JWT + bcrypt

---

## 📦 How to Use

### 1. 🧬 Clone the repository
git clone https://github.com/upma027/Quizopia.git
cd Quizopia

### 2. 🔧 Install dependencies
npm install

###3. ⚙️ Backend Setup
cd backend
npm install

Create a .env file inside the backend/ directory and add:
MONGO_PROD_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret

###4. 🧠 Start the app
➤ Start Frontend
npm start

➤ Start Backend
cd backend
npm start
