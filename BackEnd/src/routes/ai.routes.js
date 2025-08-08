const express = require("express");
const router= express.Router();
const aiController = require('../controllers/ai.controller')


//route create or konsa controller chlega 
router.post('/get-review', aiController.getReview)


module.exports= router;
