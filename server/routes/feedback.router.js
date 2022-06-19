const express = require('express');
const router = express.Router();
const pool =  require('../modules/pool');



// Get all Feedback
router.get('/', (req, res) => {
  pool.query('SELECT * FROM "feedback";').then((result) => {
    res.send(result.rows);
}).catch((error) => {
    console.log('Error GET /api/feedback', error);
    res.sendStatus(500);  
});
})

router.post('/', (req,res)=> {
  let 
})
module.exports = router;