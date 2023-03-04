const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

// Route Handling
const articleRouter = require("./routes/articles");
app.use(express.urlencoded({ extended: false }));
app.use("/articles", articleRouter);

// ejs acts as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Article2",
      createdAt: new Date(),
      description: "Test Description2",
    },
  ];

  // render method will automatically look into the views folder and therefore no need to set the path with `views`
  res.render("articles/index", { articles: articles });
});

mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("Listening on port 5000");
    app.listen(5000);
  },
  (err) => console.log(err)
);
