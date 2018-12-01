const express = require('erpress');
const router  = express.router();
const Lawn    = require("../models/lawn");


router.get('/', (req,res,next) => {
   Lawn.getAllLawn((err,lawns) => {
       if(err) {
           return next(err);
       }else{
           res.json(lawns);
       }
   });
});

router.get('/:id',(req,res,next) => {
    Lawn.getLawn(req.params.id,(err,lawn) =>{
        if(err){
            return next(err);
        }else{
            res.json(lawn);
        }
    });

});
module.exports = router;