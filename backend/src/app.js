const express = require('express');
const cors = require('cors');
const app = express();

app.set('port',process.env.PORT || 4500);

app.use(cors());
app.use(express.json());

app.use('/api/customers',require('./routes/customers'));

if(process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
    });
}

module.exports = app;