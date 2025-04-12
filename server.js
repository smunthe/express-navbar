const express = require("express"); 
const morgan = require('morgan');
const path = require('path');

const app = express(); 
const PORT = 3000 || process.env.port

app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/typesetting', (req, res) => {
    res.redirect('https://github.com/smunthe/typesetting')
})

app.get('/climate', (req, res) => {
    res.redirect('https://github.com/smunthe/climate-crisis-group-project1')
})

app.get('/algo', (req, res) => {
    res.redirect('https://github.com/smunthe/four-sorting-algos')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})