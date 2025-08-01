const express = require('express');
const app = express();

app.use(express.json());

const urlRouter = require('./routers/urlRouter');
const connectToMongoDB = require('./config/mongoose-config');
const urlModel = require('./models/url-model');

const PORT = 3000;

app.use('/url', urlRouter);

app.get("/:shortId",async (req, res) => {
    const shortId=req.params.shortId;
    const entry = await urlModel.findOneAndUpdate(
        { shortId },
        { $push:
            { 
                visitHistory: { timestamp: Date.now() }
            } 
        })
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});
