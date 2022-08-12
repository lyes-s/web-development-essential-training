// https://docs.microsoft.com/en-us/shows/beginners-series-to-javascript/

import dotenv  from "dotenv"
import express from "express"

dotenv.config()

const app = express();
const port = process.env.PORT;

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listrening at http://localhost:${port}`);
});