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
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Article2",
      createdAt: new Date(),
      description: "Test Description2",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
