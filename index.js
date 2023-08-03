const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const axios = require("axios");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/appointment-app/branch", async (req, res) => {
  axios
    .get("https://uat.etiqa.com.my/appointment-app/branch")
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error fetching data:", error);
      res.sendStatus(500); // Send an appropriate error response
    });
});

app.get("/appointment-app/branch-traffic/:id", async (req, res) => {
  axios
    .get(
      `https://uat.etiqa.com.my/appointment-app/branch-traffic/${req.params.id}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error fetching data:", error);
      res.sendStatus(500); // Send an appropriate err
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
