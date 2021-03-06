const express = require("express");
const path = require("path");
const app = express();

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
    var process = spawn("php", ["./index2.php"]);
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

app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`server started on port ${process.env.PORT || 8080}`);
});
