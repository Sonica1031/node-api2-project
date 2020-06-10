const db = require("../db");
const express = require("express")
const router = express.Router();

router.get('/comments/:postId', (req, res) => {
    db.findPostComments(req.params.postId)
    .then(response => {
        res.status(200).json(response)
    .catch(err => {
        console.log(err);
    })
    })
})

router.post('/comments', (req, res) => {
    if(!req.body.text){
        res.status(400).json({errorMessage:"Must enter text to comment"})
    }else{
    db.insertComment(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err =>{
        console.log(err)
    })
    }
})

module.exports = router