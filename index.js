const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.json("hell-oh")
})

function notFound(req, res, next){
    res.status(404);
    const err = new Error('Not Found');
    next(err);
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}


app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5151;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})