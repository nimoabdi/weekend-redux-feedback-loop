const express = require('express');
const router = express.Router();
const pool =  require('../modules/pool');



// Get all Feedback
// router.get('/', (req, res) => {
//   pool.query('SELECT * FROM "feedback";').then((result) => {
//     res.send(result.rows);
// }).catch((error) => {
//     console.log('Error GET /api/feedback', error);
//     res.sendStatus(500);  
// });
// })

router.post('/', (req, res)=> {
  const fetchReviews = req.body;
  console.log('adds feedback', req.body);

  const sqlText = `
    INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
    VALUES
    ($1, $2, $3, $4);
  `;
  const sqlValues = [
    fetchReviews.feeling,
    fetchReviews.understanding,
    fetchReviews.support,
    fetchReviews.comment
  ]
  pool.query(sqlText, sqlValues)
        .then((dbResult) => {
            console.log('added feedback to the database');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error making database', error);
            res.sendStatus(500);
        })
})


module.exports = router;