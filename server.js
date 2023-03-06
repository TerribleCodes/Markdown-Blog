const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log(`Started the server at http://localhost:${process.env.PORT}`);
    app.listen(5000);
  },
  (err) => console.log(err)
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const article = await Article.find().sort({ createdAt: -1 });
  // render method will automatically look into the views folder and therefore no need to set the path with `views`
  res.render("articles/index", { articles: article });
});

app.use("/articles", articleRouter);
