var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello Fam!",
    user: "Jory",
    added: new Date(),
  },
  {
    text: "Hey Jory",
    user: "Stephen",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {

  res.render("index", {
    title: "Message Board",
    theme: "your First Express Project",
    messages: messages,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", {
    title: "Message Board (Add)",
    formTitle: "Add Message"
  });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.new_message,
    user: req.body.name,
    added: new Date(),
  });

  console.log(req.body);

  res.redirect("/");
});

module.exports = router;
