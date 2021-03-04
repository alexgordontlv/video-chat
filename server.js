const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
d;
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:roomId", (req, res) => {
  res.render("index", { roomId: req.params.roomId });
});

server.listen(PORT, () => {
  console.log("serving on port:", PORT);
});
