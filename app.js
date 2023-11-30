const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Посилання на ваш файл db.js

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ручки та логіка CRUD тут


// ...

// CREATE (створення нового курсу)
app.post('/courses', (req, res) => {
    const { course_name, duration_weeks, cost } = req.body;
    const query = 'INSERT INTO courses (course_name, duration_weeks, cost) VALUES (?, ?, ?)';
    db.query(query, [course_name, duration_weeks, cost], (err, result) => {
      if (err) {
        res.status(500).send('Error creating a new course.');
        return;
      }
      res.status(201).json({ id: result.insertId, message: 'Course created successfully.' });
    });
  });
  
  // READ (отримання всіх курсів)
  app.get('/courses', (req, res) => {
    const query = 'SELECT * FROM courses';
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving courses.');
        return;
      }
      res.status(200).json(result);
    });
  });
  
  // ...
  
  // Додайте подібний код для оновлення (UPDATE) та видалення (DELETE)
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
