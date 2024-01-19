const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5001;

const recaptchaRoute = require("./src/routes/reCaptcha");

const app = express();

app.use(
  cors({
    origin: ["https://portfolio-saiful.web.app", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PATCH", "OPTIONS"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});

app.use("/captcha", recaptchaRoute);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
