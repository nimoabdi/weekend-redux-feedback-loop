const express = require('express');
const router = express.Router();
const pool =  require('../modules/pool');

const pool = require('../modules/pool');

// Get all Feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback";';
  pool.query(queryText).then(result => {

    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});