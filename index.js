const express = require('express')
const urlRouter = require('./routes/url.routes');
const staticRouter = require('./routes/static.routes')
const { mongodbConnection } = require('./connect');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static('public'));

const PORT = process.env.PORT || 3004;
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

mongodbConnection('mongodb://0.0.0.0:27017/short-url')
app.use('/url', urlRouter)
app.use('/', staticRouter)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

