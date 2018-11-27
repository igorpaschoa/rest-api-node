let express = require("express");
let app = express();

let personRoute = require("./routes/person");

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  next;
});

app.use(personRoute);
app.use(express.static("public"));

app.use((req, res, next) => {
  res.status(404).send("Error 404. Page not found. :)");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
