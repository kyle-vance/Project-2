const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

router.get('/tracker', (req, res) => {
    fs.readFile('../db/tracker.json','utf8', (err,data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
})

router.post('/tracker', (req, res) => {
    fs.readFile('../db/tracker.json', 'utf8', (err,data) => {
      if (err) throw err;
      const newTracker = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
      };
      const db = JSON.parse(data);
      db.push(newTracker);

      fs.writeFile('../db/tracker.json', JSON.stringify(db, null, 2), (err) => {
        if (err) throw err;
        res.json(db);
      });
    });
  });

  router.get("/tracker", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assests/tracker.html"))
  });

  module.exports = router;