const db = require("../db");
const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(err => {
        console.log(err)
    });
});

router.get("/:id", (req, res, next) => {
  db.findById(req.params.id)
    .then((response) => {
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err)
    });
});

router.post("/", (req, res, next) => {
  if (!req.body.title || !req.body.contents) {
    res
      .status(400)
      .json({ errorMessage: "You need a title and contents to post that." });
  } else {
    db.insert(req.body)
      .then((response) => {
         res.status(201).json(response);
      })
      .catch(err => {
        console.log(err)
    });
  }
});

router.put("/:id", (req, res, next) => {
  if (!req.body.title || !req.body.contents) {
     res
      .status(400)
      .json({ errorMessage: "You need a title and contents to change that." });
  } else {
    db.update(req.params.id, req.body)
      .then((response) => {
         res.status(200).json(response);
      })
      .catch(err => {
        console.log(err)
    });
  }
});

router.delete("/:id", (req, res, next) => {
  db.remove(req.params.id)
    .then((response) => {
       res.status(200).json(response);
    })
    .catch(err => {
        console.log(err)
    });
});


module.exports = router;
