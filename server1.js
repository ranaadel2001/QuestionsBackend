const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let questions = [];

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.post('/questions', (req, res) => {
  const { question, choices, correctChoice } = req.body;
  const newQuestion = {
    id: Date.now(),
    question,
    choices,
    correctChoice
  };
  questions.push(newQuestion);
  res.json(newQuestion);
});

app.delete('/questions/:id', (req, res) => {
  const questionId = parseInt(req.params.id);
  questions = questions.filter((question) => question.id !== questionId);
  res.json({ message: 'Question deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
