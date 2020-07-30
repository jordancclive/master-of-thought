"use strict";

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3005;
const db = require("./db");
let booksDb = require("./db/books");

app.use(express.static(__dirname + "/public"));
app.use("/vendor", express.static(path.join(__dirname, "node_modules")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  var name = "Master of Thought";
  res.render("index", { chapters: db.chapters, name: name });
});

app.get("/about", (req, res, next) => {
  var name = "About";
  res.render("about", { name });
});

app.get("/as-a-man-thinketh", (req, res, next) => {
  var name = "As a Man Thinketh";
  res.render("as-a-man-thinketh", { name, chapters: db.chapters });
});

app.get("/beliefs", (req, res, next) => {
  var name = "Beliefs";
  res.render("beliefs", { name });
});

app.get("/books", (req, res, next) => {
  var name = "Books";
  var booksData = booksDb.getBookByNoList();
  res.render("books", { booksData, name });
});

app.get("/books/:page_name", (req, res, next) => {
  let obj = booksDb.getBookByNoList();
  let _book_lists = booksDb._book_lists;
  let nextBook;
  let prevBook;
  let currBook;

  let keys = Object.keys(obj);

  // finding next book and prev book
  keys.forEach((key, keyIndex) => {
    obj[key].forEach((ele, i) => {
      if (ele.page_name == req.params.page_name) {
        currBook = {
          ...ele,
          _book_lists: _book_lists.filter((lst) =>
            ele.book_lists.includes(lst.no)
          ),
        };

        nextBook =
          i != obj[key].length - 1
            ? obj[key][i + 1]
            : obj[key - 1] && obj[key - 1][0];

        prevBook =
          i != 0
            ? obj[key][i - 1]
            : obj[Number(key) + 1] &&
              obj[Number(key) + 1][obj[Number(key) + 1].length - 1];
      }
    });
  });

  const name = currBook.name;
  res.render("book", {
    name,
    currBook,
    nextBook,
    prevBook,
  });
});

app.get("/cognitive-biases", (req, res, next) => {
  var name = "Cognitive Biases";
  res.render("cognitive-biases", {
    cognitiveBiases: db.cognitiveBiases,
    name: name,
  });
});

app.get("/foreign-languages", (req, res, next) => {
  var name = "Foreign Languages";
  res.render("foreign-languages", { name });
});

app.get("/logical-fallacies", (req, res, next) => {
  let name = "Logical Fallacies";
  res.render("logical-fallacies", {
    logicalFallacies: db.logicalFallacies,
    name,
  });
});

app.get("/virtues-and-vices", (req, res, next) => {
  const name = "Virtues and Vices";
  res.render("virtues-and-vices", { name });
});

app.get("/vocabulary", (req, res, next) => {
  var name = "Vocabulary";
  res.render("vocabulary", { name });
});

app.get("/world-cultures", (req, res, next) => {
  var name = "World Cultures";
  res.render("world-cultures", { name });
});

app.get("/chapter/:page_name", (req, res, next) => {
  var chapter = db.getChapter(req.params.page_name);
  res.render("chapter", {
    name: chapter.name,
    chapter: chapter,
    previous: db.getChapterById(chapter.id - 1),
    next: db.getChapterById(chapter.id + 1),
  });
});

app.get("/logical-fallacies/:page_name", (req, res, next) => {
  var logicalFallacy = db.getLF(req.params.page_name);
  res.render("logical-fallacy", {
    name: logicalFallacy.name,
    logicalFallacy: logicalFallacy,
    previous: db.getLFById(logicalFallacy.id - 1),
    next: db.getLFById(logicalFallacy.id + 1),
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
