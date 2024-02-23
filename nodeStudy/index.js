const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/sound/:name", function (req, res) {
  const { name } = req.params;

  if (name == "dog") {
    res.json({
      sound: "멍멍",
      img: "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg",
    });
  } else if (name == "cat") {
    res.json({
      sound: "야옹",
      img: "https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg",
    });
  } else if (name == "pig") {
    res.json({
      sound: "꿀꿀",
      img: "https://cdn.pixabay.com/photo/2018/05/09/22/44/piglet-3386356_1280.jpg",
    });
  } else {
    res.json({
      sound: "에러다잉",
      img: "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_640.png",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
