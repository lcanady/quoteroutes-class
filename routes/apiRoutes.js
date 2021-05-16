const router = require("express").Router();
const quotes = require("../quotes.json");

// router.get("/", (req, res) => {
//   res.status(200).json(quotes);
// });

router.get("/:id?", (req, res) => {
  if (req.params.id)
    return res.status(200).json({ quote: quotes[req.params.id] });
  res.status(200).json(quotes);
});

router.get("/random", (req, res) => {
  const qoute = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json({ qoute });
});

module.exports = router;
