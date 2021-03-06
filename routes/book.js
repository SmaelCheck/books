/**
 * Created by smael on 30/04/2017.
 */
var express = require('express'),
    router  = express.Router();

router.get('/book',(req,res,next)=>{
    res.send('Get all books.');
});


router.get('/book/add',(req,res,next)=>{
    res.send('Add a book.');
});

router.get('/book:id',(req,res,next)=>{
    res.send('get a book.');
});

router.post('/book/register',(req,res,next)=>{
    res.send('Add a book.');
});

router.post('/book',(req,res,next)=>{
    res.send('Post a book.');
});

router.put('/book:id',(req,res,next)=>{
    res.send('Update a book.');
});

router.delete('/book:id',(req,res,next)=>{
    res.send('Delete a book.');
});

module.exports = router;