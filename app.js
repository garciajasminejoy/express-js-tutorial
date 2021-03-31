const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const profileRouting = require('./routes/profile-routing');
const homeRouting = require('./routes/home-routing');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/profile', profileRouting);
app.use(homeRouting);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});


app.listen(3000);