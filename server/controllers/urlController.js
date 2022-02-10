const mongoose = require('mongoose');
const Url = require('../models/urlModels');
const jwt = require('jsonwebtoken')
const { nanoid } = require('nanoid')
require('dotenv').config();

const urlController = {
    createurl: async (req, res) => {
        // const { token } = req.headers
        // const accessToken = token.replace('Bearer ', "")
        // jwt.verify(accessToken, process.env.SECRET_KEY, async (err, payload) => {
        //     const { _id } = payload;
        //     const { longurl } = req.body;
        //     const surl = await nanoid(5)
        //     const urlData = new Url({
        //         // userid: _id,
        //         longurl,
        //         shorturl: surl
        //     })
        //     await urlData.save();
        //     return res.json(urlData)

        // })
        const { longurl } = req.body;
        const surl = await nanoid(5)
        const urlData = new Url({
            // userid: _id,
            longurl,
            shorturl: surl
        })
        await urlData.save();
        return res.json(urlData)
    }

}

const urlShow = {
    geturl: async (req, res) => {

        const urlData = await Url.find()
        res.json({ urlData });
        // const { token } = req.headers
        // const accessToken = token.replace('Bearer ', "")
        // jwt.verify(accessToken, "jsonwebtoken encryptiopn code", (err, payload) => {
        //     const { _id } = payload;
        //     const get = Url.findById({userid:_id})
        //     res.json({get});

        // })

    }
}
module.exports = { urlController, urlShow };