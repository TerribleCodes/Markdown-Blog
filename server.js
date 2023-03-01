const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

// ejs acts as the view engine
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: Date.now(),
      description: "Test Description",
    },
  ];
  res.render("index", { articles: articles });
});

app.listen(5000);
