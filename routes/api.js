const route = require('express');
const router = new route.Router();
const Item = require("../models").Item;


router.get("/data", (req, res) => {
  return res.json({
      success: true,
      message: 'You can see the data now!'
  });
})

router.post("/item", (req, res) => {
  Item.create({
    ...req.body
  }).then(function(newData) {
    console.log(newData.get());
  })
  return res.json({
    success: true,
    message: "You can see the data now!"
  })
});

router.get("/item", (req, res) => {
  Item.findAndCountAll()
  .then(data => {
    return res.status(200).json(data)
  })
  .catch(err => res.status(400).send(err))
});

module.exports = router;
