# Quizopia

Developed a comprehensive platform designed to empower educators by providing a clear and user-friendly interface for sharing and conducting quizzes and various class activities.

Key Features:

- Quiz Management: Enabled the creation and scheduling of quizzes with specific times and dates, including multiple-choice questions.
- Real-Time Updates: Integrated socket.io for real-time updates and interactions.
- Automatic Submission: Implemented automatic quiz submission upon time completion.
- Leaderboard: Developed a dynamic leaderboard to display quiz results and rankings.
- Admin Control: Provided admin functionalities to grant or deny teachers access to the platform, ensuring secure and controlled usage.


 * <h4>Admin:-</h1>
- Accept/Remove the Teacher's request to work on it.
- Add/View Notice for All Teachers (with Date and Time)
- View All Teacher and Student


* <h4>Teacher:-</h1>
- Add/Delete Quiz (according to their Branch and Graduation Year)
- Add Question, Date and Time and Duration
- View Ranking after the Quiz End
- Add/View Notice for Student (according to their Branch and Graduation Year)
- View Admin Notice (with Date and Time)
- View All Student


* <h4>Student:-</h1>
- View All Teacher Quiz  (according to each student Branch and Graduation Year)
- Take Part in Quiz as per the quiz date and Time
- View Quiz Ranking (if participated in that quiz)
- View All Teacher Notices (with Date and Time)

* <h4>Quiz Window:-</h1>
- Quiz Timer and Progress Bar
- Auto Submission of quiz
- Question Details 

* <h4>LeaderBoard:-</h1>
- Quiz Details
- Ranking are sorted according to the marks 

## Extra Features of Application :
- Single webPage Website
- Login and Register with hash Password
- Logout

## Tools used 
### FrontEnd part :
- HTML/CSS/JS
- React Js
- Bootstrap 5
- Redux/Redux toolkit

### BackEnd Part :
- Node js
- MongoDB


## How To Use

To clone and run this Website, you'll need [Git](https://git-scm.com) and [Node](https://nodejs.org/en/download/) installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/upma027/Quizopia.git
# Go into the repository
$ cd Quizopia
# Install dependencies
$ npm install
```

Create .env.local file in side backend folder and add following text with your own api key.
```
 MONGO_PROD_URI= "Your MongoDB connection link"
 JWT_KEY="jwt key "
```
Start frontend with following command.
```
$ npm start
```
Start backend with following command.
```
$ cd backend
$ npm start
```
