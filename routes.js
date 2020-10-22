const db = require('./db/models')
const express = require('express')

const router = express.Router();

router.get('/', async (req,res,next) => {
    // throw new Error('This is a test error!')
    try {
        const books = await db.Book.findAll({ order: [['title', 'ASC']] });
        res.render('index',{title:'Home', books});
    } catch (err) {
        next(err);
    }
})

module.exports = router;