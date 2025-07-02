const router = require('express').Router();
const mongoose = require('mongoose');
const users = require('../model/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/', (req, res, next)=>
{
    const user = new users({
        url: req.body.urlInput,
        alias: req.body.aliasInput
    })

    user.save().then((result)=>{
        if(result)
            console.log(result);

        res.redirect('/');
    }).catch((err)=>{
        if(err)
            console.log(err);
    })
})


module.exports = router;
