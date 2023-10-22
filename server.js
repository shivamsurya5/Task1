const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
// app.use(express.static(""));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
