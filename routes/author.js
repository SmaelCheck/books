/**
 * Created by smael on 30/04/2017.
 */
var express = require('express'),
    router  = express.Router();

router.get('/author',(req,res,next)=>{
    res.send('Get all authors');
});

module.exports = router;