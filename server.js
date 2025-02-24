const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); 

let books = []; 

app.get("/", (req, res) => {
    res.send(" API is running!");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        res.json({ message: "Login successful!" });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
});

app.listen(port, () => {
    console.log("Login Endpoint API running at http://localhost:${port}");
})



