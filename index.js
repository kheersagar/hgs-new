const express = require("express");
const app = express();

process.on("ERR_HTTP_HEADERS_SENT", function (err) {
  // Handle the error safely
  console.log(err);
});
app.get("/GetRSA", (req, res) => {
  let response = "";
  try {
    var spawn = require("child_process").spawn;
    var process = spawn("php", ["./GetRSA.php"]);
    process.stdout.on("data", (data) => {
      console.log(data.toString());
      response = data + "\n";
    });
    process.on("close", (code) => {
      if (code !== 0) {
        console.log(`grep process exited with code ${code}`);
      }
      res.send(response);
    });
  } catch (e) {
    res.status(400).send("some error ocurred");
  }
});

app.get("/test", (req, res) => {
  let response = "";
  try {
    var spawn = require("child_process").spawn;
    var process = spawn("php", ["./index.php"]);
    process.stdout.on("data", (data) => {
      console.log(data.toString());
      response = data + "\n";
    });
    process.on("close", (code) => {
      if (code !== 0) {
        console.log(`grep process exited with code ${code}`);
      }
      res.send(response);
    });
  } catch (e) {
    res.status(400).send("some error ocurred");
  }
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(process.env.PORT || 8080, () => {
  console.log(`server started on port ${process.env.PORT || 8080}`);
});
