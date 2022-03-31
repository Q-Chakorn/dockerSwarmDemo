const express = require("express");
const app = express();

count = 0;
app.get("/", (req, res) => {
    res.json({result: "Hello Docker" , count: count++});
});

app.listen(91, () => {
    console.log("Server is running on port 91");
} );