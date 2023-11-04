const { nanoid } = require('nanoid')
const urlModel = require('../models/url.model')
async function handleGenerateNewShortUrl(req, res) {
    const { url } = req.body
    if (!url) return res.status(400).json('url is required')
    shortId = nanoid(3);

    await urlModel.create({
        shortId,
        redirectUrl: url,
        visitHistory: []
    })
    return res.render('home', { id: shortId })
    // res.status(200).json({ id: shortId })
}
async function handleGetUrl(req, res) {
    // console.log(req.params.shortId)
    const shortId = req.params.shortId;

    if (!shortId) return res.status(400).json({ error: 'please provide valid url' })

    const result = await urlModel.findOneAndUpdate({ shortId }, {
        $push: {
            visitHistory: {
                timestamp: new Date()
            }
        }
    })
    // console.log(result)
    res.redirect(result.redirectUrl)
}
async function handleGetAnalyticsUrl(req, res) {
    const shortId = req.params.shortId;

    if (!shortId) return res.status(400).json({ error: 'please provide valid url' })

    const result = await urlModel.findOne({ shortId })
    if (!result) return res.status(401).send('url not found with provided shortId')
    res.status(200).json({ count: result.visitHistory.length, visitHistory: result.visitHistory })
}
module.exports = { handleGenerateNewShortUrl, handleGetUrl, handleGetAnalyticsUrl }