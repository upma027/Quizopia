require("dotenv").config();
const express = require("express");
const app = express();
const DB = require('./db');
const cookieParser = require("cookie-parser");
const cors = require("cors");

// ✅ MUST be first middleware
app.use(cors({
    origin: "https://quizopia-jade.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Handle preflight requests
app.options("*", cors({
    origin: "https://quizopia-jade.vercel.app",
    credentials: true
}));

const { createServer } = require('node:http');
const server = createServer(app);
const { Server } = require('socket.io');

// ✅ Socket.io CORS setup
const io = new Server(server, {
    cors: {
        origin: "https://quizopia-jade.vercel.app",
        methods: ["GET", "POST"],
        credentials: true
    }
});

// ✅ Start server
server.listen(4000, () => {
    console.log("App Started on port 4000");
});

// ✅ Connect DB
DB();

// ✅ Socket events
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected ' + socket.id);
    });

    socket.on('noticeAdded', () => io.emit('refreshNotice'));
    socket.on('quizAdded', () => io.emit('refreshQuiz'));
    socket.on('addedAdminNotice', () => io.emit('refreshAdminNotice'));
    socket.on('newUser', () => io.emit('refreshUser'));
    socket.on('updateLeaderboard', () => io.emit('refreshLeaderboard'));
    socket.on('adminAction', () => io.emit('refreshAdminAction'));
});

// ✅ Routes
const studentRouter = require('./Routes/studentRoutes');
const teacherRoutes = require('./Routes/teacherRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const loginRoutes = require('./Routes/loginRoutes');
const quizRoute = require("./Routes/quizRoutes");
const leaderBoardRoute = require("./Routes/leaderBoardRoutes");

app.use("/login", loginRoutes);
app.use("/student", studentRouter);
app.use("/teacher", teacherRoutes);
app.use("/admin", adminRoutes);
app.use("/quiz", quizRoute);
app.use("/leaderBoard", leaderBoardRoute);

// ✅ Protect middleware
function protectStudent(req, res, next) {
    try {
        const token = req.cookies.isStudent;
        if (token) next();
        else res.status(401).json({ message: "Invalid Auth" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

function protectTeacher(req, res, next) {
    try {
        const token = req.cookies.isTeacher;
        if (token) next();
        else res.status(401).json({ message: "Invalid Auth" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

function protectAdmin(req, res, next) {
    try {
        const token = req.cookies.isAdmin;
        if (token) next();
        else res.status(401).json({ message: "Invalid Auth" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
