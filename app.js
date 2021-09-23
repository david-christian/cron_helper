const express = require("express")
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5003;
const app = express()
const router = express.Router();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/aaa", (req, res) => {
    redisOriginal.set("davidKey", 1)
    res.status(200)
    return res.json({ok:1})
})

app.use("/", router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})